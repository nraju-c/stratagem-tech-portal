
import { Settings, Cloud, Code, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'consulting',
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology guidance to optimize your digital infrastructure and drive business growth.",
      features: [
        "Digital Transformation Strategy",
        "Technology Architecture Planning",
        "IT Infrastructure Assessment",
        "Process Optimization",
        "Technology Roadmap Development"
      ],
      benefits: "Align technology initiatives with business objectives for maximum ROI and competitive advantage."
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Seamless cloud migration and management for scalable, secure, and cost-effective operations.",
      features: [
        "Cloud Migration Strategy",
        "Multi-Cloud Architecture",
        "Cloud Security Implementation",
        "DevOps & Automation",
        "Cloud Cost Optimization"
      ],
      benefits: "Reduce infrastructure costs by up to 40% while improving scalability and performance."
    },
    {
      id: 'ai',
      icon: Zap,
      title: "AI & Automation",
      description: "Intelligent automation solutions that streamline processes and enhance decision-making capabilities.",
      features: [
        "Machine Learning Implementation",
        "Process Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions"
      ],
      benefits: "Increase operational efficiency by 60% through intelligent automation and data-driven insights."
    },
    {
      id: 'development',
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your unique business needs.",
      features: [
        "Custom Application Development",
        "API Development & Integration",
        "Mobile App Development",
        "Legacy System Modernization",
        "Quality Assurance & Testing"
      ],
      benefits: "Accelerate time-to-market with robust, scalable applications tailored to your business requirements."
    },
    {
      id: 'project-management',
      icon: Users,
      title: "Technical Project Management",
      description: "Expert project management ensuring successful delivery of complex technical initiatives.",
      features: [
        "Agile Project Management",
        "Technical Team Leadership",
        "Stakeholder Communication",
        "Risk Management",
        "Quality Assurance Oversight"
      ],
      benefits: "Deliver projects on time and within budget with 95% client satisfaction rate."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            journey and drive sustainable business growth through innovative, future-ready approaches.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <Card className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-300">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 mb-6">
                          <p className="text-blue-300 text-sm font-medium">{service.benefits}</p>
                        </div>
                        
                        <Link to={`/services/${service.id}`}>
                          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                      <IconComponent className="w-32 h-32 text-blue-400 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can be tailored to meet your specific business objectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
