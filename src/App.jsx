import { ChevronRight } from "lucide-react"
import CarouselBanner from "./components/shared/carousel-banner/CarouselBanner"
import Header from "./components/shared/navigation/Header"
import SubHeader from "./components/shared/navigation/SubHeader"
import MoviesCard from "./components/movies-card/MoviesCard"

function App() {
  return (
   <div className="pt-5">
      <div className="space-y-4">
      <Header />
      <SubHeader />
      </div>
      <div className="space-y-6">
        <div className="bg-[#EBEBEB] p-5">
          <CarouselBanner />
        </div>
        <div className="mx-auto max-w-7xl px-4 space-y-4 lg:px-0">
          <div className="flex items-center justify-between">
            <h1 className="outfitSemibold text-[24px]">Recommended Movies</h1>
            <p className="flex items-center outfitLight text-[16px] text-[#F84364] space-x-1"><h1>See All</h1> <ChevronRight className="outfitLight w-[14px]"/></p>
          </div>
          <MoviesCard />
        </div>
        <div className="mx-auto max-w-7xl px-4 space-y-4 lg:px-0">
          <div className="flex items-center justify-between">
            <h1 className="outfitSemibold text-[24px]">Recommended Movies</h1>
            <p className="flex items-center outfitLight text-[16px] text-[#F84364] space-x-1"><h1>See All</h1> <ChevronRight className="outfitLight w-[14px]"/></p>
          </div>
          <MoviesCard />
        </div>
      </div>
   </div>
  )
}

export default App
