import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" exact element={<Navigate to="/upload" replace/>}/>
         <Route path="login" index element={<LoginPage/>}/>
         <Route path="signup" element={<SignUpPage/>}/>
         <Route path="upload" element={<UploadPage/>}/>
       </Routes>
    </BrowserRouter>
  );
}