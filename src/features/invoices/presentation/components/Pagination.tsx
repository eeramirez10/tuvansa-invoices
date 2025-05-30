import React, { type JSX } from 'react';


interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = (): void => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = (): void => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPages = (): JSX.Element[] => {
    return Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      const isActive = page === currentPage;
      return (

        
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 border-t border-b border-gray-300 bg-white font-medium focus:outline-none ${isActive ? 'text-yellow-500' : 'text-gray-500 hover:bg-gray-50'
              }`}
          >
            {page}
          </button>
       

      );
    });
  };

  return (
    <div className="flex flex-wrap mt-8">
 
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 focus:outline-none ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
            }`}
        >
          <i className='fas fa-chevron-left'></i>

        </button>

        {/* Page Buttons */}
        {renderPages()}

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 focus:outline-none ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
            }`}
        >
          <i className='fas fa-chevron-right'></i>
        </button>
     
    </div>
  );
};

export default Paginator;
