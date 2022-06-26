import { Featured } from "../comps/Featured";
import { Header } from "../comps/Header";
import { Hero } from "../comps/Hero";
import { Menu } from "../comps/Menu";

// Home view
export const Home = () => {
    return (
        <>
            <Header />

            <Hero />

            <Featured />
        </>
    );
};
