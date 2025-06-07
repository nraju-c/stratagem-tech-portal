
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      name: "Finance",
      icon: "💰",
      description: "Digital banking solutions, fintech platforms, and regulatory compliance systems",
      services: ["Core Banking Systems", "Payment Processing", "Risk Management", "Regulatory Compliance"],
    },
    {
      name: "Telecom",
      icon: "📡",
      description: "Network management, Cloud infrastructure, and customer experience platforms",
      services: ["Network Optimization", "Cloud Implementation", "Customer Portals", "Billing Systems"],
    },
    {
      name: "Oil & Gas",
      icon: "⛽",
      description: "IoT monitoring, AI RAG Implementation, and supply chain optimization",
      services: ["AI Automation", "Predictive Analytics", "Safety Systems", "Asset Management"],
    },
    {
      name: "Utilities",
      icon: "⚡",
      description: "Smart grid technology, energy management, and sustainability solutions",
      services: ["Smart Metering", "Grid Optimization", "Energy Analytics", "Demand Response"]
    },
    {
      name: "Insurance",
      icon: "🛡️",
      description: "Claims processing automation, risk assessment, and customer portals",
      services: ["Claims Processing", "Risk Modeling", "Policy Management", "Fraud Detection"]
    },
    {
      name: "Pharma",
      icon: "💊",
      description: "Clinical trial management, regulatory compliance, and drug discovery platforms",
      services: ["Clinical Data Management", "Regulatory Reporting", "Supply Chain", "R&D Systems"]
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description: "Electronic health records, telemedicine, and patient management systems",
      services: ["EHR Systems", "Telemedicine Platforms", "Patient Portals", "Medical Imaging"],
    },
    {
      name: "Retail",
      icon: "🛍️",
      description: "E-commerce platforms, inventory management, and customer experience solutions",
      services: ["E-commerce Development", "Inventory Systems", "POS Solutions", "Customer Analytics"],
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Industry 4.0 solutions, automation, and quality management systems",
      services: ["Industrial IoT", "Process Automation", "Quality Control", "Supply Chain"],
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-dind">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Delivering specialized technology solutions across diverse industry verticals, 
            each tailored to meet unique regulatory requirements, operational challenges, 
            and business objectives that drive sustainable growth and innovation.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Core Services:</h4>
                    <ul className="space-y-1">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="text-gray-300 text-xs flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                 
                  
                <Link to={`/industries/${encodeURIComponent(industry.name)}`}>
  <button className="mt-4 w-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-2 rounded">
    Learn More
  </button>
</Link>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-dind">Our Industry Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep domain knowledge combined with technical excellence to deliver solutions that address industry-specific challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              {/* <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">15+</div> */}
              <div className="text-gray-300 font-medium">Years of Experience</div>
              <p className="text-gray-400 text-sm mt-2">Deep industry knowledge across all verticals</p>
            </div>
            
            <div className="text-center">
              {/* <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500+</div> */}
              <div className="text-gray-300 font-medium">Industry Projects</div>
              <p className="text-gray-400 text-sm mt-2">Successful implementations across sectors</p>
            </div>
            
            <div className="text-center">
              {/* <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">99%</div> */}
              <div className="text-gray-300 font-medium">Client Satisfaction</div>
              <p className="text-gray-400 text-sm mt-2">Proven track record of success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific expertise can drive innovation and growth for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Industries;
