
import { useState } from 'react';
import { Search, Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Automation', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'Industry Insights'];

  const blogPosts = [
    {
      id: 1,
      slug: 'future-of-ai-enterprise',
      title: "The Future of AI in Enterprise Solutions",
      excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making processes across industries.",
      content: "Full article content would go here...",
      date: "March 15, 2024",
      author: "Sarah Chen",
      category: "AI & Automation",
      tags: ["AI", "Machine Learning", "Enterprise", "Innovation"],
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png",
      readTime: "8 min read"
    },
    {
      id: 2,
      slug: 'cloud-migration-best-practices',
      title: "Cloud Migration Best Practices for Enterprise Organizations",
      excerpt: "A comprehensive guide to successful cloud migration strategies, common pitfalls, and optimization techniques.",
      content: "Full article content would go here...",
      date: "March 10, 2024",
      author: "Michael Rodriguez",
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "Strategy", "Enterprise"],
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png",
      readTime: "12 min read"
    },
    {
      id: 3,
      slug: 'cybersecurity-digital-age',
      title: "Cybersecurity in the Digital Age: Protecting Your Business",
      excerpt: "Essential security measures every organization needs to protect against evolving cyber threats.",
      content: "Full article content would go here...",
      date: "March 5, 2024",
      author: "David Kim",
      category: "Cybersecurity",
      tags: ["Security", "Cyber Threats", "Protection", "Risk Management"],
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png",
      readTime: "10 min read"
    },
    {
      id: 4,
      slug: 'digital-transformation-trends-2024',
      title: "Digital Transformation Trends Shaping 2024",
      excerpt: "Key technology trends that will define digital transformation strategies in the coming year.",
      content: "Full article content would go here...",
      date: "February 28, 2024",
      author: "Lisa Wang",
      category: "Digital Transformation",
      tags: ["Digital Transformation", "Trends", "Technology", "Strategy"],
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png",
      readTime: "7 min read"
    },
    {
      id: 5,
      slug: 'automation-manufacturing-industry',
      title: "How Automation is Revolutionizing the Manufacturing Industry",
      excerpt: "Industry 4.0 technologies are transforming manufacturing processes and improving operational efficiency.",
      content: "Full article content would go here...",
      date: "February 20, 2024",
      author: "Sarah Chen",
      category: "Industry Insights",
      tags: ["Manufacturing", "Automation", "Industry 4.0", "IoT"],
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png",
      readTime: "9 min read"
    },
    {
      id: 6,
      slug: 'multi-cloud-strategy-guide',
      title: "Building a Robust Multi-Cloud Strategy",
      excerpt: "Learn how to leverage multiple cloud providers for enhanced reliability, performance, and cost optimization.",
      content: "Full article content would go here...",
      date: "February 15, 2024",
      author: "Michael Rodriguez",
      category: "Cloud Computing",
      tags: ["Multi-Cloud", "Strategy", "Cost Optimization", "Architecture"],
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png",
      readTime: "11 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Insights & Trends
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay ahead of the curve with expert insights, industry analysis, and practical guides 
            on the latest technology trends transforming businesses worldwide.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-blue-500 hover:bg-blue-600" 
                    : "border-slate-600 text-gray-300 hover:bg-slate-700"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
