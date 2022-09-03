import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Home } from './views/Home';
import { Footer } from './comps/Footer';
import { Header } from './comps/Header';
import { Spacer } from './comps/Spacer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewPost } from './views/ViewPost';
import { EditPost } from './views/EditPost';
import { SerchPostView } from './views/SearchPosts';
import { CreatePostView } from './views/CreatePost';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className="main-wrapper">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/create" element={<CreatePostView />} />
                    <Route path="/post/search" element={<SerchPostView />} />
                    <Route path="/post/edit/:id" element={<EditPost />} />
                    <Route path="/post/:id" element={<ViewPost />} />
                </Routes>
            </BrowserRouter>
            <Spacer height={30} />
            <Footer />
        </div>
    </React.StrictMode>
);

reportWebVitals();
