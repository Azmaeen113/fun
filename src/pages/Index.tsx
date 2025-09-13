import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import HeroSprites from '@/components/HeroSpritesClean'

const Index = () => {
  const [copied, setCopied] = useState(false);
  
  const contractAddress = "7hZmPPkBDYbFpVzQW54sX3DQHQjEVsVcCFRWsvCdbonk";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "Contract Address Copied!",
        description: "Ready to pump with FUN!",
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Full-site decorative sprites (fixed background) */}
      <HeroSprites count={30} />

  {/* Enhanced Header with Modern Navigation (now fixed) */}
  <header className="site-header fixed top-0 left-0 w-full border-b-4 border-fun-teal bg-gradient-to-r from-fun-cream to-white p-3 shadow-lg z-50 h-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-col lg:flex-row gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-110 transform group"
            >
              <img
                src="/images/pump.png"
                alt="Pump.fun Logo"
                className="w-16 h-16 pixelated transition-transform duration-300 group-hover:rotate-12"
              />
            </a>
          </div>

          {/* Enhanced Menu with Hanging Characters */}
          <nav className="hidden sm:flex space-x-6 lg:space-x-8 flex-wrap justify-center">
            <div className="relative group">
              <button className="ms-paint-button font-accent text-base">
                ABOUT
              </button>
              <img 
                src="/images/Upside Down FUN Completed NO BG.png" 
                alt="Upside Down FUN" 
                className="menu-hanger w-18 h-auto transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            
            <div className="relative group">
              <button className="ms-paint-button font-accent text-base">
                CHART
              </button>
            </div>
            
            <div className="relative group">
              <button className="ms-paint-button font-accent text-base">
                FOLLOW ON X
              </button>
              <img
                src="/images/Rope Fun Completed NO BG.png"
                alt="Rope Fun"
                className="menu-hanger w-18 h-auto transition-transform duration-300 group-hover:scale-110"
                style={{ transform: 'translateX(-50%) scale(0.5)' }}
              />
            </div>
          </nav>
          {/* Mobile hamburger (shuttering nav) */}
          <div className="sm:hidden flex items-center">
            <button
              aria-label="Open menu"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((s) => !s)}
              className="ms-paint-button p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="2" fill="currentColor" />
                <rect x="3" y="11" width="18" height="2" fill="currentColor" />
                <rect x="3" y="16" width="18" height="2" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Shuttering Nav Panel */}
      <div
        className={`mobile-shutter fixed top-0 left-0 w-full h-0 overflow-hidden bg-white z-40 transform-origin-top ${mobileNavOpen ? 'open' : ''}`}
        aria-hidden={!mobileNavOpen}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="ms-paint-button">ABOUT</a>
            <a href="#chart" className="ms-paint-button">CHART</a>
            <a href="#follow" className="ms-paint-button">FOLLOW ON X</a>
          </div>
        </div>
      </div>

       {/* Enhanced Main Content */}
  {/* add top padding equal to header height so content is not hidden */}
  <main className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative">
         {/* Hero Section with FUN Character and FUN on the PUMP title */}
         <section className="text-center mb-16 relative">
           <div className="mb-12 mt-4">
              <div className="relative w-full h-auto">
                <img
                  src="/images/Ticker.png"
                  alt="FUN Character"
                  className="hero-image mx-auto w-full max-w-[18rem] h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
           </div>

           {/* FUN on the PUMP - placed in hero */}
           <div className="fun-on-pump-section mb-6 relative">
             <div className="max-w-7xl mx-auto px-6 py-6 text-center">
               <div className="inline-block fun-on-pump-large">
                 <h1 className="inline-block font-black text-black tracking-wide mr-4">FUN</h1>
                 <span className="inline-block font-bold text-black mr-2">ON the</span>
                 <span className="bg-bucky-green fun-pump-inline transform rotate-3 inline-block text-black">pump</span>
               </div>
             </div>
           </div>
         </section>

         {/* Enhanced PUMPFUNIVERSE Section */}
         <section className="pumpfuniverse-section mb-20 relative overflow-hidden bg-gradient-to-br from-fun-cream/30 to-white">
          {/* Flying Fun Animation (positioned higher and slightly faster) */}
          <img
            src="/images/Flying Fun Completed NO BG.png"
            alt="Flying Fun"
            className="flying-fun-animation absolute top-[34%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-auto pointer-events-none"
          />
           <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-20">
             {/* FUN Character Image */}
             <div className="mb-12">
               <img 
                 src="/images/Statue FUN Completed NO BG.png" 
                 alt="FUN Character" 
                 className="hero-character-image mx-auto w-full max-w-lg h-auto transition-transform duration-500 hover:scale-105" 
               />
               <div className="tilted-bg-primary inline-block mb-6">
                 <h1 className="font-title text-3xl lg:text-5xl text-white px-6 py-3 pixelated-title">
                   WELCOME TO THE PUMPFUNIVERSE
                 </h1>
               </div>
             </div>

             {/* Enhanced Box with Banner Title */}
             <div className="max-w-5xl mx-auto mb-8">
               <div className="bg-white border-4 border-fun-teal rounded-2xl shadow-lg overflow-hidden">
                 {/* Green Banner Title */}
                 <div className="tilted-bg-primary">
                   <h2 className="font-title text-2xl lg:text-3xl text-white px-6 py-4 pixelated-title text-center">
                     My name is <span className="fun-highlight">FUN</span>, the guy of the pump!
                   </h2>
                 </div>
                 
                 {/* Box Content */}
                 <div className="p-8">
                   <p className="description-text pixelated-description mb-4">
                     PUMPFUNIVERSE is a large amusement park with candle jumping, swingers and jets popping activities.
                   </p>
                   <p className="description-text pixelated-description">
                     Join me now at this fun playground where we can mess around, such as using the announcement system to call out Alon, slurping some green and red lollipops with unstable desens, or hanging out at the DEXSCREENER arena for PvP plays.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>

        {/* Enhanced Welcome Section */}
        <section className="mb-20 relative">
          <div className="bg-gradient-to-br from-white to-fun-cream/50 border-4 border-fun-teal p-12 relative rounded-2xl shadow-xl">
            <div className="mb-8">
              <div className="tilted-bg-primary mb-6 inline-block">
                <h2 className="font-title text-3xl lg:text-5xl text-white pixelated-title">
                  WELCOME TO THE PUMPFUNVERSE
                </h2>
              </div>
            </div>

            <div className="space-y-8 font-body text-xl lg:text-2xl text-fun-charcoal leading-relaxed max-w-4xl mx-auto">
              <p className="pixelated-description-small">
                My name is <span className="tilted-bg-secondary text-white px-3 py-1">FUN</span>, the guy of the pump!
              </p>
              
              <p className="pixelated-description-small">
                PUMPFUNVERSE is a large amusement park with candle jumping, swingers and jeets popping activities. 
                Join me now at this fun playground where we can mess around, such as using the announcement system 
                to call out Alon, slurping some green and red lollipops with unstable degens, or hanging out at the 
                DEXSCREENER arena for PvP plays.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Born Section */}
        <section className="mb-20 text-center relative">
          <div className="space-y-8">
            <div className="tilted-bg-primary inline-block mb-6">
              <h3 className="font-title text-3xl lg:text-5xl text-white">
                BORN ON MS PAINT, RAISED ON PUMPFUN
              </h3>
            </div>
            
            <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
              <span className="font-title text-2xl lg:text-4xl text-fun-charcoal">I'm the</span>
              <span className="tilted-bg-secondary text-white px-4 py-2 font-title text-2xl lg:text-4xl">FUN</span>
              <span className="font-title text-2xl lg:text-4xl text-fun-charcoal">of the</span>
              <span className="tilted-bg-primary text-white px-4 py-2 font-title text-2xl lg:text-4xl">PUMP</span>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="text-center mb-20 relative">
          <div className="tilted-bg-primary inline-block mb-8 relative">
            <h3 className="font-title text-4xl lg:text-6xl text-white px-6 py-4">
              GRAB YOUR TICKET TODAY!
            </h3>
            {/* Hanging Shocked Fun Character (replaced per request) */}
            <img 
              src="/images/Shocked FUN Completed NO BG.png" 
              alt="Shocked Fun Character" 
              className="hanging-rope-fun"
            />
          </div>

          {/* Enhanced Landscape Left Rotated Image */}
          <div className="mb-12">
            <img 
              src="/images/1000006803.png" 
              alt="Landscape Image" 
              className="landscape-left-rotated mx-auto max-w-xl w-full h-auto transition-transform duration-500 hover:scale-105" 
            />
          </div>

          {/* Enhanced Contract Address Copy Tool */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="contract-copy-tool">
              <div className="flex items-center justify-between">
                <span className="contract-address-text">
                  {contractAddress}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="copy-icon-button"
                >
                  📋
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Paint Brush Decoration */}
          <div className="flex justify-center mb-12">
            <img 
              src="/images/Paint brush.jpg" 
              alt="Paint Brush" 
              className="theme-decoration brush w-40 h-auto animate-bounce transition-transform duration-300 hover:scale-110" 
            />
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 lg:space-x-12 flex-col sm:flex-row gap-8">
            <a 
              href="https://dexscreener.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-110 transform group"
            >
              <div className="social-logo-container">
                <img 
                  src="/images/dexscreener.avif" 
                  alt="DexScreener" 
                  className="w-56 h-56 object-contain pixelated transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
            </a>
            
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-110 transform group"
            >
              <div className="social-logo-container">
                <img 
                  src="/images/twitter (4).png" 
                  alt="Twitter" 
                  className="w-20 h-20 object-contain pixelated transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t-4 border-fun-teal bg-gradient-to-r from-fun-cream to-white p-8 mt-16 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
           <p className="font-body text-base lg:text-lg text-fun-charcoal leading-relaxed max-w-4xl mx-auto pixelated-description">
             Disclaimer: This is just a meme coin, not financial advice—do your own research, apes only at your own risk and for the lols.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;