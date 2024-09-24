import { motion } from "framer-motion";
import Tilt from "react-tilt";
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import cris from "../assets/cris.jpeg";
import Mixi from "../assets/Mixi.webp";
import Viruss from "../assets/Viruss.jpg";
const Review = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Đánh giá</h2>
      </motion.div>
      <div className="flex flex-col gap-5 mt-5">
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <a
              href="#"
              className="flex flex-col items-center bg-tertiary rounded-lg shadow md:flex-row w-full "
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={cris}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  (Youtuber và streamer)
                </h5>
                <p className="mb-3 font-normal text-sm ">
                  "ROG Zephyrus G16 thật sự ấn tượng! Chiếc laptop này không chỉ
                  mạnh về hiệu năng mà còn rất gọn nhẹ, phù hợp cho những
                  streamer di chuyển nhiều như mình. Với cấu hình khủng, mình có
                  thể vừa stream vừa chơi game mà không gặp bất kỳ vấn đề gì.
                  Đây chắc chắn là lựa chọn hàng đầu cho game thủ."
                </p>
              </div>
            </a>
          </Tilt>
        </div>
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <a
              href="#"
              className="flex flex-col items-center bg-tertiary rounded-lg shadow md:flex-row w-full "
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={Mixi}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  Độ Mixi (Streamer nổi tiếng và chủ kênh MixiGaming)
                </h5>
                <p className="mb-3 font-normal text-sm ">
                  "Chiếc ROG Zephyrus G16 là tất cả những gì mình cần cho công
                  việc lẫn chơi game. Cấu hình cực mạnh, hiệu suất mượt mà, và
                  thiết kế di động phù hợp với phong cách bận rộn của mình. Thêm
                  vào đó, máy chạy cực kỳ êm và không quá nóng, rất đáng đồng
                  tiền."
                </p>
              </div>
            </a>
          </Tilt>
        </div>
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <a
              href="#"
              className="flex flex-col items-center bg-tertiary rounded-lg shadow md:flex-row w-full "
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={Viruss}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  Viruss (Streamer và nhà sản xuất âm nhạc)
                </h5>
                <p className="mb-3 font-normal text-sm ">
                  "Zephyrus G16 là một lựa chọn hoàn hảo cho những ai vừa muốn
                  chơi game vừa cần làm việc sáng tạo. Mình rất thích hệ thống
                  âm thanh Dolby Atmos, nó hỗ trợ tốt cho mình trong việc sản
                  xuất nhạc và trải nghiệm gaming cũng rất mượt mà."
                </p>
              </div>
            </a>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Review, "");
