import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PolicyReturn from "./pages/PolicyReturn";
import PolicyTransfer from "./pages/PolicyTransfer";
import PolicySecurity from "./pages/PolicySecurity";
import PolicySupport from "./pages/PolicySupport";
import PolicyBuy from "./pages/PolicyBuy";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chinh-sach-doi-tra" element={<PolicyReturn />} />
        <Route path="/chinh-sach-van-chuyen" element={<PolicyTransfer />} />
        <Route path="/chinh-sach-bao-mat" element={<PolicySecurity />} />
        <Route
          path="/chinh-sach-khach-hang-than-thien"
          element={<PolicySupport />}
        />
        <Route path="/chinh-sach-thanh-toan" element={<PolicyBuy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
