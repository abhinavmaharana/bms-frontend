import React from 'react'

export default function SubHeader() {
  return (
    <div className='bg-[#F5F5F5]'>
        <div className="mx-auto max-w-7xl px-4 lg:px-0 py-3">
            <div className="flex items-center justify-between">
                <div className='flex items-center space-x-4 outfitLight text-[14px]'>
                    <h1>Movies</h1>
                    <h1>Stream</h1>
                    <h1>Events</h1>
                    <h1>Plays</h1>
                    <h1>Sports</h1>
                    <h1>Activities</h1>
                </div>
                <div className='flex items-center space-x-4 outfitLight text-[14px]'>
                    <h1>ListYourShow</h1>
                    <h1>Corporates</h1>
                    <h1>Offers</h1>
                    <h1>Gift Cards</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
