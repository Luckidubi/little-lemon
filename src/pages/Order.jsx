import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import OrderForm from '../components/OrderForm/OrderForm'
import OrderList from '../components/OrderList/OrderList'

function Order() {
  const [isLowerThan767] = useMediaQuery('(max-width: 767px)')
  return (
    <>

<OrderList/>
{isLowerThan767 ? <OrderForm/> : ""}


    </>
  )
}

export default Order