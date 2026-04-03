import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6569116752";
const PREFILLED_MESSAGE = encodeURIComponent(
  "Hi, I found you via enfactum.com and would like to discuss growth for my brand."
);

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
