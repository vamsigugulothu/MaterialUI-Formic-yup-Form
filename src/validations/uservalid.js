import * as yup from "yup";

export const userSchema = yup.object().shape({
    Name: yup.string().min(3).required("Required"),
    email: yup.string().email("Enter Valid Email").required("Required"),
    country: yup.string().required("Required"),
    gender: yup.string().oneOf(["male","female"]).required("Required"),
    describe: yup.string().min(5,"Minimum 5 letters Required").required("Required")
});