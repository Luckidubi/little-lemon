import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import useSubmit from "../../hooks/useSubmit";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useBookingContext } from "../../context/BookingContext";
import { useAlertContext } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const { isLoading, response, submit } = useSubmit();
  const { booking } = useBookingContext();

  const { onOpen } = useAlertContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    submit(booking);
  };

  useEffect(() => {
    if (response?.type === "success") {
      onOpen("success", response?.message);
      console.log(response);
      navigate("/");
    } else if (response?.type === "error") {
      onOpen("error", response?.message);
      console.log(response);
    }
  }, [response]);

  return (
    <>
      <section className="llemon__ConfirmedBooking section__padding">
        <VStack minW="280px" maxW="768px" p={4} alignItems="flex-start">
          <Heading color="var(--bg-primary-green)" as="h1">
            Booking Confirmation
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <TableContainer mb={4}>
              <Table variant="simple">
                <TableCaption>Table Reservation Options</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Bookings</Th>
                    <Th></Th>
                    <Th isNumeric>Selection</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Date</Td>
                    <Td></Td>
                    <Td isNumeric>{booking?.date}</Td>
                  </Tr>
                  <Tr>
                    <Td>Time</Td>
                    <Td></Td>
                    <Td isNumeric>{booking?.time}</Td>
                  </Tr>
                  <Tr>
                    <Td>Guests</Td>
                    <Td></Td>
                    <Td isNumeric>{booking?.guests}</Td>
                  </Tr>
                  <Tr>
                    <Td>Occasion</Td>
                    <Td></Td>
                    <Td isNumeric>{booking?.occasion}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Button
              isLoading={isLoading}
              type="submit"
              colorScheme="yellow"
              width="full"
              onClick={handleSubmit}
            >
              Confirm Reservation
            </Button>
          </Box>
        </VStack>
      </section>
    </>
  );
}

export default ConfirmedBooking;
