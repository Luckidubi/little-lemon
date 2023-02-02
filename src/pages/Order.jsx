import { useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import OrderForm from "../components/OrderForm/OrderForm";
import OrderList from "../components/OrderList/OrderList";

function Order() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isLowerThan767] = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <OrderList />
      {isLowerThan767 ? <OrderForm /> : ""}
    </>
  );
}

export default Order;
