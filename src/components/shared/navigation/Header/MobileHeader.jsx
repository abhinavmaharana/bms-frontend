import RegisterDialog from "@/components/authentication/register/RegisterDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BadgePercent,
  Bell,
  Gift,
  IndianRupee,
  Menu,
  MessageCircleMore,
  MonitorPlay,
  Settings,
  Ticket,
} from "lucide-react";
import React from "react";

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
            <div className="flex items-center space-x-2">
              <img
                src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png"
                className="w-10"
              />
              <h1 className="text-[13px]">
                Unlock special offers & great benefits
              </h1>
              <RegisterDialog />
            </div>
          </SheetDescription>
          <Separator />
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <Bell className="w-4 text-[#666666]" />{" "}
                    <h1 className="text-[12px] text-[#3D3D3D]">Notification</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>No Notifications right now</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <Ticket className="w-4 text-[#ADADAD]" />{" "}
                    <div className="text-start text-[12px] text-[#ADADAD]">
                      <h1>Your Orders</h1>
                      <h1>View all your bookings & purchases</h1>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#ADADAD]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos facere ex veniam tempore reiciendis. Magni sint
                  ipsum dolor, id esse velit. Saepe facere molestias est
                  distinctio ullam accusantium autem inventore!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <MonitorPlay className="w-4 text-[#ADADAD]" />{" "}
                    <div className="text-start text-[12px] text-[#ADADAD]">
                      <h1>Stream Library</h1>
                      <h1>Rented & Purchased Movie</h1>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#ADADAD]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quod repudiandae corporis non, ea sint similique deleniti
                  earum fugiat, iusto ipsa tempore, nostrum ad! Blanditiis, qui
                  velit! Ipsam, excepturi sapiente?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <IndianRupee className="w-4 text-[#666666]" />{" "}
                    <div className="text-start text-[12px] text-[#3D3D3D]">
                      <h1>Play Credit Card</h1>
                      <h1>View your Play Credit Card details and offers</h1>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                  voluptate molestiae expedita temporibus quaerat nostrum,
                  praesentium in dolore neque. Quaerat libero aspernatur nulla
                  dicta reprehenderit perspiciatis obcaecati nostrum similique
                  eveniet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <MessageCircleMore className="w-4 text-[#666666]" />{" "}
                    <div className="text-start text-[12px] text-[#3D3D3D]">
                      <h1>Help & Support</h1>
                      <h1>View commonly asked queries and Chart</h1>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, autem suscipit facilis obcaecati fuga distinctio
                  itaque quae similique ullam dicta enim ut deserunt inventore
                  quaerat hic corrupti! Molestias, culpa dignissimos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <Settings className="w-4 text-[#ADADAD]" />{" "}
                    <div className="text-start text-[12px] text-[#ADADAD]">
                      <h1>Accounts & Settings</h1>
                      <h1>Location,Payments,Permisions & More</h1>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#ADADAD]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  in voluptatum eius quod perspiciatis, totam commodi magni
                  dicta alias autem animi sequi itaque, earum, omnis veniam odit
                  asperiores reiciendis hic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <Gift className="w-4 text-[#666666]" />{" "}
                    <div className="text-start text-[12px] text-[#3D3D3D]">
                      <h1>Rewards</h1>
                      <h1>View your rewards & unlock new ones</h1>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione id obcaecati quibusdam non porro exercitationem
                  architecto, excepturi qui repellendus incidunt ab consectetur
                  repudiandae. Velit, sequi. Maiores omnis aut aliquid delectus!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  <div className="flex items-center space-x-4">
                    <BadgePercent className="w-4 text-[#666666]" />{" "}
                    <h1 className="text-[12px] text-[#3D3D3D]">BookASmile</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus provident autem dolorum esse, ducimus pariatur
                  corporis quae repellendus, doloribus tenetur dolores laborum
                  omnis! Corrupti, quasi quidem placeat iusto obcaecati
                  laudantium.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
