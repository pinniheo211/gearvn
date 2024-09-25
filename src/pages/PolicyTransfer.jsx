import { Footer, Navbar } from "../components";

const PolicyTransfer = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[100px] max-w-7xl mx-auto px-5">
        <div>
          <h1 className="text-center text-2xl font-bold">
            CHÍNH SÁCH VẬN CHUYỂN
          </h1>
          <div className="mt-5">
            <p className="font-semibold text-lg">1. Phạm vi áp dụng:</p>
            <p className="mt-2">
              Chính sách này áp dụng cho tất cả các đơn hàng laptop gaming ROG
              Zephyrus G16 được đặt trên website Sarang U và các sàn thương mại
              điện tử, nhà phân phối.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">2. Thời gian giao hàng</p>
          <p className="mt-2">
            Thời gian giao hàng dự kiến là [Số ngày] ngày làm việc kể từ khi đơn
            hàng được xác nhận và thanh toán. Lưu ý: Thời gian giao hàng có thể
            thay đổi tùy thuộc vào địa chỉ giao hàng và các yếu tố khách quan
            như thời tiết, lễ tết, hoặc sự cố bất ngờ từ phía đơn vị vận chuyển.
          </p>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">3. Phí vận chuyển</p>

          <ul className="list-disc ml-10">
            <li>
              <p>
                Phí vận chuyển sẽ được tính toán tự động khi khách hàng hoàn tất
                đơn hàng.
              </p>
            </li>
            <li>
              <p>
                Chúng tôi sẽ áp dụng chương trình miễn phí vận chuyển cho các
                đơn hàng đạt giá trị 200.000 đồng trở lên hoặc các chương trình
                khuyến mãi khác (nếu có).
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">4. Trường hợp đặc biệt</p>

          <ul className="list-disc ml-10">
            <li>
              <p>
                Hủy đơn hàng: Khách hàng có thể hủy đơn hàng trước khi hàng bắt
                đầu giao.
              </p>
            </li>
            <li>
              <p>
                Đổi trả hàng: Vui lòng tham khảo chính sách đổi trả hàng của
                chúng tôi để biết thêm chi tiết.
              </p>
            </li>
          </ul>
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

export default PolicyTransfer;
