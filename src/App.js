import Home from "./comp/Home"
import Write from "./comp/Write"
import Login from "./comp/Login"
import Register from "./comp/Register";
import Settings from "./comp/Settings"
import Single from "./comp/Single"
import TopBar from "./comp/TopBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register"  element={user ? <Home />:<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
