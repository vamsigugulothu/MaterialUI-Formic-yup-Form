import React from "react";
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import { Button, Card, CardContent, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { userSchema } from "../validations/uservalid";
import { Formik, Form, Field, ErrorMessage } from "formik";

const UserForm = () => {
    const initialValues = {
        Name:"",
        email:"",
        country: "",
        gender:"",
        describe: ""
    }

    const submitHandler = (values, props) => {
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false)
        },2000);
        alert(JSON.stringify(values))
    }
    return (
        <>
        <Card style={{maxWidth: 400, margin: "0 auto"}}>
            <CardContent>
                <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={submitHandler}>
                    {(props) => (
                        <Form>
                            <Grid container spacing={1}>
                                <Grid xs={12}item>
                                    <Field as={TextField} name="Name" label="Name" variant="outlined" fullWidth helperText={<ErrorMessage name="Name">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                                </Grid>
                                <Grid xs={12} item>
                                    <Field as={TextField} label="Email" name="email" variant="outlined" fullWidth helperText={<ErrorMessage name="email">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                                </Grid>
                                <Grid xs={12} item>
                                    <Field as={TextField}
                                        select
                                        label="Select Country"
                                        defaultValue="EUR"
                                        fullWidth
                                        name="country"
                                        helperText={<ErrorMessage name="country">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}
                                    >
                                        <MenuItem value={"India"}>India</MenuItem>
                                        <MenuItem value={"USA"}>USA</MenuItem>
                                        <MenuItem value={"SriLanka"}>SriLanka</MenuItem>
                                    </Field>
                                </Grid>
                                <Grid xs={12} item>
                                    <Field as={RadioGroup} aria-label="gender" name="gender" row style={{alignItems:"center", justifyContent:"space-between"}}>
                                        <FormLabel>Gender: </FormLabel>
                                        <FormControlLabel control={<Radio/>}label="Male" value="male"/>
                                        <FormControlLabel control={<Radio/>} label="Female" value="female"/>
                                    </Field>
                                    <FormHelperText><ErrorMessage name="gender" style={{ color: 'red' }}>{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage></FormHelperText>
                                </Grid>
                                <Grid xs={12} item>
                                    <Field as={TextField} multiline rows={3} name="describe" label="Desribe About You" variant="outlined" fullWidth helperText={<ErrorMessage name="describe">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>}/>
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" label="Desription" variant="contained" disabled={props.isSubmitting}> {!props.isSubmitting ? "Submit": "Loading"}</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    ) }
                </Formik>
            </CardContent>
        </Card>
        </>
    );
}

export default UserForm;