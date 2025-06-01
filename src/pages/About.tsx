
import { Users, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of technology to deliver cutting-edge solutions that drive real business value."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnership, working closely with our clients to understand their unique challenges and goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality and professionalism in every project we undertake."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We're committed to creating positive change through technology that transforms businesses and communities."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "15+ years in enterprise technology with expertise in digital transformation and AI strategy.",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Cloud architect and software engineering leader with experience at Fortune 500 companies.",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    },
    {
      name: "David Kim",
      role: "Head of Cybersecurity",
      bio: "Former government cybersecurity analyst specializing in enterprise security solutions.",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    },
    {
      name: "Lisa Wang",
      role: "Head of AI Solutions",
      bio: "PhD in Machine Learning with expertise in implementing AI solutions for business transformation.",
      image: "/lovable-uploads/b189853c-5b4f-4181-aa8d-63fd410ac59c.png"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About QSORT
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We are a forward-thinking IT services company dedicated to empowering businesses 
            through innovative technology solutions. Founded on the principle that technology 
            should be a catalyst for growth, we bridge the gap between complex technological 
            challenges and practical business outcomes.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower organizations with innovative technology solutions that drive digital 
                transformation, enhance operational efficiency, and create sustainable competitive 
                advantages in an ever-evolving digital landscape.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the most trusted technology partner for enterprises worldwide, leading 
                the way in AI-driven innovation, cloud transformation, and intelligent digital 
                ecosystems that shape the future of business.
              </p>
            </div>

            {/* Values Preview */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-300 leading-relaxed">
                Built on a foundation of innovation, collaboration, excellence, and positive 
                impact, we are committed to delivering transformative solutions that exceed 
                expectations and drive meaningful results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to technology and client relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and excellence at TechSolutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
