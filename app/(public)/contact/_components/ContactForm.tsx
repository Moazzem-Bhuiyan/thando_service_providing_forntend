"use client"

import React from 'react';
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const ContactForm = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Message Sent Successfully!")
  }

  
  const inputClasses = "h-14 bg-slate-50/50 border-slate-200 rounded-xl focus-visible:ring-1 focus-visible:ring-[#084399] focus-visible:border-[#084399] focus-visible:ring-offset-0 transition-all duration-300 placeholder:text-slate-400"

  return (
    <div className="lg:col-span-2">
      <Card className="border-none shadow-[0_20px_50px_rgba(8,67,153,0.05)] bg-white overflow-hidden rounded-[2.5rem]">
        <CardContent className="p-8 md:p-14">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-800 ml-1 uppercase tracking-wider">Full Name</label>
                <Input 
                  placeholder="John Doe" 
                  className={inputClasses} 
                  required 
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-800 ml-1 uppercase tracking-wider">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className={inputClasses} 
                  required 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-slate-800 ml-1 uppercase tracking-wider">Subject</label>
              <Input 
                placeholder="How can we help you?" 
                className={inputClasses} 
                required 
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-slate-800 ml-1 uppercase tracking-wider">Message</label>
              <Textarea 
                placeholder="Write your message here..." 
                className={`min-h-[180px] resize-none py-4 px-4 ${inputClasses} h-auto`}
                required 
              />
            </div>

            <div className="pt-2">
                <Button 
                type="submit" 
                className="w-full md:w-auto bg-[#084399] hover:bg-[#06357a] text-white px-12 py-8 rounded-2xl text-lg font-black shadow-2xl shadow-[#084399]/30 transition-all duration-300 active:scale-[0.97] flex items-center justify-center gap-3"
                >
                <span>Send Message</span>
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;