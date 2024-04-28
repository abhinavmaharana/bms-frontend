import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'

export default function MobileHeader() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Menu />
        </SheetTrigger>
        <SheetContent>
        <SheetHeader className="space-y-3">
          <SheetTitle>Hey!</SheetTitle>
          <Separator />
          <SheetDescription>
            <div className='flex items-center space-x-2'>
                <img src='https://in.bmscdn.com/webin/movies/superstar/rewards_login.png' className='w-10' />
                <h1 className='text-[13px]'>Unlock special offers & great benefits</h1>
                <Button variant="outline" className="outfitRegular h-8">Login/Register</Button>
            </div>
          </SheetDescription>
          <Separator />
        </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}
