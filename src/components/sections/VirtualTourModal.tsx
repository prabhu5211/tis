import React from 'react';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="TIS Dehradun — 360° Virtual Campus Experience" maxWidth="4xl">
      <div className="space-y-4">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-800">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Tulas International School Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Explore our 100+ acre campus, modern STEM laboratories, equestrian stables, and residential dorms.
          </p>
          <Badge variant="gold">100+ Acre Eco Campus</Badge>
        </div>
      </div>
    </Modal>
  );
};
