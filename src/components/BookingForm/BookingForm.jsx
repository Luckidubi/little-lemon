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
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useBookingContext } from "../../context/BookingContext";




function BookingForm({ availableTimes, updateTimes }) {

const {updateBookings} = useBookingContext();

const navigate =  useNavigate()

  const selectTime = availableTimes.map((t, i) => (
    <option key={i + "asdsd54"} value={t}>
      {t}
    </option>
  ));


  const getDateFormat = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return year + "-" + month + "-" + day;
  };

  const handleDateChange = (e) => {
    updateTimes(new Date(e.target.value));

  };



  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "Birthday",
    },
    onSubmit:  async (values) => {
      await updateBookings(values)


        navigate("/confirmed");
      console.log(values);


    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      time: Yup.string().required("Required"),
      guests: Yup.number()
        .required("Required")
        .min(1, "Minimum guests is 1")
        .max(8, "Maximum guests is 8"),
      occasion: Yup.string().required("Required"),
    }),
  });
  return (
    <>
      <section className="llemon__BookingForm section__padding">
        <VStack minW="280px" maxW="768px" p={4} alignItems="flex-start">
          <Heading id="booking-heading" color="var(--bg-primary-green)" as="h1">
            Reserve a Table
          </Heading>
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
                    min={getDateFormat()}
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleDateChange(e);
                    }}
                    value={formik.values.date}
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
                    placeholder="Select Time"
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
<HStack>

<input type="number" step={1} style={{width:"100%", border:"1px solid", padding:".5rem", borderRadius:"5px"}} id="guests" name="guests" {...formik.getFieldProps("guests")} min={1} max={10} placeholder="Enter Number of Guests"/>


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
                    {...formik.getFieldProps("occasion")}
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversary">Anniversary</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>

                <Button

                  type="submit"
                  colorScheme="yellow"
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
