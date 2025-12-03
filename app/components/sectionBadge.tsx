import React from 'react'

function SectionBadge ( {title}: {title: string} ) {
  return (
    <div className="mb-6">
    <span className="text-[16px] inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8BF96] text-gray-700 text-sm font-medium">
      <span className="w-2 h-2 rounded-full bg-[#E8BF96]"></span>
      {title}
    </span>
  </div>
  )
}

export default SectionBadge 