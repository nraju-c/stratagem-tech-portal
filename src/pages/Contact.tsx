
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const LOGIC_APP_URL = "https://prod-25.northcentralus.logic.azure.com:443/workflows/49b50e69362344519d0e53ee7dc91456/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=Njib58zHSCDrwCGLUDeqtjYxWyGdSloeEFCFS7I8V0k";
const INITIAL = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};
 const [formData, setFormData] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });
  const [hp, setHp] = useState(""); // honeypot
  const [resetKey, setResetKey] = useState(0); // force-remount after success

  const handleChange = (e) => {
    const { name, value } = e.target; // make sure it's target.value
    setFormData((s) => ({ ...s, [name]: value }));
  };
const toText = (x) => {
  if (x == null) return "";
  if (typeof x === "string") return x;
  if (typeof x === "number" || typeof x === "boolean") return String(x);
  if (x?.message) return String(x.message);
  if (x?.error?.message) return String(x.error.message);
  try { return JSON.stringify(x); } catch { return String(x); }
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (hp) return;

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setStatus({ ok: false, msg: "Please fill all required fields." });
    return;
  }

  setLoading(true);
  setStatus({ ok: null, msg: "" });

  try {
    const res = await fetch(LOGIC_APP_URL, {
      method: "POST",
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    let data;
    // parse defensively
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      data = await res.json();
    } else {
      const txt = await res.text();
      try { data = JSON.parse(txt); } catch { data = { message: txt }; }
    }

    if (res.ok) {
      const msg = data?.message || "Thanks! We received your message.";
      setStatus({ ok: true, msg });              // <-- string
      setFormData(INITIAL);
      setHp("");
      setResetKey((k) => k + 1);
    } else {
      const msg =
        data?.error?.message ||
        data?.message ||
        (typeof data?.error === "string" ? data.error : JSON.stringify(data?.error ?? {})) ||
        `Failed: ${res.status}`;
      setStatus({ ok: false, msg });             // <-- string
    }
  } catch (err) {
    setStatus({ ok: false, msg: err?.message || "Network error." }); // <-- string
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
<section
  className="relative bg-cover bg-center min-h-[350px]"
  style={{
    backgroundImage: "url('https://qsort.blob.core.windows.net/media/Contact.jpg')",
  }}
>
  <div className="w-full h-full flex justify-end items-start px-8 lg:px-20">
    <div className="max-w-[29rem]  mt-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Get In Touch
      </h1>
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-[50px]">
        Ready to transform your business with innovative technology solutions?
        Let&apos;s discuss how we can help you achieve your digital transformation goals.
      </p>
    </div>
  </div>
</section>







      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{marginTop:20}}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-700/30 border-slate-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form key={resetKey} onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <Input
      
            id="name"
            name="name"
            value={formData.name ?? ""}              
            onChange={handleChange}
            required
            autoComplete="name"                    
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email ?? ""}
            onChange={handleChange}
            required
            autoComplete="email"
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <Input
           
            id="phone"
            name="phone"
            value={formData.phone ?? ""}
            onChange={handleChange}
            autoComplete="tel"
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company
          </label>
          <Input
           
            id="company"
            name="company"
            value={formData.company ?? ""}
            onChange={handleChange}
            autoComplete="organization"
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject *
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject ?? ""}
          onChange={handleChange}
          required
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          placeholder="What can we help you with?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message ?? ""}
          onChange={handleChange}
          required
          rows={6}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 w-full md:w-auto disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>

{status.ok === true && (
  <p className="text-sm text-green-400 pt-2">{toText(status.msg)}</p>
)}
{status.ok === false && (
  <p className="text-sm text-red-400 pt-2">{toText(status.msg)}</p>
)}


    </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <Card className="bg-slate-700/30 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-300 text-sm">contact@qsort.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p className="text-gray-300 text-sm">+1 (281)-581-7544</p>
                     
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Address</h4>
                      <p className="text-gray-300 text-sm">
                        3200 Wilcrest Dr<br />
                        Suite 170<br />
                        Houston, TX 77042
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Business Hours</h4>
                      <p className="text-gray-300 text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM (CST)
                       
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>

        
        <div className="mt-16">
  <Card className="bg-slate-700/30 border-slate-600 overflow-hidden">
    <CardContent className="p-0">
      <div className="aspect-video">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=29.7409,-95.55344&z=14&output=embed"
        />
      </div>
    </CardContent>
  </Card>
</div>

      </div>
    </div>
  );
};

export default Contact;
