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
        <img src={BannerLap} alt="" className="w-full h-auto" />
      </div>

      <div className="flex justify-end px-5 mt-10">
        <form class="w-[500px]  ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Tìm kiếm
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50 "
              placeholder="Tìm kiếm"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-tertiary focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
            >
              Tìm kiếm
            </button>
          </div>
        </form>
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
