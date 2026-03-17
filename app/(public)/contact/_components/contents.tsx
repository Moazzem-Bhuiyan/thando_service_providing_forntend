import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react' 
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from './ContactForm';

const ContentSection = () => {

        const contactDetails = [
      {
        icon: Phone,
        title: "Call Us",
        detail: "+880 1234 567 890",
        description: "Mon-Fri from 9am to 6pm"
      },
      {
        icon: Mail,
        title: "Email Us",
        detail: "support@servicejourney.com",
        description: "Online support 24/7"
      },
      {
        icon: MapPin,
        title: "Visit Us",
        detail: "123 Business Avenue, Dhaka",
        description: "Bangladesh"
      }
    ]

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Twitter className="w-5 h-5" />, href: "#" },
        { icon: <Instagram className="w-5 h-5" />, href: "#" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    ]

    return (
         
        <div className="max-w-7xl mx-auto py-20 px-6">
          
          {/* Subtle Header Intro */}
          <div className="text-center mb-16">
            <h3 className="text-[#084399] font-bold uppercase tracking-[0.2em] text-xs mb-3">
              Reach Out
            </h3>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Let&apos;s Start a Conversation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Side: Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                {contactDetails.map((item, index) => (
                  <Card key={index} className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white hover:shadow-[0_8px_30px_rgb(8,67,153,0.08)] transition-all duration-500 rounded-2xl group overflow-hidden">
                    <CardContent className="p-6 flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#084399]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#084399] transition-all duration-500">
                        <item.icon className="w-5 h-5 text-[#084399] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                        <p className="text-[#084399] font-bold text-base my-1 tracking-tight">{item.detail}</p>
                        <p className="text-slate-400 text-sm font-medium">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media Section */}
              <div className="pt-8 border-t border-slate-100 mt-4">
                <p className="text-slate-900 font-black text-sm uppercase tracking-widest mb-6 ml-1">Follow Our Journey</p>
                <div className="flex gap-4">
                    {socialLinks.map((social, i) => (
                        <a 
                            key={i} 
                            href={social.href}
                            className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#084399] hover:text-white hover:border-[#084399] hover:-translate-y-1 transition-all duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <ContactForm />

          </div>
        </div>
    );
};

export default ContentSection;