import React from 'react'

const PromotinalVedio = () => {
  return (
    <div>
      <div className="w-full h-[450px] mt-16 bg-transparent rounded-lg shadow-sm p-3 relative cursor-pointer">
          <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/t8k71QcArnk?autoplay=1&loop=1&mute=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    
  
  )
}

export default PromotinalVedio
