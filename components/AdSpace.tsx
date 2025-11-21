import React, { useState, useEffect } from 'react';
import { AdType } from '../types';

interface AdSpaceProps {
  type: AdType;
  className?: string;
}

interface AdConfig {
  id: number;
  link: string;
  image: string;
  width: number;
  height: number;
  isLarge: boolean;
}

const AdSpace: React.FC<AdSpaceProps> = ({ type, className = '' }) => {
  const [ad, setAd] = useState<AdConfig | null>(null);

  const ads: AdConfig[] = [
    {
      id: 1,
      link: "https://t.ajrkm1.com/395827/8780/0?bo=2779,2778,2777,2776,2775&file_id=598296&po=6533&aff_sub5=SF_006OG000004lmDN&aff_sub4=AT_0002",
      image: "https://www.imglnkx.com/8780/PMKT-1157_DESIGN-16618_BannersWebinar_SexiVegasXX_300100.gif",
      width: 300,
      height: 100,
      isLarge: false
    },
    {
      id: 2,
      link: "https://t.ajrkm1.com/395827/8780/0?bo=2779,2778,2777,2776,2775&file_id=598462&po=6533&aff_sub5=SF_006OG000004lmDN&aff_sub4=AT_0002",
      image: "https://www.imglnkx.com/8780/PMKT-1157_DESIGN-16618_BannersWebinar_AmyPose_300100.gif",
      width: 300,
      height: 100,
      isLarge: false
    },
    {
      id: 3,
      link: "https://t.ajrkm1.com/395827/8780/0?bo=2779,2778,2777,2776,2775&file_id=616518&po=6533&aff_sub5=SF_006OG000004lmDN&aff_sub4=AT_0002",
      image: "https://www.imglnkx.com/8780/JM-645_DESIGN-22450_WETTSHIRT2_640360.jpg",
      width: 640,
      height: 360,
      isLarge: true
    }
  ];

  useEffect(() => {
    let availableAds = ads;
    
    // Filter ads based on slot suitability
    if (type === 'leaderboard' || type === 'banner') {
      // Stick to smaller height ads for banners/leaderboards to prevent layout shifts/overflow
      availableAds = ads.filter(a => !a.isLarge);
    }
    // For 'rectangle' (often sidebar or in-content blocks), we can use any, allowing larger ones

    const randomAd = availableAds[Math.floor(Math.random() * availableAds.length)];
    setAd(randomAd);
  }, [type]);

  let sizeClasses = '';
  let showRealAd = true;
  
  switch (type) {
    case 'leaderboard':
      sizeClasses = 'w-full h-[120px] max-w-[728px] mx-auto';
      break;
    case 'rectangle':
      // Allowed to grow for larger ads, but minimum height reserved
      sizeClasses = 'w-full min-h-[250px] h-auto';
      break;
    case 'banner':
      sizeClasses = 'w-full h-[140px]';
      break;
    case 'skyscraper':
      sizeClasses = 'w-[160px] h-[600px]';
      showRealAd = false; // None of the provided ads fit a skyscraper
      break;
  }

  if (showRealAd && ad) {
    return (
      <div className={`bg-slate-900/30 border border-slate-800 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group ${sizeClasses} ${className}`}>
        <div className="absolute top-0 right-0 bg-slate-800/80 text-[9px] font-bold text-slate-500 px-2 py-0.5 rounded-bl backdrop-blur-sm z-10">
          SPONSORED
        </div>
        
        <a 
          href={ad.link} 
          target="_blank" 
          rel="noreferrer"
          className="transform transition-transform duration-300 group-hover:scale-105 w-full h-full flex items-center justify-center"
        >
          <img 
            src={ad.image} 
            width={ad.width} 
            height={ad.height} 
            alt="Special Offer" 
            className="max-w-full max-h-full object-contain shadow-2xl shadow-black/50 rounded-sm"
            style={{ border: '0' }}
          />
        </a>
      </div>
    );
  }

  // Fallback placeholder
  return (
    <div className={`bg-slate-900/50 border border-dashed border-slate-700 flex flex-col items-center justify-center relative overflow-hidden rounded-lg ${sizeClasses} ${className}`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="text-center z-10 p-2">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Advertisement</span>
        <div className="w-8 h-0.5 bg-slate-700 mx-auto mb-1"></div>
        <span className="text-slate-600 text-[10px]">Ad Space Available</span>
      </div>
    </div>
  );
};

export default AdSpace;