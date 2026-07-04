import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full soft-shadow slide-up">
        <CardContent className="p-8 text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary mb-4 floating-animation">404</div>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-gold mx-auto rounded-full pulse-glow"></div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Oops! Page not found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track!
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/">
              <Button className="w-full sm:w-auto hover:scale-105 smooth-hover">
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            <Link to="/help">
              <Button variant="outline" className="w-full sm:w-auto hover:scale-105 smooth-hover">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Help
              </Button>
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link to="/report">
                <Button variant="ghost" size="sm" className="smooth-hover">
                  Report Issue
                </Button>
              </Link>
              <Link to="/forum">
                <Button variant="ghost" size="sm" className="smooth-hover">
                  Community Forum
                </Button>
              </Link>
              <Link to="/laws">
                <Button variant="ghost" size="sm" className="smooth-hover">
                  Laws & Penalties
                </Button>
              </Link>
              <Link to="/contacts">
                <Button variant="ghost" size="sm" className="smooth-hover">
                  Contact Authorities
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
