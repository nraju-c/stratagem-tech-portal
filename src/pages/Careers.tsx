
import { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Upload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterType, setFilterType] = useState('All');

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      description: "Lead cloud architecture initiatives and drive digital transformation projects for enterprise clients.",
      requirements: [
        "5+ years of cloud architecture experience",
        "AWS/Azure/GCP certifications",
        "Experience with microservices and containerization",
        "Strong communication and leadership skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Comprehensive health insurance",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      description: "Develop and implement machine learning solutions for enterprise clients across various industries.",
      requirements: [
        "MS in Computer Science or related field",
        "3+ years ML/AI development experience",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud ML platforms"
      ],
      benefits: [
        "Stock options",
        "Health, dental, vision insurance",
        "Flexible PTO",
        "Learning and conference budget"
      ]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "Software Development",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      description: "Build scalable web applications and APIs using modern technologies and frameworks.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "3+ years full-stack development",
        "React, Node.js, TypeScript experience",
        "Database design and optimization skills"
      ],
      benefits: [
        "Competitive compensation",
        "Health and wellness benefits",
        "Remote work options",
        "Career growth opportunities"
      ]
    },
    {
      id: 4,
      title: "Cybersecurity Consultant",
      department: "Security",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $120/hour",
      description: "Provide cybersecurity expertise and implement security solutions for enterprise clients.",
      requirements: [
        "CISSP, CISM, or equivalent certification",
        "5+ years cybersecurity experience",
        "Penetration testing experience",
        "Risk assessment and compliance knowledge"
      ],
      benefits: [
        "Flexible schedule",
        "Project-based work",
        "Competitive hourly rate",
        "Opportunity for full-time conversion"
      ]
    },
    {
      id: 5,
      title: "Technical Project Manager",
      department: "Project Management",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      description: "Lead cross-functional teams and manage complex technical projects from conception to delivery.",
      requirements: [
        "PMP or Agile certification preferred",
        "5+ years technical project management",
        "Experience with software development lifecycle",
        "Excellent stakeholder management skills"
      ],
      benefits: [
        "Performance bonuses",
        "Comprehensive benefits package",
        "Professional development",
        "Work-life balance"
      ]
    }
  ];

  const locations = ['All', 'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX'];
  const jobTypes = ['All', 'Full-time', 'Contract', 'Part-time'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesLocation = filterLocation === 'All' || job.location === filterLocation;
    const matchesType = filterType === 'All' || job.type === filterType;
    return matchesLocation && matchesType;
  });

  const handleApply = () => {
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Build the future of technology with us. We're looking for passionate, innovative professionals 
            who want to make a real impact in the world of digital transformation.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join a culture of innovation, collaboration, and continuous learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collaborative Environment</h3>
              <p className="text-gray-300">Work with talented professionals in a supportive, team-oriented culture that values diverse perspectives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Work-Life Balance</h3>
              <p className="text-gray-300">Flexible work arrangements, generous PTO, and a commitment to helping you maintain a healthy work-life balance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Competitive Benefits</h3>
              <p className="text-gray-300">Comprehensive compensation packages, stock options, health benefits, and professional development opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Filters */}
            <div className="lg:w-1/4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Filter Jobs</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                    <Select value={filterLocation} onValueChange={setFilterLocation}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Job List */}
            <div className="lg:w-3/4">
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="bg-slate-700/30 border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </span>
                            <span className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <Button 
                          onClick={() => setSelectedJob(job)}
                          className="bg-blue-500 hover:bg-blue-600 mt-4 lg:mt-0"
                        >
                          Apply Now
                        </Button>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      
                      <div className="text-sm">
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded mr-2">{job.department}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <p className="text-gray-300">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedJob(null)}
                  className="border-slate-600"
                >
                  Close
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Job Description</h3>
                  <p className="text-gray-300">{selectedJob.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req: string, index: number) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Application Form */}
                <div className="border-t border-slate-600 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Apply for this Position</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name"
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                    
                    <Input
                      placeholder="Phone Number"
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                    
                    <Textarea
                      placeholder="Cover Letter"
                      rows={4}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                    
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Upload your resume (PDF, DOC, DOCX)</p>
                      <Button variant="outline" size="sm" className="mt-2 border-slate-600">
                        Choose File
                      </Button>
                    </div>
                    
                    <Button 
                      onClick={handleApply}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 w-full"
                    >
                      Submit Application
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
