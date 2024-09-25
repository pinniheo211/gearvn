import { Footer, Navbar } from "../components";

const PolicySupport = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[100px] max-w-7xl mx-auto px-5">
        <div>
          <h1 className="text-center text-2xl font-bold">
            CHÍNH SÁCH KHÁCH HÀNG THÂN THIẾT
          </h1>
          <div className="mt-5">
            <p className="font-semibold text-lg">1. Đối tượng áp dụng</p>
            <p className="mt-2">
              Chính sách này áp dụng cho tất cả khách hàng đăng ký tham gia
              chương trình khách hàng thân thiết của công ty.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">
            2. Quyền lợi của khách hàng thân thiết
          </p>

          <ul className="list-disc ml-10">
            <li>
              <p>
                Tích điểm: Khách hàng sẽ được tích điểm cho mỗi giao dịch mua
                sắm. Mỗi 1.000 VNĐ sẽ tương ứng với 1 điểm.
              </p>
            </li>
            <li>
              <p>
                Quà tặng: Khi đạt đến một số điểm nhất định, khách hàng sẽ nhận
                được quà tặng hấp dẫn hoặc ưu đãi đặc biệt.
              </p>
            </li>
            <li>
              <p>
                Giảm giá: Khách hàng thân thiết sẽ được hưởng các chương trình
                giảm giá đặc biệt và ưu đãi từ công ty.
              </p>
            </li>
            <li>
              <p>
                Chăm sóc khách hàng: Khách hàng thân thiết sẽ được ưu tiên trong
                việc chăm sóc và giải quyết các vấn đề phát sinh.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">3. Cách tham gia</p>
          <p className="mt-2">
            Khách hàng có thể đăng ký tham gia chương trình thông qua website
            của công ty hoặc tại cửa hàng, cung cấp thông tin cá nhân cần thiết
            để tạo tài khoản.
          </p>
        </div>
        <div className="  flex justify-end  mt-10 ">
          <a
            href="/"
            className="w-[200px] group cursor-pointer flex items-center gap-3"
          >
            <p>Quay về trang chủ</p>
            <p className="text-sm  group-hover:translate-x-1 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PolicySupport;
