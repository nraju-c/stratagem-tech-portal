
import { ArrowRight, Cloud, Settings, Code, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import video from "../../public/homevideo.mp4"

const Home = () => {
  const services = [
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology guidance to optimize your digital infrastructure and drive business growth.",
      link: "/services/consulting"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Seamless cloud migration and management for scalable, secure, and cost-effective operations.",
      link: "/services/cloud"
    },
    {
      icon: Code,
      title: "AI & Automation",
      description: "Intelligent automation solutions that streamline processes and enhance decision-making capabilities.",
      link: "/services/ai"
    },
    {
      icon: Users,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your unique business needs.",
      link: "/services/development"
    }
  ];

  const industries = [
    { name: "Finance", icon: "💰" },
    { name: "Telecom", icon: "📡" },
    { name: "Oil & Gas", icon: "⛽" },
    { name: "Utilities", icon: "⚡" },
    { name: "Insurance", icon: "🛡️" },
    { name: "Pharma", icon: "💊" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Retail", icon: "🛍️" },
    { name: "Manufacturing", icon: "🏭" }
  ];

  const whyChooseUs = [
    {
      title: "Future-Ready Technology",
      description: "We leverage cutting-edge AI, cloud computing, and emerging technologies to keep you ahead of the curve."
    },
    {
      title: "Proven Expertise",
      description: "Our team of certified professionals brings deep industry knowledge and technical excellence to every project."
    },
    {
      title: "End-to-End Solutions",
      description: "From strategy to implementation, we provide comprehensive solutions that drive real business value."
    },
    {
      title: "Agile Methodology",
      description: "Our iterative approach ensures rapid delivery, continuous improvement, and adaptive project management."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support to ensure your systems operate at peak performance."
    }
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Solutions",
      excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
      date: "March 15, 2024",
      author: "Sarah Chen",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    },
    {
      title: "Cloud Migration Best Practices",
      excerpt: "A comprehensive guide to successful cloud migration strategies for enterprise organizations.",
      date: "March 10, 2024",
      author: "Michael Rodriguez",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    },
    {
      title: "Cybersecurity in the Digital Age",
      excerpt: "Essential security measures every organization needs to protect against evolving cyber threats.",
      date: "March 5, 2024",
      author: "David Kim",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
      <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"

>
  <source src={video} type="video/mp4" />
</video>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Transforming Vision into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{color:'white'}}>
              Unleash the power of innovation with a strategic partner that redefines what's possible. 
              We specialize in accelerating business transformation through AI, cloud computing, data engineering, 
              cybersecurity, and emerging tech solutions. Our future-ready approach bridges the gap between 
              legacy infrastructure and intelligent digital ecosystems—empowering enterprises to evolve, 
              adapt, and lead in a rapidly shifting world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a href="/contact">

              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <Link to={service.link} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse industry verticals
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-white font-medium">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose TechSolutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for digital transformation and technology excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-300">
                Stay informed with our latest technology trends and insights
              </p>
            </div>
            <Link to="/blog" className="text-blue-400 hover:text-blue-300 font-medium">
              View All Posts →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-slate-700/30 border-slate-600 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date} • By {post.author}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can accelerate your digital transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
