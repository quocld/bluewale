import Header from "./components/Header";
import Login from "./components/Login";
import SideMenu from "./components/SideMenu";
import Dashboad from "./dashboard";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      <Header></Header>
      {session && (
        <>
          <SideMenu></SideMenu>
          <Dashboad></Dashboad>
        </>
      )}
    </main>
  );
}
