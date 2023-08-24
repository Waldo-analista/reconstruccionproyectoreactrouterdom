import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const DefaultPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultPage;
