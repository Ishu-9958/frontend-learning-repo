import React from 'react'

export const SettingPageLeftItem = ({isFirst}:{isFirst:React.ReactNode}) => {
  return (
    <>
    {isFirst ?<div className="h-10 rounded flex items-center px-3 bg-neutral-200">
        <div className="h-4 w-24 rounded bg-neutral-400"></div>
      </div> : <div className="h-10 rounded flex items-center px-3 hover:bg-neutral-100">
        <div className="h-4 w-24 rounded bg-neutral-200"></div>
      </div>}
    </>
  )
}
