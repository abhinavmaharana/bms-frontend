import useGetAllMovies from "@/api/movies";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export default function MoviesCard() {
  const { movies, loading, error } = useGetAllMovies();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(movies);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-full max-w-7xl"
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/4">
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
  );
}
