import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContractCopyToolProps {
  contractAddress: string;
  className?: string;
}

export const ContractCopyTool = ({ contractAddress, className = "" }: ContractCopyToolProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "🎉 Contract Address Copied!",
        description: "Ready to pump with FUN!",
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = contractAddress;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCopied(true);
        toast({
          title: "🎉 Contract Address Copied!",
          description: "Ready to pump with FUN!",
          duration: 3000,
        });
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        toast({
          title: "Copy Failed",
          description: "Please copy manually",
          variant: "destructive",
        });
      }
      
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className={`copy-tool max-w-lg mx-auto ${className}`}>
      <div className="flex items-center gap-3 p-4">
        <div className="flex-1 bg-white/20 border border-fun-dark p-2 rounded-none min-w-0">
          <code className="font-body text-sm text-white break-all">
            {contractAddress}
          </code>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="copy-icon-button flex items-center gap-2 min-w-24 justify-center"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">COPY</span>
            </>
          )}
        </button>
      </div>
      
      <div className="text-center mt-2">
        <p className="font-body text-xs text-white/80">
          Click to copy contract address
        </p>
      </div>
    </div>
  );
};