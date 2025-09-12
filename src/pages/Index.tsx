import { useState } from "react";
import { toast } from "@/hooks/use-toast";

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

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">

      {/* Header with MS Paint Navigation */}
      <header className="relative border-b-4 border-fun-dark bg-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/images/Pumpfun.jpg" 
              alt="FUN Logo" 
              className="w-8 h-8 pixelated" 
            />
            <span className="font-body text-lg text-fun-dark">FUN.jpg</span>
          </div>

          {/* Menu with Hanging Characters */}
          <nav className="flex space-x-8">
            <div className="relative">
              <button className="ms-paint-button font-body text-lg">
                ABOUT
              </button>
              <img 
                src="/images/Rope Fun Completed NO BG.png" 
                alt="Rope FUN" 
                className="menu-hanger w-12 h-auto" 
              />
            </div>
            
            <div className="relative">
              <button className="ms-paint-button font-body text-lg">
                CHART
              </button>
              <img 
                src="/images/Roller Coaster FUN Completed NO BG.png" 
                alt="Menu FUN" 
                className="menu-hanger w-14 h-auto" 
              />
            </div>
            
            <div className="relative">
              <button className="ms-paint-button font-body text-lg">
                FOLLOW ON X
              </button>
            </div>
          </nav>
        </div>
      </header>

       {/* Main Content */}
       <main className="max-w-6xl mx-auto px-4 py-8 relative">
         {/* Hero Section with FUN Character */}
         <section className="text-center mb-12 relative">
           <div className="mb-8">
             <img 
               src="/images/Ticker.png" 
               alt="FUN Character" 
               className="hero-image mx-auto w-full max-w-md h-auto" 
             />
           </div>
         </section>

         {/* FUN on the PUMP Section */}
         <section className="fun-on-pump-section mb-12">
           <div className="max-w-6xl mx-auto px-4 py-8 text-center">
             <div className="fun-on-pump-container">
               {/* Line 1: FUN */}
               <div className="fun-text">FUN</div>
               
               {/* Line 2: on the PUMP */}
               <div className="bottom-line">
                 <span className="on-the-box">on the</span>
                 <span className="pump-text">PUMP</span>
               </div>
             </div>
           </div>
         </section>

         {/* PUMPFUNIVERSE Section */}
         <section className="pumpfuniverse-section mb-12">
           <div className="max-w-6xl mx-auto px-4 py-12 text-center">
             {/* FUN Character Image */}
             <div className="mb-8">
               <img 
                 src="/images/Statue FUN Completed NO BG.png" 
                 alt="FUN Character" 
                 className="hero-character-image mx-auto w-full max-w-md h-auto" 
               />
               <h1 className="main-heading">WELCOME TO THE PUMPFUNIVERSE</h1>
             </div>

             {/* Character Introduction */}
             <div className="character-intro mb-6">
               <p className="intro-text">
                 My name is <span className="fun-highlight">FUN</span>, the guy of the pump!
               </p>
             </div>

             {/* Description Paragraph */}
             <div className="description max-w-4xl mx-auto">
               <p className="description-text">
                 PUMPFUNIVERSE is a large amusement park with candle jumping, swingers and jets popping activities.
               </p>
               <p className="description-text">
                 Join me now at this fun playground where we can mess around, such as using the announcement system to call out Alon, slurping some green and red lollipops with unstable desens, or hanging out at the DEXSCREENER arena for PvP plays.
               </p>
             </div>
           </div>
         </section>

        {/* Welcome Section */}
        <section className="mb-12 relative">
          <div className="bg-white border-4 border-fun-dark p-8 relative">
            <div className="mb-6">
              <div className="tilted-bg-primary mb-4 inline-block">
                <h2 className="font-title text-2xl md:text-4xl text-white">
                  WELCOME TO THE PUMPFUNVERSE
                </h2>
              </div>
            </div>

            <div className="space-y-6 font-body text-lg md:text-xl text-fun-dark leading-relaxed">
              <p>
                My name is <span className="tilted-bg-secondary text-white px-2">FUN</span>, the guy of the pump!
              </p>
              
              <p>
                PUMPFUNVERSE is a large amusement park with candle jumping, swingers and jeets popping activities. 
                Join me now at this fun playground where we can mess around, such as using the announcement system 
                to call out Alon, slurping some green and red lollipops with unstable degens, or hanging out at the 
                DEXSCREENER arena for PvP plays.
              </p>
            </div>
          </div>
        </section>

        {/* Born Section */}
        <section className="mb-12 text-center relative">
          <div className="space-y-6">
            <div className="tilted-bg-primary inline-block mb-4">
              <h3 className="font-title text-2xl md:text-4xl text-white">
                BORN ON MS PAINT, RAISED ON PUMPFUN
              </h3>
            </div>
            
            <div className="flex items-center justify-center space-x-2 flex-wrap">
              <span className="font-title text-xl md:text-3xl text-fun-dark">I'm the</span>
              <span className="tilted-bg-secondary text-white px-3 py-1 font-title text-xl md:text-3xl">FUN</span>
              <span className="font-title text-xl md:text-3xl text-fun-dark">of the</span>
              <span className="tilted-bg-primary text-white px-3 py-1 font-title text-xl md:text-3xl">PUMP</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12 relative">
          <div className="tilted-bg-primary inline-block mb-0 relative">
            <h3 className="font-title text-3xl md:text-5xl text-white px-4 py-2">
              GRAB YOUR TICKET TODAY!
            </h3>
            {/* Hanging Rope Fun Character */}
            <img 
              src="/images/Rope Fun Completed NO BG.png" 
              alt="Rope Fun Character" 
              className="hanging-rope-fun"
            />
          </div>

          {/* Landscape Left Rotated Image */}
          <div>
            <img 
              src="/images/1000006803.png" 
              alt="Landscape Image" 
              className="landscape-left-rotated mx-auto max-w-lg w-full h-auto"
            />
          </div>

          {/* Contract Address Copy Tool */}
          <div className="max-w-lg mx-auto mb-8">
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

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="social-logo-container">
                <img 
                  src="/images/dexscreener.png" 
                  alt="DexScreener" 
                  className="social-logo"
                />
              </div>
              <span className="font-body text-fun-dark text-lg">DEXSCREENER</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="social-logo-container">
                <img 
                  src="/images/X.png" 
                  alt="X (Twitter)" 
                  className="social-logo"
                />
              </div>
              <span className="font-body text-fun-dark text-lg">X</span>
            </div>
          </div>

          {/* Paint Brush Decoration */}
          <div className="flex justify-center">
            <img 
              src="/images/Paint brush.jpg" 
              alt="Paint Brush" 
              className="theme-decoration brush w-16 h-auto animate-bounce" 
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-fun-dark bg-white p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-body text-sm md:text-base text-fun-dark">
            Disclaimer: This is just a meme coin, not financial advice—do your own research, apes only at your own risk and for the lols.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;