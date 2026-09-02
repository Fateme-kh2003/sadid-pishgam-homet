import { Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Button from "./Button";

const contactLinkClass ="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:scale-105";

const contactLinks = [
  { label: "واتساپ", href: "https://wa.me/09120812787", icon: FaWhatsapp, external: true },
  { label: "تلگرام", href: "https://t.me/SPHoomat", icon: FaTelegramPlane, external: true },
];

const CallButton = () => {
  return (
    <div className="group fixed bottom-6 left-6 z-50">
      <div className="absolute bottom-20 left-2 flex flex-col items-end gap-3 opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
        {contactLinks.map((contact)=>{
          const Icon= contact.icon
          return(
            <a key={contact.href} href={contact.href} 
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            className={contactLinkClass}>
            <span>{contact.label}</span>
            <Icon size={20}/>
          </a>
          )
        })}
      </div>
      <Button className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary shadow-lg transition duration-300 hover:scale-110" aria-label="راه‌های ارتباطی">
        <Phone size={30} />
      </Button>
    </div>
  )
}

export default CallButton