import Image from 'next/image'; 
import banner from "@/assets/aboutus/about.png" 



const HeroSection = () => {
  return ( 
     
      <section className="relative h-[300px] md:h-[450px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={banner} 
            alt="Services Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
            About Us
          </h1>
          <div className="h-1.5 w-20 bg-[#084399] mx-auto mt-4 rounded-full" />
        </div>
      </section> 
  );
};

export default HeroSection;