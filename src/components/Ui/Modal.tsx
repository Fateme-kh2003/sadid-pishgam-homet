import { X } from "lucide-react";
import type { ReactNode } from "react";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary">{title}</h2>
          <Button onClick={onClose} className="rounded-lg p-1 text-gray-500 transition hover:bg-gray-100 cursor-pointer">
            <X size={22} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;