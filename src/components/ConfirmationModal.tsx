import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'Remove',
  cancelText = 'Cancel',
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1816]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-sm bg-[#FFF8E7] border border-[#E8DACD] rounded-2xl p-6 text-[#2C2421] shadow-xl relative">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#8C7B73] hover:text-[#2C2421] hover:bg-[#FAF0E6] transition-smooth cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#FFE4C4] text-[#8C7355] flex items-center justify-center mb-4">
          <AlertTriangle size={24} />
        </div>

        <h3 className="font-serif text-lg font-semibold text-[#2C2421] mb-2">
          {title}
        </h3>

        <p className="text-xs text-[#5E504A] leading-relaxed mb-6">
          {message}
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#5E504A] hover:bg-[#FAF0E6] border border-[#E8DACD] transition-smooth cursor-pointer"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#FAF0E6] bg-[#8C7355] hover:bg-[#755F43] transition-smooth shadow-xs cursor-pointer"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
