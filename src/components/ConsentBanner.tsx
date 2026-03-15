import { useState } from "react";
import { grantConsent, denyConsent, hasConsented } from "@/lib/analytics";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(!hasConsented());

  if (!visible) return null;

  const handleAccept = () => {
    grantConsent();
    setVisible(false);
  };

  const handleDecline = () => {
    denyConsent();
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0c1629] border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-50">
      <p className="text-sm text-white/60 max-w-2xl">
        We use analytics to understand how this site performs and improve your experience. No advertising data is collected.
      </p>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded transition-colors"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="border border-white/20 text-white/50 hover:text-white text-sm px-5 py-2 rounded transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
