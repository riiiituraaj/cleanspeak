import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Send, X, Minimize2, Bot, User } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm CleanBot, your environmental assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickReplies = [
    "How to report illegal dumping?",
    "What are the penalties?",
    "Contact authorities",
    "Check waste laws"
  ];

  const predefinedResponses = {
    "how to report": "To report illegal dumping: 1) Go to our Report page, 2) Fill in location details, 3) Upload photos/videos if possible, 4) Choose anonymous or identified reporting, 5) Submit your report. We'll forward it to relevant authorities.",
    "penalties": "Penalties for illegal dumping in India range from ₹500-₹5,000 for individuals, up to ₹1,00,000 for institutions. Repeat offenders face higher fines and potential legal action under the Environment Protection Act, 1986.",
    "contact": "You can find contact details for pollution control boards and municipal authorities in our Contacts page. For Assam, the main authority is APCB (Assam Pollution Control Board) at +91-361-2540041.",
    "laws": "Key environmental laws include: Environment Protection Act 1986, Municipal Solid Wastes Rules 2000, and Solid Waste Management Rules 2016. Check our Laws page for detailed information.",
    "anonymous": "Yes, you can report completely anonymously. We don't track or store any personal information for anonymous reports. Your identity is protected.",
    "evidence": "Photos and videos greatly help authorities take action. You can capture them directly using our app or upload existing files. GPS location is automatically tagged if you allow it."
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    const botResponse = getBotResponse(inputMessage.toLowerCase());
    const botMessage = {
      id: messages.length + 2,
      text: botResponse,
      sender: "bot",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputMessage("");
  };

  const getBotResponse = (message: string) => {
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! I'm here to help with your environmental reporting questions. What would you like to know?";
    }
    
    if (message.includes("thank")) {
      return "You're welcome! Together we can make our environment cleaner. Is there anything else you'd like to know?";
    }

    return "I understand you're asking about environmental issues. For specific help, try asking about 'how to report', 'penalties', 'contact authorities', or 'waste laws'. You can also explore our different pages for detailed information.";
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="hero"
            size="lg"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl smooth-hover z-50"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md h-[500px] p-0 gap-0">
          {/* Chat Header */}
          <CardHeader className="pb-3 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">CleanBot</CardTitle>
                  <p className="text-xs text-muted-foreground">Environmental Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Chat Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === "bot" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-accent/10 text-accent"
                }`}>
                  {message.sender === "bot" ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "bot"
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground"
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground smooth-hover"
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>

          {/* Chat Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Ask me about environmental reporting..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Chatbot;