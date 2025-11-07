import React, { useState } from "react";

const TransformationCard = ({ transformation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Card Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={transformation.image}
          alt={transformation.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-emerald-900 mb-2">{transformation.name}</h3>
        <p className="text-emerald-600 font-medium mb-3">{transformation.shortSummary}</p>
        
        {/* Short description always visible */}
        <p className="text-gray-600 mb-4">{transformation.shortDescription}</p>

        {/* Expanded content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-emerald-100">
            <p className="text-gray-600 mb-3">{transformation.fullDescription}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center bg-emerald-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-emerald-700">{transformation.weightLost}</div>
                <div className="text-sm text-gray-600">Weight Lost</div>
              </div>
              <div className="text-center bg-emerald-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-emerald-700">{transformation.duration}</div>
                <div className="text-sm text-gray-600">Program Duration</div>
              </div>
            </div>
            {transformation.beforeAfterImages && (
              <div className="mt-4">
                <h4 className="font-bold text-emerald-900 mb-2">Before & After</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <img 
                      src={transformation.beforeAfterImages.before} 
                      alt="Before" 
                      className="w-full h-32 object-cover rounded"
                    />
                    <p className="text-center text-sm text-gray-600 mt-1">Before</p>
                  </div>
                  <div>
                    <img 
                      src={transformation.beforeAfterImages.after} 
                      alt="After" 
                      className="w-full h-32 object-cover rounded"
                    />
                    <p className="text-center text-sm text-gray-600 mt-1">After</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Read More Button */}
        <button
          onClick={toggleExpanded}
          className="mt-4 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default TransformationCard;