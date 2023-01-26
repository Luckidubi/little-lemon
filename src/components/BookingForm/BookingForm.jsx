import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNumberInput } from "@chakra-ui/react";

function BookingForm() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 10,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectTime = availableTimes.map((t, i) => (
    <option key={i + "asdsd54"} value={t}>
      {t}
    </option>
  ));
  const getCurrentLocalDate = () => {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    return new Date(Date.now() - tzoffset);
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    onSubmit: async (values) => {
      //   await submit(values);
      console.log(values);
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required("Required")
        .transform((value, originalValue) => {
          return originalValue === "" ? undefined : new Date(originalValue);
        })

        .min(getCurrentLocalDate() - 86400000, "You cannot choose a past date"),
      time: Yup.string().required("Required"),
      guests: Yup.number()
        .required("Required")
        .min(1, "Minimum guests is 1")
        .max(8, "Maximum guests is 10"),
      occasion:
        Yup.string()
        .required("Required"),
    }),
  });
  return (
    <>
      <section className="llemon__BookingForm section__padding">
        <VStack minW="280px" maxW="768px" p={10} alignItems="flex-start">
          <Heading as="h1">Reserve a Table</Heading>
          <Box p={6} rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl
                  isInvalid={formik.touched.date && formik.errors.date}
                >
                  <FormLabel htmlFor="date">Choose a date</FormLabel>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    {...formik.getFieldProps("date")}
                  />
                  <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.time && formik.errors.time}
                >
                  <FormLabel htmlFor="time">Choose time</FormLabel>
                  <Select
                    id="time"
                    name="time"
                    {...formik.getFieldProps("time")}
                  >
                    {selectTime}
                  </Select>
                  <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.guests && formik.errors.guests}
                >
                  <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                  <HStack maxW="320px">
                    <Button {...inc}>+</Button>
                    <Input
                      name="guests"
                      id="guests"
                      {...formik.getFieldProps("guests")}
                      {...input}
                    />
                    <Button {...dec}>-</Button>
                  </HStack>
                  <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.occasion && formik.errors.occasion}
                >
                  <FormLabel htmlFor="occasion">Choose Occasion</FormLabel>
                  <Select
                    id="ocassion"
                    name="ocassion"
                    {...formik.getFieldProps("ocassion")}
                  >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>

                <Button
                  isLoading={"isLoading"}
                  type="submit"
                  colorScheme="purple"
                  width="full"
                >
                  Make Your reservation
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </section>
    </>
  );
}

export default BookingForm;
