import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { linkArrow } from "../assets";
import { Link } from "react-router-dom";
import hung from "../assets/hung.jpg";
const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      id="about"
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <a href={link}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="flex items-center gap-10 lg:flex-row flex-col">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Về Chúng tôi</p>
          <h2 className={`text-white font-bold text-5xl`}>Phạm Quốc Hưng</h2>
        </motion.div>
        <div className="w-[230px] h-[230px] rounded-full overflow-hidden">
          <img src={hung} alt="hung" className="w-full h-full" />
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Xin chào tất cả mọi người! Trang web này được tạo ra bởi Phạm Quốc Hưng
        (BABAWE22370), một sinh viên Quản trị Kinh doanh, như một phần của bài
        tập cho khóa học Thương mại điện tử tại trường đại học. Tôi chọn laptop
        chơi game ROG Zephyrus G16 (2024) GU605 làm sản phẩm chính cho dự án này
        vì tôi rất quan tâm đến công nghệ và cũng là một game thủ.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Bạn đã bao giờ cảm thấy laptop của mình quá chậm hoặc quá nóng khi chơi
        game? Đừng lo lắng, ROG Zephyrus G16 (2024) GU 605, chiếc laptop gaming
        đỉnh cao đến từ ASUS, sẽ là giải pháp hoàn hảo cho bạn! ROG Zephyrus G16
        được ra đời với sứ mệnh mang đến trải nghiệm gaming mượt mà, mạnh mẽ, và
        không gián đoạn. Với cấu hình mạnh mẽ từ bộ vi xử lý Intel thế hệ mới
        nhất, cùng với card đồ họa NVIDIA RTX hàng đầu, Zephyrus G16 giúp bạn
        chinh phục mọi tựa game với hiệu suất tuyệt đỉnh. Thiết kế siêu mỏng,
        nhẹ và hệ thống tản nhiệt tiên tiến giúp bạn mang theo máy mọi nơi và
        sẵn sàng chiến đấu bất kỳ lúc nào. Hãy để ROG Zephyrus G16 đồng hành
        cùng bạn trên mọi đấu trường gaming!
      </motion.p>
      {/* <div className="mt-5 flex cursor-pointer" onClick={onButtonClick}>
        Resume{" "}
        <img
          src={linkArrow}
          height={20}
          width={20}
          className="ml-2"
          alt="arrow"
        />
      </div> */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          console.log(service, "service");
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
