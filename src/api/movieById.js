import { useState, useEffect } from "react";
import { BASE_URL, MOVIE_URL } from "./constants";

const useFetchMovieById = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await fetch(`${BASE_URL}${MOVIE_URL}/${id}`, {
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieById();
    }

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [id]); // Dependency array includes 'id', so the effect runs whenever 'id' changes

  return { movie, loading, error };
};

export default useFetchMovieById;
