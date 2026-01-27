import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// All gallery media from /soul folder - images first, then videos
const GALLERY_MEDIA = [
  // Images
  "/soul/WhatsApp Image 2025-12-30 at 10.53.06 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.06 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.06 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.07 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.07 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.07 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.09 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.09 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.09 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.10 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.10 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.10 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.11 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.11 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.11 AM (3).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.11 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.12 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.12 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.12 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.13 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.13 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.13 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.14 AM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.14 AM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.14 AM (3).jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.14 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-30 at 10.53.15 AM.jpeg",
  "/soul/WhatsApp Image 2025-12-31 at 8.00.03 PM.jpeg",
  "/soul/WhatsApp Image 2025-12-31 at 8.00.04 PM.jpeg",
  "/soul/WhatsApp Image 2025-12-31 at 8.00.06 PM (1).jpeg",
  "/soul/WhatsApp Image 2025-12-31 at 8.00.06 PM (2).jpeg",
  "/soul/WhatsApp Image 2025-12-31 at 8.00.06 PM (3).jpeg",
  "/soul/WhatsApp Image 2025-12-31 at 8.00.06 PM.jpeg",

  "/soul/WhatsApp Video 2025-12-30 at 10.53.05 AM.mp4",
  "/soul/WhatsApp Video 2025-12-31 at 8.00.03 PM.mp4",
  "/soul/soul4.mp4",
  "/soul/soul5.mp4",
  "/soul/soul6.mp4",
];

const GalleryPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [playingVideos, setPlayingVideos] = useState({});
  const [mediaDimensions, setMediaDimensions] = useState({});
  const videoRefs = React.useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    // Preload images and videos and calculate dimensions for bento layout
    const mediaPromises = GALLERY_MEDIA.map((src, index) => {
      return new Promise((resolve, reject) => {
        if (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov')) {
          // For videos, get dimensions
          const video = document.createElement('video');
          video.onloadedmetadata = () => {
            setMediaDimensions(prev => ({
              ...prev,
              [index]: {
                width: video.videoWidth,
                height: video.videoHeight,
                aspectRatio: video.videoWidth / video.videoHeight
              }
            }));
            resolve();
          };
          video.onerror = reject;
          video.src = src;
        } else {
          // For images, get dimensions
          const img = new Image();
          img.onload = () => {
            setMediaDimensions(prev => ({
              ...prev,
              [index]: {
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio: img.naturalWidth / img.naturalHeight
              }
            }));
            resolve();
          };
          img.onerror = reject;
          img.src = src;
        }
      });
    });

    Promise.all(mediaPromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Still show gallery even if some media fails
  }, []);

  // Handle scroll to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryCategories = [
    {
      name: "Nutrition & Wellness",
      images: GALLERY_MEDIA,
    }
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const toggleVideoPlay = (videoUrl, index, e) => {
    e.stopPropagation(); // Prevent opening modal when clicking play button
    const videoKey = `${videoUrl}-${index}`;
    const video = videoRefs.current[videoKey];
    
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingVideos(prev => ({ ...prev, [videoKey]: true }));
      } else {
        video.pause();
        setPlayingVideos(prev => ({ ...prev, [videoKey]: false }));
      }
    }
  };

  // Helper function to determine grid span based on aspect ratio (bento style)
  const getGridSpan = (index) => {
    const dimensions = mediaDimensions[index];
    if (!dimensions) return { rowSpan: 1, colSpan: 1 };
    
    const { aspectRatio } = dimensions;
    
    // Bento box logic: vary spans based on aspect ratio for organic layout
    if (aspectRatio > 1.6) {
      // Very wide/landscape images - span 2 columns
      return { rowSpan: 1, colSpan: 2 };
    } else if (aspectRatio < 0.65) {
      // Very tall/portrait images - span 2 rows
      return { rowSpan: 2, colSpan: 1 };
    } else if (aspectRatio > 1.3 && aspectRatio <= 1.6) {
      // Medium-wide - occasionally span 2 columns for variety
      return { rowSpan: 1, colSpan: index % 4 === 0 ? 2 : 1 };
    } else if (aspectRatio >= 0.65 && aspectRatio < 0.85) {
      // Medium-tall - occasionally span 2 rows
      return { rowSpan: index % 5 === 0 ? 2 : 1, colSpan: 1 };
    } else {
      // Square-ish or standard - single cell
      return { rowSpan: 1, colSpan: 1 };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-white hover:text-emerald-100 transition duration-300 group bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">Back</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Wellness Gallery
            </h1>
           
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!imagesLoaded ? (
            // Loading skeleton with bento layout
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
              {[...Array(31)].map((_, index) => {
                // Vary skeleton sizes for bento effect
                const isWide = index % 5 === 0;
                const isTall = index % 7 === 0;
                return (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg bg-gray-200 animate-pulse"
                    style={{
                      gridRow: isTall ? 'span 2' : 'span 1',
                      gridColumn: isWide ? 'span 2' : 'span 1',
                      height: isTall ? '400px' : '200px'
                    }}
                  />
                );
              })}
            </div>
          ) : (
            galleryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">
                    {category.name}
                  </h2>
                  <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
                </div>

                <div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                  style={{ 
                    gridAutoRows: 'minmax(200px, auto)',
                    gridAutoFlow: 'dense'
                  }}
                >
                  {category.images.map((mediaUrl, index) => {
                    const isVideo = mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm') || mediaUrl.endsWith('.mov');
                    const videoKey = `${mediaUrl}-${index}`;
                    const isPlaying = playingVideos[videoKey];
                    const dimensions = mediaDimensions[index];
                    const { rowSpan, colSpan } = getGridSpan(index);
                    
                    return (
                      <div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100 relative group"
                        style={{ 
                          willChange: "transform, box-shadow",
                          gridRow: `span ${rowSpan}`,
                          gridColumn: `span ${colSpan}`,
                          minHeight: '200px'
                        }}
                        onClick={() => openModal(mediaUrl)}
                      >
                        {isVideo ? (
                          <>
                            <video
                              ref={(el) => {
                                if (el) videoRefs.current[videoKey] = el;
                              }}
                              src={mediaUrl}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              muted
                              autoPlay
                              loop
                              playsInline
                              onPlay={() => setPlayingVideos(prev => ({ ...prev, [videoKey]: true }))}
                              onPause={() => setPlayingVideos(prev => ({ ...prev, [videoKey]: false }))}
                            />
                            <button
                              onClick={(e) => toggleVideoPlay(mediaUrl, index, e)}
                              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors z-10"
                              aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                              <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors shadow-lg">
                                {isPlaying ? (
                                  <svg
                                    className="w-8 h-8 text-gray-800"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-8 h-8 text-gray-800 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                )}
                              </div>
                            </button>
                          </>
                        ) : (
                          <img
                            src={mediaUrl}
                            alt={`${category.name} image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Modal for Image/Video Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {selectedImage.endsWith('.mp4') || selectedImage.endsWith('.webm') || selectedImage.endsWith('.mov') ? (
              <video
                src={selectedImage}
                controls
                autoPlay
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg"
              />
            ) : (
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
