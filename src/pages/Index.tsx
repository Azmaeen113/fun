import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import HeroSprites from '@/components/HeroSpritesClean'

const Index = () => {
  const [copied, setCopied] = useState(false);
  
  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  // SIMPLE CURSOR FORCE - This will definitely work
  useEffect(() => {
    // Force cursor on everything
    const forceCursor = () => {
      // Set cursor on body - use small SVG cursor
      document.body.style.cursor = 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="%23000"/></svg>) 12 12, crosshair';
      
      // Set cursor on all elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.classList.contains('clickable')) {
          element.style.cursor = 'pointer';
        } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.style.cursor = 'text';
        } else {
          element.style.cursor = 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="%23000"/></svg>) 12 12, crosshair';
        }
      });
      
      console.log('Cursor forced successfully!');
    };

    // Force cursor immediately and after delays
    forceCursor();
    setTimeout(forceCursor, 100);
    setTimeout(forceCursor, 1000);
    setTimeout(forceCursor, 3000);
  }, []);

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
  <header className="site-header fixed top-0 left-0 w-full border-b-2 border-fun-teal bg-gradient-to-r from-fun-cream to-white p-3 shadow-lg z-50 h-20">
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
          <nav className="hidden sm:flex space-x-6 lg:space-x-8 flex-wrap justify-center items-center">
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
              <a 
                href="https://x.com/FunGuyOfThePump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ms-paint-button font-accent text-base"
              >
                FOLLOW ON X
              </a>
              <img
                src="/images/Rope Fun Completed NO BG.png"
                alt="Rope Fun"
                className="menu-hanger w-18 h-auto transition-transform duration-300 group-hover:scale-110"
                style={{ transform: 'translateX(-50%) scale(0.5)' }}
              />
            </div>
          </nav>
          {/* Mobile hamburger (shuttering nav) - moved to top-right on mobile */}
          <div className="sm:hidden absolute right-4 top-4">
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
        className={`mobile-shutter fixed top-20 left-0 w-full h-0 overflow-hidden bg-white z-50 transform-origin-top ${mobileNavOpen ? 'open' : ''}`}
        aria-hidden={!mobileNavOpen}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="ms-paint-button text-lg py-3 px-4">ABOUT</a>
            <a href="#chart" className="ms-paint-button text-lg py-3 px-4">CHART</a>
            <a href="https://x.com/FunGuyOfThePump" target="_blank" rel="noopener noreferrer" className="ms-paint-button text-lg py-3 px-4">FOLLOW ON X</a>
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
                  src="/images/Animated ticker.gif"
                  alt="FUN Character"
                  className="hero-image mx-auto w-full max-w-[15rem] h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
           </div>

           {/* FUN on the PUMP - placed in hero */}
           <div className="fun-on-pump-section mb-6 relative">
             <div className="max-w-7xl mx-auto px-6 py-6 text-center">
               <div className="text-center">
                 <div className="mb-6">
                   <h1 className="font-black text-black tracking-wide text-6xl lg:text-8xl">FUN</h1>
                 </div>
                 <div className="flex items-center justify-center gap-4">
                   <span className="font-bold text-black text-3xl lg:text-6xl">of the</span>
                   <img 
                     src="/images/PUMP_pill_Painted-removebg-preview.png" 
                     alt="PUMP" 
                     className="transform rotate-3 w-32 h-auto" 
                   />
                 </div>
               </div>
             </div>
           </div>
         </section>

         {/* Enhanced PUMPFUNIVERSE Section */}
         <section className="pumpfuniverse-section mb-20 relative overflow-hidden bg-white">
           {/* Parachuting Fun Animation (positioned higher and slightly faster) */}
           <img
             src="/images/Parachuting FUN Completed NO BG (1).png"
             alt="Parachuting Fun"
             className="flying-fun-animation absolute top-[34%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-auto pointer-events-none"
           />
           {/* Swimming Fun Animation (positioned lower for raining effect) */}
           <img
             src="/images/Swimming FUN Completed NO BG.png"
             alt="Swimming Fun"
             className="swimming-fun-animation absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-auto pointer-events-none"
           />
           <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-20">
             {/* FUN Character Image */}
             <div className="mb-12">
               <img 
                 src="/images/Statue FUN Completed NO BG.png" 
                 alt="FUN Character" 
                 className="hero-character-image mx-auto w-full max-w-md h-auto transition-transform duration-500 hover:scale-105" 
               />
               <div className="tilted-bg-primary inline-block mb-6">
                 <h1 className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 pixelated-title">
                   WELCOME TO THE PUMPFUNVERSE
                 </h1>
               </div>
             </div>

             {/* Enhanced Box with Banner Title */}
             <div className="max-w-5xl mx-auto mb-8">
               <div className="bg-white border-4 border-fun-teal rounded-2xl shadow-lg overflow-hidden">
                 {/* Green Banner Title */}
                 <div className="tilted-bg-primary">
                   <h2 className="font-title text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 pixelated-title text-center">
                     My name is <span className="fun-highlight">FUN</span>, the guy of the pump!
                   </h2>
                 </div>
                 
                 {/* Box Content */}
                 <div className="p-4 sm:p-6 md:p-8">
                     <p className="roboto-text text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl mb-4">
                       PUMPFUNVERSE is a large amusement park with candle jumping, swingers, jeets popping activities, and much more.
                     </p>
                     <p className="roboto-text text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl">
                       Join me now at this fun playground where we can mess around, such as using the announcement system to call out Alon, slurping some green and red lollipops with unstable degens, or hanging out at the DEXSCREENER arena for PvP plays.
                     </p>
                 </div>
               </div>
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
            
            <div className="flex items-center justify-center flex-wrap gap-4">
              <div className="fun-on-pump-large">
                <h1 className="font-black text-black tracking-wide">I'm the FUN of the <img src="/images/PUMP_pill_Painted-removebg-preview.png" alt="PUMP" className="inline-block w-32 h-auto" /></h1>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="text-center mb-20 relative">
          <div className="tilted-bg-primary inline-block mb-2">
            <h3 className="font-title text-4xl lg:text-6xl text-white px-6 py-4">
              GRAB YOUR TICKET TODAY!
            </h3>
          </div>
          {/* Place the shocked fun image underneath the banner and enlarge it ~2x */}
          <div className="mb-6">
            <img
              src="/images/Shocked FUN Completed NO BG.png"
              alt="Shocked Fun Character"
              className="mx-auto block"
              style={{ width: '200px', height: 'auto', imageRendering: 'pixelated' }}
            />
          </div>

          {/* Enhanced Landscape Left Rotated Image */}
          <div className="mb-12">
            <img 
              src="/images/1000006803.png" 
              alt="Landscape Image" 
              className="landscape-left-rotated mx-auto w-full h-auto transition-transform duration-500 hover:scale-105" 
              style={{ 
                maxWidth: '20rem',
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Enhanced Contract Address Copy Tool */}
          <div className="max-w-2xl mx-auto mb-12 relative">
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
            {/* Paint Brush positioned to touch the BOTTOM edge of the contract address banner */}
            <img 
              src="/images/Paint brush.png" 
              alt="Paint Brush" 
              className="absolute top-full left-1/2 -translate-x-1/2 w-[112px] h-auto animate-bounce transition-transform duration-300 hover:scale-110 z-10 rotate-[-15deg]" 
            />
          </div>

        </section>

      </main>

      {/* Enhanced Social Links - Centered above footer */}
      <section className="py-16 bg-white text-center">
        <div className="flex justify-center items-center space-x-12 lg:space-x-16 mt-8">
          <a 
            href="https://dexscreener.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-110 transform group"
          >
            <div className="social-logo-container">
              <img 
                src="/images/dexscreener.png" 
                alt="DexScreener" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 object-contain pixelated transition-transform duration-300 group-hover:rotate-12"
              />
            </div>
          </a>
          
          <a 
            href="https://x.com/FunGuyOfThePump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-all duration-300 hover:scale-110 transform group"
          >
            <div className="social-logo-container">
              <img 
                src="/images/twitter (4).png" 
                alt="Twitter" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 object-contain pixelated transition-transform duration-300 group-hover:rotate-12"
              />
            </div>
          </a>
        </div>
      </section>


      {/* Enhanced Footer - Now second */}
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