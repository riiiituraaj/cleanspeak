import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  FileText, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Calendar,
  ArrowLeft
} from "lucide-react";

const AdminPage = () => {
  const [reports] = useState([
    {
      id: 1,
      title: "Illegal dumping near Railway Station",
      location: "Guwahati, Assam",
      status: "pending",
      priority: "high",
      submittedAt: "2 hours ago",
      evidence: true,
      anonymous: true
    },
    {
      id: 2,
      title: "Plastic waste in river",
      location: "Jorhat, Assam",
      status: "investigating",
      priority: "medium",
      submittedAt: "1 day ago",
      evidence: true,
      anonymous: false
    },
    {
      id: 3,
      title: "Construction waste dumping",
      location: "Dibrugarh, Assam",
      status: "resolved",
      priority: "low",
      submittedAt: "3 days ago",
      evidence: false,
      anonymous: true
    }
  ]);

  const [forumPosts] = useState([
    {
      id: 1,
      title: "Successful cleanup drive in Silchar",
      author: "EcoWarrior23",
      status: "approved",
      reports: 2,
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      title: "Need help organizing cleanup",
      author: "Anonymous User",
      status: "pending",
      reports: 0,
      timestamp: "4 hours ago"
    }
  ]);

  const stats = {
    totalReports: 156,
    pendingReports: 23,
    resolvedReports: 133,
    activeUsers: 89,
    forumPosts: 45,
    averageResponseTime: "2.3 hours"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "destructive";
      case "investigating": return "secondary";
      case "resolved": return "default";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 lg:px-12 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">CleanSpeak Admin</span>
          </Link>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Monitor reports, manage forum posts, and track platform activity
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
            <Card className="text-center p-4">
              <FileText className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stats.totalReports}</div>
              <div className="text-xs text-muted-foreground">Total Reports</div>
            </Card>
            <Card className="text-center p-4">
              <Clock className="h-6 w-6 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stats.pendingReports}</div>
              <div className="text-xs text-muted-foreground">Pending</div>
            </Card>
            <Card className="text-center p-4">
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stats.resolvedReports}</div>
              <div className="text-xs text-muted-foreground">Resolved</div>
            </Card>
            <Card className="text-center p-4">
              <Users className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stats.activeUsers}</div>
              <div className="text-xs text-muted-foreground">Active Users</div>
            </Card>
            <Card className="text-center p-4">
              <MessageSquare className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stats.forumPosts}</div>
              <div className="text-xs text-muted-foreground">Forum Posts</div>
            </Card>
            <Card className="text-center p-4">
              <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stats.averageResponseTime}</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reports">Reports Management</TabsTrigger>
              <TabsTrigger value="forum">Forum Moderation</TabsTrigger>
            </TabsList>

            <TabsContent value="reports" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Recent Reports</h2>
                <div className="flex gap-2">
                  <Badge variant="outline">All</Badge>
                  <Badge variant="destructive">Pending</Badge>
                  <Badge variant="secondary">Investigating</Badge>
                  <Badge variant="default">Resolved</Badge>
                </div>
              </div>

              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id} className="soft-shadow border-border/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{report.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{report.submittedAt}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant={getStatusColor(report.status)}>
                            {report.status}
                          </Badge>
                          <Badge variant={getPriorityColor(report.priority)}>
                            {report.priority}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{report.evidence ? "📸 Has Evidence" : "📝 Text Only"}</span>
                          <span>{report.anonymous ? "🕶️ Anonymous" : "👤 Identified"}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="default">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="forum" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Forum Posts</h2>
                <div className="flex gap-2">
                  <Badge variant="outline">All</Badge>
                  <Badge variant="destructive">Pending</Badge>
                  <Badge variant="default">Approved</Badge>
                  <Badge variant="secondary">Flagged</Badge>
                </div>
              </div>

              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <Card key={post.id} className="soft-shadow border-border/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>By {post.author}</span>
                            <span>{post.timestamp}</span>
                            {post.reports > 0 && (
                              <div className="flex items-center gap-1 text-destructive">
                                <AlertTriangle className="h-3 w-3" />
                                <span>{post.reports} reports</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <Badge variant={post.status === "approved" ? "default" : "destructive"}>
                          {post.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Post
                        </Button>
                        {post.status === "pending" && (
                          <>
                            <Button size="sm" variant="default">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;