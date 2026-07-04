import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, MessageSquare, ThumbsUp, ThumbsDown, Flag, Plus, Search, MapPin, Calendar, ArrowLeft } from "lucide-react";

const ForumPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Illegal dumping near Guwahati Railway Station",
      content: "Large pile of construction waste dumped behind the station. Authorities need to take action.",
      author: "Anonymous User",
      location: "Guwahati, Assam",
      timestamp: "2 hours ago",
      upvotes: 15,
      downvotes: 2,
      replies: 8,
      tags: ["construction-waste", "guwahati", "urgent"]
    },
    {
      id: 2,
      title: "Plastic waste in Brahmaputra riverbank",
      content: "Noticed increasing plastic pollution along the riverbank near Fancy Bazaar. Local vendors are dumping waste directly.",
      author: "EcoWarrior23",
      location: "Guwahati, Assam",
      timestamp: "1 day ago",
      upvotes: 32,
      downvotes: 0,
      replies: 12,
      tags: ["plastic-waste", "river-pollution", "brahmaputra"]
    },
    {
      id: 3,
      title: "Success story: Clean-up drive in Jorhat",
      content: "Organized a community clean-up drive last weekend. Collected 200kg of waste! Here's how we did it...",
      author: "CleanJorhat",
      location: "Jorhat, Assam",
      timestamp: "3 days ago",
      upvotes: 48,
      downvotes: 1,
      replies: 25,
      tags: ["success-story", "community", "jorhat"]
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    location: "",
    tags: ""
  });

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.content) return;
    
    const post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: "Anonymous User",
      location: newPost.location || "Unknown",
      timestamp: "Just now",
      upvotes: 0,
      downvotes: 0,
      replies: 0,
      tags: newPost.tags ? newPost.tags.split(',').map(tag => tag.trim()) : []
    };
    
    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "", location: "", tags: "" });
  };

  const handleVote = (postId: number, type: 'up' | 'down') => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          upvotes: type === 'up' ? post.upvotes + 1 : post.upvotes,
          downvotes: type === 'down' ? post.downvotes + 1 : post.downvotes
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 lg:px-12 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">CleanSpeak</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/laws">
              <Button variant="ghost">Laws</Button>
            </Link>
            <Link to="/contacts">
              <Button variant="ghost">Contacts</Button>
            </Link>
            <Link to="/report">
              <Button variant="hero">Report Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-6 smooth-hover">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Community Forum
                </h1>
                <p className="text-muted-foreground">
                  Discuss local waste issues anonymously and share solutions
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Post</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Title</label>
                      <Input
                        placeholder="Describe the issue briefly..."
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Location</label>
                      <Input
                        placeholder="City, State"
                        value={newPost.location}
                        onChange={(e) => setNewPost({...newPost, location: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Content</label>
                      <Textarea
                        placeholder="Share details about the waste issue..."
                        rows={4}
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Tags (comma separated)</label>
                      <Input
                        placeholder="plastic-waste, illegal-dumping, urgent"
                        value={newPost.tags}
                        onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                      />
                    </div>
                    <Button onClick={handleCreatePost} className="w-full">
                      Post Anonymously
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search discussions..." 
                className="pl-10"
              />
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="soft-shadow border-border/50 hover:border-primary/20 smooth-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 hover:text-accent smooth-hover cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs bg-muted">
                              {post.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{post.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.content}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent"
                        onClick={() => handleVote(post.id, 'up')}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.upvotes}</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent"
                        onClick={() => handleVote(post.id, 'down')}
                      >
                        <ThumbsDown className="h-4 w-4" />
                        <span>{post.downvotes}</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.replies} replies</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;