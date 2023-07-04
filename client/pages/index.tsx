import Header from "./components/Header";
import Login from "./components/Login";
import SideMenu from "./components/SideMenu";
import Dashboad from "./dashboard";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <main className={scss.main}>
      <Header></Header>
      {session && (
        <>
          <SideMenu></SideMenu>
          <Dashboad></Dashboad>
        </>
      )}
    </main>
  );
};

export default Home;
