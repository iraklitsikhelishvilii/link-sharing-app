import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().min(2, "Name too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
  password: Yup.string()
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/\d/, "At least one number")
    .required("Password is required"),
});
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/\d/, "At least one number")
    .required("Password is required"),
});
