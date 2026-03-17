import React from 'react';
import ContentSection from './ContentSection';
import HeroSection from './HeroSection';

const MainContainer = () => {
    return (
        <div className="flex flex-col w-full">
            <HeroSection />
            {/* 2. ABOUT US CONTENT SECTION */}
      <ContentSection />
        </div>
    );
};

export default MainContainer;