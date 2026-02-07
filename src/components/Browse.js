
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovie();

  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />
      
    </div>
  );
};

export default Browse;
