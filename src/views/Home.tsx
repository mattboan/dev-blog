import { Featured } from "../comps/Featured";
import {Footer} from "../comps/Footer";
import { Header } from "../comps/Header";
import { Hero } from "../comps/Hero";
import { Menu } from "../comps/Menu";
import {SmallFeaturedList} from "../comps/SmallFeaturedList";

// Home view
export const Home = () => {
    return (
        <>
            <Header />

            <Hero />

            <Featured />

            <SmallFeaturedList title="Trending" />

            <Footer />
        </>
    );
};
