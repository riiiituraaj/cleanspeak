import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, StopCircle, RotateCcw, MapPin, X, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CameraCaptureProps {
  onCapture: (file: File, location?: { lat: number; lng: number }) => void;
  onClose: () => void;
}

const CameraCapture = ({ onCapture, onClose }: CameraCaptureProps) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [capturedMedia, setCapturedMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    startCamera();
    getCurrentLocation();
    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: true
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      toast({
        title: "Camera Access Denied",
        description: "Please allow camera access to capture evidence",
        variant: "destructive"
      });
    }
  };

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          toast({
            title: "Location Captured",
            description: "GPS coordinates will be attached to your media"
          });
        },
        (error) => {
          toast({
            title: "Location Access Denied",
            description: "Location will not be attached to your media",
            variant: "destructive"
          });
        }
      );
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    if (context) {
      context.drawImage(video, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `dump-evidence-${Date.now()}.jpg`, {
            type: 'image/jpeg'
          });
          setCapturedMedia(canvas.toDataURL());
          setMediaType('photo');
        }
      }, 'image/jpeg', 0.9);
    }
  };

  const startVideoRecording = () => {
    if (!stream) return;

    const recorder = new MediaRecorder(stream);
    const chunks: BlobPart[] = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const file = new File([blob], `dump-evidence-${Date.now()}.webm`, {
        type: 'video/webm'
      });
      
      const url = URL.createObjectURL(blob);
      setCapturedMedia(url);
      setMediaType('video');
    };

    recorder.start();
    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  const stopVideoRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const confirmCapture = () => {
    if (capturedMedia) {
      // Convert data URL back to file
      if (mediaType === 'photo') {
        fetch(capturedMedia)
          .then(res => res.blob())
          .then(blob => {
            const file = new File([blob], `dump-evidence-${Date.now()}.jpg`, {
              type: 'image/jpeg'
            });
            onCapture(file, location || undefined);
          });
      } else {
        // For video, we already have the file from the recording process
        fetch(capturedMedia)
          .then(res => res.blob())
          .then(blob => {
            const file = new File([blob], `dump-evidence-${Date.now()}.webm`, {
              type: 'video/webm'
            });
            onCapture(file, location || undefined);
          });
      }
    }
  };

  const retakeMedia = () => {
    setCapturedMedia(null);
    setMediaType('photo');
  };

  if (capturedMedia) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-foreground">Review Captured Evidence</h3>
            {location && (
              <Badge variant="outline" className="mt-2">
                <MapPin className="h-3 w-3 mr-1" />
                GPS Tagged
              </Badge>
            )}
          </div>
          
          <div className="mb-4 rounded-lg overflow-hidden">
            {mediaType === 'photo' ? (
              <img src={capturedMedia} alt="Captured evidence" className="w-full h-auto" />
            ) : (
              <video src={capturedMedia} controls className="w-full h-auto" />
            )}
          </div>

          <div className="flex gap-2">
            <Button onClick={retakeMedia} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake
            </Button>
            <Button onClick={confirmCapture} variant="hero" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Use This
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Capture Evidence</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {location && (
          <Badge variant="outline" className="mb-4">
            <MapPin className="h-3 w-3 mr-1" />
            Location: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
          </Badge>
        )}

        <div className="mb-4 rounded-lg overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-64 object-cover"
          />
          <canvas ref={canvasRef} className="hidden" />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={capturePhoto}
            variant="hero"
            className="flex-1"
            disabled={!stream}
          >
            <Camera className="h-4 w-4 mr-2" />
            Photo
          </Button>
          
          {!isRecording ? (
            <Button
              onClick={startVideoRecording}
              variant="outline"
              className="flex-1"
              disabled={!stream}
            >
              <Video className="h-4 w-4 mr-2" />
              Record
            </Button>
          ) : (
            <Button
              onClick={stopVideoRecording}
              variant="destructive"
              className="flex-1"
            >
              <StopCircle className="h-4 w-4 mr-2" />
              Stop
            </Button>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-3">
          {location 
            ? "📍 Your location will be attached to the media" 
            : "⚠️ Location access denied - GPS won't be attached"
          }
        </p>
      </CardContent>
    </Card>
  );
};

export default CameraCapture;