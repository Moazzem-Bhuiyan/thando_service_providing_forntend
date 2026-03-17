/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from '@/lib/utils'; 



const ResponsiveContainer = ({ children, className, id }:any) => {
    
        return (
    <section
      className={cn(
        `3xl:w-[80%] mx-auto w-full px-5 md:px-10 lg:w-[90%] lg:px-0 2xl:w-[85%]`,
        className,
      )}
      id={id}
    >
      {children}
    </section>
  );
     
};

export default ResponsiveContainer;