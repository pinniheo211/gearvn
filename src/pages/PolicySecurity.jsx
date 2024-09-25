import { Footer, Navbar } from "../components";

const PolicySecurity = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[100px] max-w-7xl mx-auto px-5">
        <div>
          <h1 className="text-center text-2xl font-bold">CHÍNH SÁCH BẢO MẬT</h1>
          <div className="mt-5">
            <p className="font-semibold text-lg">
              1. Mục đích và phạm vi thu thập thông tin :
            </p>
            <p className="mt-2">
              Gearvn không bán, chia sẻ hay trao đổi thông tin cá nhân của khách
              hàng thu thập trên trang web cho bên thứ ba. Khi bạn liên hệ đăng
              ký dịch vụ, thông tin cá nhân mà Sarang U thu thập bao gồm: Họ và
              tên, Địa chỉ, Điện thoại, Email. Ngoài thông tin cá nhân là các
              thông tin về dịch vụ: Tên sản phẩm, Số lượng, Thời gian giao nhận
              sản phẩm.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-lg">2. Phạm vi sử dụng thông tin</p>
          <p className="mt-2">
            Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ
            công ty và cho một hoặc tất cả các mục đích sau:
          </p>
          <ul className="list-disc ml-10">
            <li>
              <p>Hỗ trợ khách hàng.</p>
            </li>
            <li>
              <p>Cung cấp thông tin liên quan đến sản phẩm.</p>
            </li>
            <li>
              <p>Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin.</p>
            </li>
            <li>
              <p>
                Trong trường hợp có yêu cầu của pháp luật, Công ty có trách
                nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu
                cầu từ cơ quan tư pháp.
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

export default PolicySecurity;
