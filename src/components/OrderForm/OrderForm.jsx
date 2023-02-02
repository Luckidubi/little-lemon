import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAlertContext } from "../../context/AlertContext";
import useSubmit from "../../hooks/useSubmit";
import "./OrderForm.css";
import { useMenuContext } from "../../context/MenuContext";

function OrderForm() {
  const navigate = useNavigate();
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { cart } = useMenuContext();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    onSubmit: (values) => {
      if (cart.length === 0) return;

      submit(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Too Short!")
        .max(50, "Too Long!"),
      phone: Yup.string()
        .matches(phoneRegExp, "Invalid Phone Number")
        .required("Required")
        .min(10, "Too short"),
      email: Yup.string().email("Invalid Email").required("Required"),

      address: Yup.string().required("Required").min(7, "Too Short!"),
    }),
  });
  return (
    <>
      <section className="llemon__OrderForm">
        <VStack minW="280px" maxW="450px" p={2} alignItems="center">
          <Heading color="var(--bg-primary-green)" as="h1">
            Checkout Form
          </Heading>
          <Box p="0 2rem" rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl
                  isInvalid={formik.touched.name && formik.errors.name}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    {...formik.getFieldProps("name")}
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.phone && formik.errors.phone}
                >
                  <FormLabel htmlFor="time">Phone</FormLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g...12645643557"
                    {...formik.getFieldProps("phone")}
                  />

                  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                    placeholder="Enter Email"
                  />

                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.address && formik.errors.address}
                >
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Enter address"
                    {...formik.getFieldProps("address")}
                  />

                  <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                </FormControl>

                <Button
                  isLoading={isLoading}
                  type="submit"
                  colorScheme="yellow"
                  width="base"
                  isDisabled={cart.length === 0}
                >
                  Checkout
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </section>
    </>
  );
}

export default OrderForm;
