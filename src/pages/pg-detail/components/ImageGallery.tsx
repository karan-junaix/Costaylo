import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  name: string;
}

const ImageGallery = ({ images, name }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-4 gap-3 h-[500px]">
            {/* Main Image */}
            <div
              className="col-span-2 row-span-2 relative rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setShowLightbox(true)}
            >
              <img
                src={images[0]}
                alt={`${name} - Main`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
            </div>

            {/* Secondary Images */}
            {images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => {
                  setSelectedImage(index + 1);
                  setShowLightbox(true);
                }}
              >
                <img
                  src={image}
                  alt={`${name} - ${index + 2}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-white text-center">
                      <i className="ri-image-line text-4xl mb-2"></i>
                      <div className="text-xl font-bold">+{images.length - 5} Photos</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View All Photos Button */}
          <button
            onClick={() => setShowLightbox(true)}
            className="mt-4 flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#c8155f] hover:text-[#c8155f] transition-all whitespace-nowrap cursor-pointer"
          >
            <i className="ri-gallery-line text-xl"></i>
            <span>View All {images.length} Photos</span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all cursor-pointer z-10"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrevImage}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          {/* Main Image */}
          <div className="max-w-5xl max-h-[80vh] mx-auto px-20">
            <img
              src={images[selectedImage]}
              alt={`${name} - ${selectedImage + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-4xl px-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImage === index ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
