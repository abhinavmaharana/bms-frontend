import CarouselBanner from "./components/shared/carousel-banner/CarouselBanner"
import Header from "./components/shared/navigation/Header"
import SubHeader from "./components/shared/navigation/SubHeader"

function App() {
  return (
   <div className="pt-5">
      <div className="space-y-4">
      <Header />
      <SubHeader />
      </div>
      <div className="space-y-4">
        <div className="bg-[#EBEBEB] p-5">
          <CarouselBanner />
        </div>
      </div>
   </div>
  )
}

export default App
