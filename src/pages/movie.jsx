import useFetchMovieById from "@/api/movieById";
import Header from "@/components/shared/navigation/Header/Header";
import SubHeader from "@/components/shared/navigation/Header/SubHeader";
import { Separator } from "@/components/ui/separator";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, StarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/shared/navigation/footer/Footer";
import useGetAllMovies from "@/api/movies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export default function MoviePage() {
  const { movieId } = useParams();
  const { movies } = useGetAllMovies();
  const { movie, loading, error } = useFetchMovieById(movieId);
  useEffect(() => {}, [movieId]);

  console.log(movie, movieId);
  console.log(movie?.cast);
  return (
    <div className="pt-5">
      <div className="space-y-4">
        <Header />
        <SubHeader />
      </div>
      <div className="space-y-12">
        <div className="bg-gradient-to-b from-slate-900 to-gray-200">
          <img src={movie?.heroBannerImg} className="w-screen h-[440px] " />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-0 space-y-5">
          <h1 className="text-2xl outfitSemibold">About the movie</h1>
          <p className="text-[22px] outfitExtralight">{movie?.description}</p>
        </div>
        <Separator />
        <div className="mx-auto max-w-7xl px-4 lg:px-0 space-y-5">
          <h1 className="text-2xl outfitSemibold">Cast</h1>
          <div className="flex items-center space-x-16">
            {movie?.cast?.map((details) => (
              <div
                key={details?.name}
                className="flex flex-col space-y-2 items-center"
              >
                <Avatar className="w-28 h-28">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h1 className="text-[18px] outfitSemibold">
                    {details?.name}
                  </h1>
                  <p className="text-[15px] outfitExtralight">
                    {details?.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="mx-auto max-w-7xl px-4 lg:px-0 space-y-5">
          <h1 className="text-2xl outfitSemibold">Crew</h1>
          <div className="flex items-center space-x-16">
            {movie?.crew?.map((details) => (
              <div
                key={details?.name}
                className="flex flex-col space-y-2 items-center"
              >
                <Avatar className="w-28 h-28">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h1 className="text-[18px] outfitSemibold">
                    {details?.name}
                  </h1>
                  <p className="text-[15px] outfitExtralight">
                    {details?.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="mx-auto max-w-7xl px-4 lg:px-0 space-y-5">
          <h1 className="text-2xl outfitSemibold">Reviews</h1>
          <div className="flex items-center space-x-16">
            {movie?.reviews?.map((review) => (
              <Card key={review.reviewerName} className="px-10 py-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between space-x-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1>{review.reviewerName}</h1>
                      <p>
                        Booked on Book{" "}
                        <span className="text-[#D61920] italic">My</span> Show
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Star className="text-red-400" />
                    <p>{review.rating} / 10</p>
                  </div>
                </div>
                <div>
                  <p>{review.comment}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <Separator />
        <div className="mx-auto max-w-7xl px-4 lg:px-0 space-y-5">
          <h1 className="text-2xl outfitSemibold">You might also like</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="mx-auto w-full max-w-7xl"
          >
            <CarouselContent>
              {movies.map((movie) => (
                <CarouselItem
                  key={movie.id}
                  className="md:basis-1/2 lg:basis-1/4"
                >
                  <Link to={`/movies/${movie.id}`}>
                    <div className="p-1">
                      <Card className="h-[430px] rounded-lg">
                        <img
                          src={movie.posterImg}
                          className="h-[430px] w-[350px] rounded-lg"
                        />
                        <h1></h1>
                      </Card>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="bg-gray-100 h-12" />
        <Footer />
      </div>
    </div>
  );
}
