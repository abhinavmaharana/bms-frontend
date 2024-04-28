import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Menu, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import MobileHeader from './MobileHeader';
import LoginDialog from '@/components/authentication/login/LoginDialog';

export default function Header() {
    const [searchInput, setSearchInput] = useState("");
    const handleSearchInputChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);
        setSearchQuery(input);
      };
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="flex items-center justify-between">
            <div className='flex items-center space-y-4'>
                <h1 className="outfitMedium lg:text-[20px]">
                    Book <span className="text-[#D61920] italic">My</span> Show
                </h1>
            </div>
            <div className="flex h-full flex-col items-center justify-center">
                <div className="relative max-w-7xl">
                    <Input
                        type="text"
                        placeholder="Search for Movies, Events, Plays, Sports And Activities"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        className="outfitRegular w-[30px] rounded-lg border border-gray-300 py-4 pl-10 focus:outline-[#716AEA08] lg:w-[770px]"
                    />
                    <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
                </div>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-10">
                <div>
                    <h1 className='text-[14px]'>Delhi-NCR</h1>
                </div>
                <LoginDialog />
                <div>
                    <MobileHeader />
                </div>
            </div>
        </div>
    </div>
  )
}
