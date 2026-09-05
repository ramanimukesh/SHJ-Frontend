import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import DetailPage from "./pages/DetailPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import { WorkList, WorkDetail } from "./pages/Work";
import Card from "./pages/Card";

/* Split out on its own. The technology ecosystem carries ~60 inlined brand
   marks, which is 37kB gzipped of SVG path data — worth it on the page that
   renders them, not worth it in the bundle every other page has to download
   first. Layout wraps <Outlet /> in the Suspense boundary this needs. */
const Technologies = lazy(() => import("./pages/Technologies"));

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Digital business cards. Outside Layout on purpose: this is what a
          printed card's QR code or an NFC tap opens, and the person who just
          tapped wants a contact, not the site chrome. */}
      <Route path="/card/:slug" element={<Card />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<DetailPage kind="solution" />} />

        <Route path="/work" element={<WorkList />} />
        <Route path="/work/:slug" element={<WorkDetail />} />

        <Route path="/service" element={<Services />} />
        <Route path="/service/:slug" element={<DetailPage kind="service" />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<DetailPage kind="industry" />} />

        <Route path="/technology" element={<Technologies />} />
        <Route path="/technology/:slug" element={<DetailPage kind="technology" />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Legacy plural path from the old template. */}
        <Route path="/services" element={<Navigate to="/service" replace />} />

        {/* A real 404 rather than a silent redirect home, which hid broken
            links from visitors and read as a duplicate page to crawlers. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
