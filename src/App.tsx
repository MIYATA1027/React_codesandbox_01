import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import { Home } from "./Home";
import { Count } from "./Count";
import { Layout } from "./Layout";
import { LayoutSecondary } from "./LayoutSecondary";
import { CustomMemo } from "./Render/CustomMemo";
import { Callback } from "./Render/Callback/Callback";
import { CustomCallback } from "./Render/Callback/CustomCallback";
import { NotUseCallback } from "./Render/Callback/NotUseCallback";
import { Parent } from "./AntiPattern/Parent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Count" element={<Count />} />
          <Route path="/Parent" element={<Parent />} />
        </Route>

        <Route element={<LayoutSecondary />}>
          <Route path="/Memo" element={<CustomMemo />} />
          <Route path="/Callback" element={<Callback />} />
          <Route path="/CustomCallback" element={<CustomCallback />} />
          <Route path="/NotUseCallback" element={<NotUseCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
