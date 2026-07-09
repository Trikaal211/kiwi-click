import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds for better engagement
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip automatically after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const phoneNumber = '918210077633';
  const message = encodeURIComponent("Hi! I would like to know more about your digital growth services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-row-reverse items-center gap-3 pointer-events-auto select-none">
      {/* Tooltip text bubble */}
      <div
        className={`hidden sm:block bg-white dark:bg-card-bg text-text-primary border border-border-color/20 text-xs font-semibold px-3 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 transform origin-left ${
          showTooltip 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 -translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative">
          <span>Need help? Chat with us!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-text-secondary hover:text-text-primary font-bold cursor-pointer inline-block"
            aria-label="Close tooltip"
          >
            ×
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] hover:to-[#22c35e] text-white flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] hover:scale-108 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none group-hover:animate-none" />

        {/* Custom premium SVG WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-current" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 1.967 14.062.94 11.437.94 6.01.94 1.586 5.311 1.582 10.74c-.001 1.674.452 3.3 1.311 4.774l-.999 3.648 3.753-.968zm11.366-4.612c-.3-.15-1.779-.879-2.053-.978-.275-.099-.475-.149-.675.15-.2.299-.775.978-.95 1.178-.175.199-.35.224-.65.075-3.56-1.76-4.5-3.033-5.09-4.047-.15-.25-.015-.385.12-.52.121-.121.27-.315.405-.471.135-.158.18-.27.27-.45.09-.18.045-.337-.023-.487-.068-.15-.675-1.628-.925-2.228-.243-.584-.489-.504-.675-.514-.174-.009-.374-.01-.574-.01-.2 0-.525.075-.8.375-.275.299-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.11 4.52 2.18.94 3.01.76 4.08.59 1.075-.16 2.053-.839 2.302-1.618.25-.778.25-1.447.175-1.597-.075-.15-.275-.249-.575-.399z" />
        </svg>
      </a>
    </div>
  );
}
