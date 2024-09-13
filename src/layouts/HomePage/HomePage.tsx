
import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

interface HomePageProps {
    isAuthenticated: boolean;
  }

export const HomePage: React.FC<HomePageProps> = ({ isAuthenticated }) => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros isAuthenticated={isAuthenticated} />
            <LibraryServices isAuthenticated={isAuthenticated} />
      </>
    );
}