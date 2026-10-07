import React, { useState } from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { Badge } from '../ui/Badge';
import { GALLERY_ITEMS, type GalleryItem } from '../../data/tisData';
import { Image, Maximize2 } from 'lucide-react';
import { Modal } from '../ui/Modal';

export const CampusGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Infrastructure', 'Sports', 'Academics', 'Campus Life'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-[#070b12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <ScrollReveal direction="down">
            <Badge variant="gold" icon={<Image className="w-3.5 h-3.5" />}>
              Visual Tour
            </Badge>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Life & Infrastructure at <span className="gradient-text-gold">TIS Campus</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Take a glimpse into our world-class facilities, lush grounds, science laboratories, and vibrant student community.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={0.08 * idx}>
              <div
                onClick={() => setActiveImage(item)}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 cursor-pointer h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 tis-photo-grade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge & Hover Zoom Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <Badge variant="gold">{item.category}</Badge>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="text-base font-bold font-heading line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <Modal
          isOpen={Boolean(activeImage)}
          onClose={() => setActiveImage(null)}
          title={activeImage.title}
          maxWidth="4xl"
        >
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden max-h-[70vh]">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm text-slate-600 dark:text-slate-300">{activeImage.caption}</p>
              <Badge variant="gold">{activeImage.category}</Badge>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
