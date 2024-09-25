import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import videoLaptop from "../assets/design.mp4";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-5 cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="feature">
        <h2 className={`${styles.sectionHeadText}`}>Tính Năng</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">Hiệu Suất Mạnh Mẽ</h3>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Được trang bị bộ xử lý Intel thế hệ thứ 14 hoặc AMD Ryzen 7000
            series (hãy chỉ định chính xác model).
          </motion.p>
        </div>
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">GPU NVIDIA GeForce RTX 4000</h3>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Mang lại hiệu suất đồ họa hàng đầu để chơi game mượt mà trong các
            tựa game AAA.
          </motion.p>
        </div>
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">Màn hình</h3>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            QHD 16 inch, tốc độ làm mới 165Hz, Dolby Vision, Adaptive-Sync, viền
            siêu mỏng.
          </motion.p>
        </div>
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">Thiết kế mỏng và nhẹ</h3>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Di động và bền bỉ với độ dày dưới 20mm và trọng lượng dưới 2kg.
          </motion.p>
        </div>
        <div className="w-full mt-10">
          <h3 className="text-2xl font-bold">Làm mát hiệu quả</h3>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Công nghệ làm mát thông minh ROG, giữ cho máy tính xách tay
          </motion.p>
        </div>
      </div>

      <video
        className="w-full rounded-t-[20px] xl:rounded-t-[40px] mt-10"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src={videoLaptop} type="video/mp4" />
      </video>
    </>
  );
};

export default SectionWrapper(Works, "");
