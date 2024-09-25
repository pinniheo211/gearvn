import { Footer, Navbar } from "../components";

const PolicyReturn = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[100px] max-w-7xl mx-auto px-5">
        <div>
          <h1 className="text-center text-2xl font-bold">
            Chính sách đổi/trả hàng
          </h1>
          <div className="mt-5">
            <p className="font-semibold text-lg">1. Điều kiện đổi trả</p>
            <p className="mt-2">
              Quý khách hàng cần kiểm tra tình trạng sản phẩm và có thể đổi
              hàng/trả lại hàng ngay tại thời điểm giao/nhận hàng trong những
              trường hợp sau:
            </p>
            <ul className="ml-10 list-disc">
              <li>
                <p>
                  Laptop không đúng mẫu mã, cấu hình đã đặt hoặc như trên
                  website tại thời điểm đặt hàng.
                </p>
              </li>
              <li>
                <p>
                  Tình trạng bên ngoài bị ảnh hưởng như trầy xước, móp méo, hỏng
                  hóc.
                </p>
              </li>
              <li>
                <p>
                  Khách hàng có giấy tờ liên quan chứng minh sự thiếu sót trên.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">
            2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả
          </p>
          <div className="mt-2">
            <ul className="ml-10 list-disc">
              <li>
                <p>
                  Thời gian thông báo đổi trả: trong vòng 1 tuần kể từ khhi nhận
                  sản phẩm.
                </p>
              </li>
              <li>
                <p>
                  Thời gian gửi chuyển trả sản phẩm: trong vòng 1 tháng kể từ
                  khi nhận thông báo đổi trả.
                </p>
              </li>
              <li>
                <p>
                  Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực
                  tiếp đến văn phòng/cửa hàng hoặc chuyển qua đường bưu điện.
                </p>
              </li>
              <li>
                <p>
                  Trong trường hợp Quý khách hàng có ý kiến đóng góp/khiếu nại
                  liên quan đến sản phẩm. Vui lòng liên hệ đường dây chăm sóc
                  khách hàng của chúng tôi.
                </p>
              </li>
            </ul>
          </div>
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

export default PolicyReturn;
