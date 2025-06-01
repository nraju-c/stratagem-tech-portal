
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, Cloud, Code, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { serviceType } = useParams<{ serviceType: string }>();

  const serviceData: Record<string, any> = {
    consulting: {
      icon: Settings,
      title: "IT Consulting",
      subtitle: "Strategic Technology Guidance",
      description: "Transform your business with expert strategic technology guidance that aligns IT initiatives with business objectives, optimizes digital infrastructure, and drives sustainable growth through innovative solutions.",
      features: [
        {
          title: "Digital Transformation Strategy",
          description: "Comprehensive roadmaps for digital evolution and business modernization"
        },
        {
          title: "Technology Architecture Planning",
          description: "Scalable, future-ready architecture designs for optimal performance"
        },
        {
          title: "IT Infrastructure Assessment",
          description: "In-depth analysis of current systems with optimization recommendations"
        },
        {
          title: "Process Optimization",
          description: "Streamline operations through technology-driven process improvements"
        },
        {
          title: "Technology Roadmap Development",
          description: "Long-term strategic planning for technology investments and upgrades"
        }
      ],
      benefits: [
        "Reduce operational costs by up to 30%",
        "Improve system efficiency and performance",
        "Enhance security and compliance posture",
        "Accelerate digital transformation initiatives",
        "Increase competitive advantage through technology"
      ],
      process: [
        {
          step: "Assessment",
          description: "Comprehensive evaluation of current technology landscape and business requirements"
        },
        {
          step: "Strategy",
          description: "Development of tailored technology strategy aligned with business goals"
        },
        {
          step: "Planning",
          description: "Detailed implementation roadmap with timelines and resource allocation"
        },
        {
          step: "Execution",
          description: "Guided implementation with ongoing support and optimization"
        }
      ]
    },
    cloud: {
      icon: Cloud,
      title: "Cloud Solutions",
      subtitle: "Scalable Cloud Infrastructure",
      description: "Accelerate your digital transformation with comprehensive cloud solutions that provide scalability, security, and cost-effectiveness while enabling rapid innovation and business agility.",
      features: [
        {
          title: "Cloud Migration Strategy",
          description: "Seamless migration planning and execution for legacy systems"
        },
        {
          title: "Multi-Cloud Architecture",
          description: "Hybrid and multi-cloud solutions for optimal performance and resilience"
        },
        {
          title: "Cloud Security Implementation",
          description: "Robust security frameworks and compliance for cloud environments"
        },
        {
          title: "DevOps & Automation",
          description: "CI/CD pipelines and infrastructure automation for efficient delivery"
        },
        {
          title: "Cloud Cost Optimization",
          description: "Continuous monitoring and optimization to reduce cloud spending"
        }
      ],
      benefits: [
        "Reduce infrastructure costs by up to 40%",
        "Improve scalability and flexibility",
        "Enhance disaster recovery capabilities",
        "Accelerate time-to-market for applications",
        "Enable remote work and collaboration"
      ],
      process: [
        {
          step: "Assessment",
          description: "Cloud readiness evaluation and migration strategy development"
        },
        {
          step: "Design",
          description: "Architecture design and security framework planning"
        },
        {
          step: "Migration",
          description: "Phased migration execution with minimal business disruption"
        },
        {
          step: "Optimization",
          description: "Ongoing monitoring, optimization, and support"
        }
      ]
    },
    ai: {
      icon: Zap,
      title: "AI & Automation",
      subtitle: "Intelligent Business Solutions",
      description: "Harness the power of artificial intelligence and automation to streamline operations, enhance decision-making, and create intelligent systems that drive business value and competitive advantage.",
      features: [
        {
          title: "Machine Learning Implementation",
          description: "Custom ML models for predictive analytics and business intelligence"
        },
        {
          title: "Process Automation",
          description: "Intelligent automation for repetitive tasks and workflow optimization"
        },
        {
          title: "Predictive Analytics",
          description: "Data-driven insights for forecasting and strategic decision-making"
        },
        {
          title: "Natural Language Processing",
          description: "Text analysis, chatbots, and language understanding solutions"
        },
        {
          title: "Computer Vision Solutions",
          description: "Image recognition and visual data processing capabilities"
        }
      ],
      benefits: [
        "Increase operational efficiency by 60%",
        "Reduce manual errors and processing time",
        "Improve customer experience and satisfaction",
        "Enable data-driven decision making",
        "Create new revenue opportunities"
      ],
      process: [
        {
          step: "Analysis",
          description: "Identify automation opportunities and AI use cases"
        },
        {
          step: "Development",
          description: "Build and train AI models tailored to your business needs"
        },
        {
          step: "Integration",
          description: "Seamless integration with existing systems and workflows"
        },
        {
          step: "Optimization",
          description: "Continuous learning and model improvement"
        }
      ]
    },
    development: {
      icon: Code,
      title: "Software Development",
      subtitle: "Custom Software Solutions",
      description: "Build robust, scalable software solutions tailored to your unique business requirements using cutting-edge technologies and industry best practices for optimal performance and user experience.",
      features: [
        {
          title: "Custom Application Development",
          description: "Bespoke software solutions built to your exact specifications"
        },
        {
          title: "API Development & Integration",
          description: "Seamless system integration and third-party service connectivity"
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android"
        },
        {
          title: "Legacy System Modernization",
          description: "Upgrade and modernize legacy applications with new technologies"
        },
        {
          title: "Quality Assurance & Testing",
          description: "Comprehensive testing strategies to ensure software reliability"
        }
      ],
      benefits: [
        "Accelerate time-to-market by 50%",
        "Improve user experience and engagement",
        "Reduce maintenance costs and technical debt",
        "Enhance system security and performance",
        "Enable business growth and scalability"
      ],
      process: [
        {
          step: "Discovery",
          description: "Requirements gathering and technical specification development"
        },
        {
          step: "Design",
          description: "UI/UX design and system architecture planning"
        },
        {
          step: "Development",
          description: "Agile development with regular iterations and feedback"
        },
        {
          step: "Deployment",
          description: "Testing, deployment, and ongoing maintenance support"
        }
      ]
    },
    "project-management": {
      icon: Users,
      title: "Technical Project Management",
      subtitle: "Expert Project Leadership",
      description: "Ensure successful delivery of complex technical initiatives with expert project management that combines technical expertise, proven methodologies, and stakeholder alignment.",
      features: [
        {
          title: "Agile Project Management",
          description: "Iterative development approach with continuous feedback and adaptation"
        },
        {
          title: "Technical Team Leadership",
          description: "Expert guidance and coordination of technical teams and resources"
        },
        {
          title: "Stakeholder Communication",
          description: "Clear, consistent communication with all project stakeholders"
        },
        {
          title: "Risk Management",
          description: "Proactive identification and mitigation of project risks"
        },
        {
          title: "Quality Assurance Oversight",
          description: "Comprehensive quality control throughout the project lifecycle"
        }
      ],
      benefits: [
        "Deliver projects on time and within budget",
        "Achieve 95% client satisfaction rate",
        "Reduce project risks and uncertainties",
        "Improve team productivity and collaboration",
        "Ensure quality deliverables and outcomes"
      ],
      process: [
        {
          step: "Planning",
          description: "Project scope definition, timeline, and resource planning"
        },
        {
          step: "Execution",
          description: "Team coordination, progress tracking, and deliverable management"
        },
        {
          step: "Monitoring",
          description: "Continuous monitoring, risk assessment, and stakeholder updates"
        },
        {
          step: "Closure",
          description: "Project completion, documentation, and success evaluation"
        }
      ]
    }
  };

  const service = serviceData[serviceType || 'consulting'];
  
  if (!service) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The requested service could not be found.</p>
          <Link to="/services">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <IconComponent className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-blue-400 mb-6">{service.subtitle}</p>
          <p className="text-lg text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive capabilities designed to meet your specific business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: any, index: number) => (
              <Card key={index} className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Business Benefits
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Measurable outcomes that drive real business value and competitive advantage.
              </p>
              
              <div className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
              <IconComponent className="w-32 h-32 text-blue-400 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and optimal outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.step}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} services can transform your business and drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ServiceDetail;
