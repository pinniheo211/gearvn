import { Footer, Navbar } from "../components";

const PolicyBuy = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[100px] max-w-7xl mx-auto px-5">
        <div>
          <h1 className="text-center text-2xl font-bold">
            CHÍNH SÁCH THANH TOÁN
          </h1>
          <div className="mt-5">
            <p className="font-semibold text-lg">1. Phương thức thanh toán</p>
            <p className="mt-2">
              Khách hàng có thể lựa chọn các phương thức thanh toán sau:
            </p>
            <ul className="list-disc ml-10">
              <li>
                <p>Thanh toán trực tiếp bằng tiền mặt tại cửa hàng.</p>
              </li>
              <li>
                <p>
                  Chuyển khoản ngân hàng (thông tin tài khoản sẽ được cung cấp
                  khi đặt hàng).
                </p>
              </li>
              <li>
                <p>
                  Thanh toán qua thẻ tín dụng/ghi nợ (hỗ trợ các loại thẻ Visa,
                  MasterCard, và các thẻ nội địa).
                </p>
              </li>
              <li>
                <p>Thanh toán qua ví điện tử như MoMo, ZaloPay, và VNPAY.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">2. Quy Định chung</p>

          <ul className="list-disc ml-10">
            <li>
              <p>
                Thời gian thanh toán: Khách hàng cần hoàn tất thanh toán trong
                vòng 24 giờ kể từ khi đặt hàng.
              </p>
            </li>
            <li>
              <p>
                Hủy đơn hàng: Nếu khách hàng không thanh toán đúng thời hạn, đơn
                hàng sẽ tự động bị hủy.
              </p>
            </li>
            <li>
              <p>
                Biên lai giao dịch: Khách hàng sẽ nhận được biên lai giao dịch
                sau khi thanh toán thành công.
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
          <p className="font-semibold text-lg">3. ĐẢM BẢO AN TOÀN</p>
          <p className="mt-2">
            Công ty cam kết bảo mật thông tin thanh toán của khách hàng và sử
            dụng các công nghệ bảo mật tiên tiến để bảo vệ dữ liệu.
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

export default PolicyBuy;
