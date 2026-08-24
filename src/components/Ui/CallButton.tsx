import { Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const CallButton = () => {
  return (
     <div className="group fixed bottom-6 left-6 z-50">
      <div className="absolute bottom-20 left-2 flex flex-col items-end gap-3 opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
        <a href="tel:+989XXXXXXXXX" className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:scale-105">
          <span>تماس</span>
          <Phone size={20} />
        </a>
        <a href="https://wa.me/989XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:scale-105">
          <span>واتساپ</span>
          <FaWhatsapp size={20} />
        </a>
        <a href="https://t.me/USERNAME" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:scale-105" >
          <span>تلگرام</span>
          <FaTelegramPlane size={20} />
        </a>
      </div>
      <button className="flex cursor-pointer h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary shadow-lg transition duration-300 hover:scale-110" aria-label="راه‌های ارتباطی">
        <Phone size={30} />
      </button>
    </div>
  )
}

export default CallButton
