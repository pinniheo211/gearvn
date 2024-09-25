import React, { useEffect, useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  Review,
  Detail,
  Footer,
  Product,
  User,
} from "../components";
import { getTechs } from "../services";
import BannerLap from "../assets/giphy.webp";

const HomePage = () => {
  const [technologiesData, setTechnologiesData] = useState();

  useEffect(() => {
    const fetching = async () => {
      const data = await getTechs();
      setTechnologiesData(data);
    };

    fetching();
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        {/* <Hero /> */}
        <img
          src="https://mir-cdn.behance.net/v1/rendition/project_modules/max_1200_webp/72496e206931949.66d556db763da.gif"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <About />

      <Product />
      {/* <Experience /> */}
      {/* <Tech data={technologiesData} /> */}
      <Works />
      <Detail />
      <User />
      <Review />

      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
