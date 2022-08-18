import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./views/Home";
import { Footer } from "./comps/Footer";
import { Header } from "./comps/Header";
import { Spacer } from "./comps/Spacer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostView } from "./views/Post";
import { EditPost } from "./views/EditPost";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <div className="main-wrapper">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post" element={<PostView id={"1"} />} />
                    <Route path="/post/edit/:id" element={<EditPost />} />
                </Routes>
            </BrowserRouter>
            <Spacer height={30} />
            <Footer />
        </div>
    </React.StrictMode>
);

reportWebVitals();
