import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Formik } from "formik";
import { createTheme } from "@mui/material/styles";
import { CardContent } from "@mui/material";

import "./signin.css";
import { environment } from "../../../environments/environment";

const initialValues = {
  email: "",
};

const validate = (values: any) => {
  let errors: any = {};
  const regex = /^[a-z0-9._%+-]+@g7cr.com$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Please Enter Valid Email Id";
  }
  return errors;
};

const submitForm = (values: any) => {
  window.location.href =
    "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=" +
    `${environment.clientId}` +
    "&prompt=select_account&response_type=code&redirect_uri=" +
    `${environment.redirectUrl}` +
    "&response_mode=query&scope=" +
    `${environment.scope}` +
    "&login_hint=" +
    values.email +
    "";
};

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div>
            <div className="main-div"></div>
            <div className="content">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-xl-12 col-sm-12 col-md-12">
                        <h3
                          className="display-4"
                          style={{
                            fontWeight: "600",
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontFamily: "Verdana, sans-serif",
                            color: "rgb(57 71 100)",
                            margin: "20px",
                            fontSize: "30px",
                            marginLeft: "30px",
                          }}
                        >
                          Time Tracker
                        </h3>
                        <h5
                          style={{
                            fontSize: 14,
                            fontWeight: 400,
                            marginBottom: 6,
                            marginTop: 20,
                            textAlign: "center",
                          }}
                        >
                          Sign in with your
                          <img
                            src={require("../../../assets/images/Microsoft_Logo_Login.png")}
                            alt=""
                            width="13px"
                            style={{ marginLeft: 6 }}
                          />
                          <strong> Microsoft</strong> work account
                        </h5>
                        <div style={{ textAlign: "center" }}>
                          <img
                            className="time-gif"
                            src={require("../../../assets/images/1-min.gif")}
                          />
                        </div>
                        <form
                          onSubmit={handleSubmit}
                          style={{ marginTop: "20px" }}
                        >
                          <div
                            style={{
                              width: "80%",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            <TextField
                              size="small"
                              style={{ width: "100%" }}
                              type="email"
                              name="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              label="Registered Microsoft Email Id*"
                              // sx={{ m: 1, width: "40ch" }}
                              error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                              }
                              helperText={
                                formik.touched.email && formik.errors.email
                              }
                            />
                            <Button
                              type="submit"
                              disabled={!(dirty && isValid)}
                              variant="contained"
                              style={{ width: "100%", marginTop: 20 }}
                            >
                              LOGIN
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignIn;
