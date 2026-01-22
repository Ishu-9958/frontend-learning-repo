import React from 'react'
import { Box } from '../Box'
import { Circle } from '../Circle'

export const SearchResultNav = () => {
  return (
    <div className="border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="h-8 w-24 bg-neutral-300 rounded"></div>
          <div className="h-12 flex-1 max-w-2xl bg-neutral-100 rounded-full border border-neutral-300"></div>
          <div className="flex-1"></div>
          <Box className="h-8 w-8 bg-neutral-200 rounded"/>
          <Circle className="h-8 w-8 bg-neutral-200 rounded-full"/>
        </div>
        <div className="flex gap-6 mt-4 ml-32">
          <div className="h-5 w-12 bg-neutral-900 rounded"></div>
          <div className="h-5 w-16 bg-neutral-200 rounded"></div>
          <div className="h-5 w-14 bg-neutral-200 rounded"></div>
          <div className="h-5 w-12 bg-neutral-200 rounded"></div>
          <div className="h-5 w-10 bg-neutral-200 rounded"></div>
        </div>
      </div>
  )
}
