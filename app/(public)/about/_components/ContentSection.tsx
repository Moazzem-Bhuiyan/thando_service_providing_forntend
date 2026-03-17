import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Target, Users2 } from 'lucide-react'; 



const ContentSection = () => {

    // --- FAKE DATABASE HTML DATA ---
const fakeDbHtmlContent = `
  <h2>Our Mission & Vision</h2>
  <p>At <strong>Service Journey</strong>, we don't just clean; we transform your living and working spaces into healthy environments. Our journey began with a simple goal: <em>bringing professional-grade standards to every household.</em></p>
  
  <p>We leverage cutting-edge technology and <strong>eco-friendly solutions</strong> to ensure that our footprint is as clean as your floors. Whether it's a small studio or a massive corporate complex, our attention to detail remains unmatched.</p>

  <h3>Why Choose Us?</h3>
  <ul>
    <li><strong>Expert Staff:</strong> Every professional is vetted through a 5-step background check.</li>
    <li><strong>Custom Scheduling:</strong> We work around your time, 24/7 support available.</li>
    <li><strong>Fixed Pricing:</strong> No hidden costs, no surprises, just honest work.</li>
  </ul>

  <p>We are committed to building long-term relationships with our clients based on trust, quality, and consistent performance.</p>
`;


    return (
          <section className="py-24 px-6 bg-[#fcfdfe]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Dynamic HTML Content */}
            <div className="space-y-10">
              <div className="space-y-3">
                <h3 className="text-[#084399] font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                  About Us
                </h3>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                   Redefining Excellence in Every Journey
                </h2>
              </div>

              {/* DYNAMIC HTML RENDERING CONTAINER */}
              <div 
                className="prose prose-slate prose-lg max-w-none 
                prose-headings:text-slate-900 prose-headings:font-black 
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-strong:text-[#084399] prose-strong:font-bold
                prose-li:text-slate-600 prose-li:font-medium
                prose-ul:list-disc prose-ul:marker:text-[#084399]
                transition-all duration-300"
                dangerouslySetInnerHTML={{ __html: fakeDbHtmlContent }} 
              />

              {/* Trust Badge / Signature */}
              <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex -space-x-3 overflow-hidden">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="inline-block h-12 w-12 rounded-full ring-4 ring-white bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                            <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="user" width={48} height={48} />
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-slate-900 font-bold text-lg leading-none">Trusted by 10k+ Customers</p>
                    <div className="flex items-center gap-1 mt-1">
                        {[1,2,3,4,5].map(s => <div key={s} className="w-4 h-4 bg-orange-400 rounded-sm" />)}
                        <span className="text-slate-500 text-sm ml-2 font-semibold">5.0 Star Rating</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Stats Grid */}
            <div className="sticky top-24 space-y-6">
               <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 group">
                  <Image 
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop"
                    alt="Professional team"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#084399] rounded-xl flex items-center justify-center text-white">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-900 font-black text-xl leading-none">ISO Certified</p>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Quality Assurance</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#084399] p-10 rounded-[2rem] text-white shadow-xl shadow-[#084399]/20 transition-transform hover:-translate-y-2 duration-300">
                    <Target className="w-10 h-10 mb-4 opacity-50" />
                    <div className="text-4xl font-black tracking-tighter">99%</div>
                    <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mt-2">Satisfaction</p>
                  </div>
                  <div className="bg-slate-900 p-10 rounded-[2rem] text-white shadow-xl transition-transform hover:-translate-y-2 duration-300">
                    <Users2 className="w-10 h-10 mb-4 opacity-50" />
                    <div className="text-4xl font-black tracking-tighter">500+</div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2">Team Members</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    );
};

export default ContentSection;