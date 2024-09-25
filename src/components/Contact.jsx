import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Fadhilah Dwi Ananda",
          from_email: form.email,
          to_email: "fadhilahdwi.a@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Liên hệ với chúng tôi</p>
        <h3 className={styles.sectionHeadText}>Liên hệ.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white text-2xl font-medium mb-4">
              Địa chỉ
            </span>
            <p className="text-secondary">
              Văn phòng đại diện :52/8/2C, Đường Số 12, Phường Tam Bình , Thành
              Phố Thủ Đức.
            </p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Hotline</span>
            <p className="text-secondary">006.003.2024 | Tel: 008.196.2004</p>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Facebook</span>
            <p className="text-secondary">gearvn.vn</p>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email:</span>
            <p className="text-secondary">contact@Gearvn.vn</p>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Website:</span>
            <a href="https://gearvn.com/" className="text-secondary">
              https://gearvn.com/
            </a>
          </label>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
