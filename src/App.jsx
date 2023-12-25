import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderView from "./components/Header/HeaderView";
import ListPageController from "./pages/ListPage/ListPageController";
import AddPageController from "./pages/AddPage/AddPageController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />

      <Routes>
        <Route path="/" element={<ListPageController />} />
        <Route path="add" element={<AddPageController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
