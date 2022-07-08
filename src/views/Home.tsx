import { Featured } from "../comps/Featured";
import { Footer } from "../comps/Footer";
import { Header } from "../comps/Header";
import { Hero } from "../comps/Hero";
import { SmallPostList } from "../comps/SmallPostList";
import { Spacer } from "../comps/Spacer";

// Home view
export const Home = () => {
    return (
        <>
            <Header />

            <Hero />

            <Featured />

            <SmallPostList title="Trending" />

            <Spacer height={30} />
        </>
    );
};
