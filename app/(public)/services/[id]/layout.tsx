 
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
 
 
export const metadata = {
  title: {
    default: "HandyHub - Find perfect professionals for you",
    template: "%s | HandyHub",
  },
  description:
    "Handyhub is a platform that provides a convenient way for users to find, hire, and manage service providers, with an emphasis on ease of use and reliability.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <div>
        
         <div className="flex items-center w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden group focus-within:ring-1 focus-within:ring-[#084399] focus-within:border-[#084399] transition-all">
      
      {/* 1. Service/Task Input */}
      <div className="flex-1">
        <Input 
          type="text" 
          placeholder="House Cleaning" 
          className="border-none shadow-none focus-visible:ring-0 h-12 md:h-14 text-slate-600 placeholder:text-slate-400 px-6 text-base"
        />
      </div>

      {/* Vertical Divider */}
      <div className="h-8 w-[1px] bg-slate-200 hidden md:block" />

      {/* 2. Location/Zip Input */}
      <div className="flex items-center px-4 min-w-[140px] md:min-w-[180px]">
        <MapPin className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
        <Input 
          type="text" 
          placeholder="38456" 
          className="border-none shadow-none focus-visible:ring-0 h-12 md:h-14 text-slate-600 placeholder:text-slate-400 px-0 text-base"
        />
      </div>

      {/* 3. Search Button */}
      <Button 
        className="bg-[#00143d] hover:bg-[#001a4d] text-white rounded-none h-12 md:h-14 px-8 md:px-12 font-bold text-base transition-colors"
      >
        Search
      </Button>
    </div>

    {children}
    </div>  
  );
}
