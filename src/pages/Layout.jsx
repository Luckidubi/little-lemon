import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer";
import { Suspense } from "react";
import { Center, Spinner } from "@chakra-ui/react";
function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Center my="6rem"><Spinner color="var(--bg-primary-green)" size="xl" thickness="4px" emptyColor="gray.200" speed="0.75s" /></Center>}>

      <Outlet/>
      </Suspense>
      <Footer/>
    </>
  );
}

export default Layout;
