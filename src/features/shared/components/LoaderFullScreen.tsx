import React from 'react'

export const LoaderFullScreen = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
      <div className="flex justify-center items-center mt-[50vh]">
        <div className="fas fa-circle-notch fa-spin fa-4x text-yellow-600"></div>
      </div>
    </div>
  )
}
