
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // In a real application, this would fetch data based on the slug
  const blogPost = {
    title: "The Future of AI in Enterprise Solutions",
    content: `
      <p>Artificial Intelligence (AI) is no longer a futuristic concept—it's a transformative force reshaping how enterprises operate, make decisions, and deliver value to customers. As we move deeper into the digital age, AI has evolved from experimental technology to an essential business capability that drives innovation, efficiency, and competitive advantage.</p>

      <h2>The Current State of Enterprise AI</h2>
      <p>Today's enterprises are leveraging AI across various domains, from customer service chatbots and predictive maintenance systems to sophisticated data analytics platforms and automated decision-making processes. The technology has matured significantly, offering reliable, scalable solutions that integrate seamlessly with existing business infrastructure.</p>

      <p>According to recent industry research, over 75% of enterprises have already implemented or are actively planning AI initiatives. This widespread adoption reflects AI's proven ability to deliver measurable business outcomes, including:</p>

      <ul>
        <li>Operational cost reductions of 20-30%</li>
        <li>Improved customer satisfaction scores by up to 40%</li>
        <li>Faster decision-making processes</li>
        <li>Enhanced predictive capabilities for strategic planning</li>
      </ul>

      <h2>Key AI Technologies Driving Enterprise Transformation</h2>
      
      <h3>Machine Learning and Predictive Analytics</h3>
      <p>Machine learning algorithms are enabling enterprises to extract valuable insights from vast amounts of data, predict future trends, and optimize operations in real-time. From supply chain optimization to fraud detection, ML applications are delivering unprecedented levels of automation and intelligence.</p>

      <h3>Natural Language Processing (NLP)</h3>
      <p>NLP technologies are revolutionizing how enterprises interact with customers and process information. Advanced chatbots, document analysis systems, and voice-activated interfaces are streamlining operations while improving user experiences.</p>

      <h3>Computer Vision</h3>
      <p>Visual AI capabilities are transforming industries such as manufacturing, healthcare, and retail by enabling automated quality control, medical imaging analysis, and smart inventory management systems.</p>

      <h2>The Road Ahead: Future Trends and Opportunities</h2>
      
      <p>Looking forward, several key trends will shape the future of enterprise AI:</p>

      <h3>Democratization of AI</h3>
      <p>Low-code and no-code AI platforms are making advanced AI capabilities accessible to business users without technical backgrounds, enabling widespread innovation across organizations.</p>

      <h3>Ethical AI and Responsible Implementation</h3>
      <p>As AI becomes more pervasive, enterprises are prioritizing ethical considerations, bias mitigation, and transparent decision-making processes to ensure responsible AI deployment.</p>

      <h3>Edge AI and Real-Time Processing</h3>
      <p>The shift toward edge computing is enabling AI processing closer to data sources, reducing latency and enabling real-time decision-making for critical business applications.</p>

      <h2>Implementation Best Practices</h2>
      
      <p>Successful AI implementation requires a strategic approach that considers both technical and organizational factors:</p>

      <ol>
        <li><strong>Start with Clear Business Objectives:</strong> Define specific, measurable goals that AI will help achieve</li>
        <li><strong>Ensure Data Quality:</strong> Invest in robust data governance and quality assurance processes</li>
        <li><strong>Build Cross-Functional Teams:</strong> Combine technical expertise with domain knowledge</li>
        <li><strong>Plan for Scale:</strong> Design AI solutions with future growth and expansion in mind</li>
        <li><strong>Monitor and Iterate:</strong> Continuously evaluate performance and refine AI models</li>
      </ol>

      <h2>Conclusion</h2>
      
      <p>The future of AI in enterprise solutions is bright and full of potential. Organizations that embrace AI strategically and thoughtfully will be well-positioned to thrive in an increasingly competitive business landscape. The key to success lies in understanding that AI is not just a technology implementation—it's a fundamental shift in how businesses operate and create value.</p>

      <p>As we continue to witness rapid advancements in AI capabilities, the enterprises that invest in building AI competencies today will be the leaders of tomorrow. The question is not whether to adopt AI, but how quickly and effectively organizations can integrate these powerful technologies into their core business processes.</p>
    `,
    date: "March 15, 2024",
    author: {
      name: "Sarah Chen",
      bio: "Sarah is our Chief Technology Officer with over 15 years of experience in enterprise AI and digital transformation. She holds a PhD in Computer Science from MIT and has led AI initiatives at Fortune 500 companies.",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    },
    category: "AI & Automation",
    tags: ["AI", "Machine Learning", "Enterprise", "Digital Transformation", "Innovation"],
    readTime: "8 min read",
    image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
  };

  const relatedPosts = [
    {
      title: "Machine Learning Implementation Guide for Enterprises",
      excerpt: "A step-by-step approach to implementing ML solutions in large organizations.",
      date: "March 12, 2024",
      slug: "ml-implementation-guide"
    },
    {
      title: "Ethical AI: Building Responsible AI Systems",
      excerpt: "Best practices for ensuring AI systems are fair, transparent, and accountable.",
      date: "March 8, 2024",
      slug: "ethical-ai-practices"
    },
    {
      title: "ROI of AI: Measuring Success in Digital Transformation",
      excerpt: "Key metrics and frameworks for evaluating AI investment returns.",
      date: "March 5, 2024",
      slug: "ai-roi-measurement"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 overflow-hidden relative">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              {blogPost.category}
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {blogPost.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {blogPost.author.name}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {blogPost.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <span key={index} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none mb-16">
          <div 
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>

        {/* Author Bio */}
        <Card className="bg-slate-700/30 border-slate-600 mb-16">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={blogPost.author.image} 
                  alt={blogPost.author.name}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">About {blogPost.author.name}</h3>
                <p className="text-gray-300 leading-relaxed">{blogPost.author.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how our AI and automation solutions can drive innovation and efficiency in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/services/ai">
                  <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                    Learn About Our AI Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
