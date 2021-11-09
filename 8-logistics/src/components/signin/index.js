import React, { Fragment, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
import AuthContext from "../../context/auth/AuthContext";
import { isAuthonticated } from "../../utils/helpers";

const Signin = () => {
  const [values, seTvalues] = useState({
    email: "",
    password: "",
  });
  const authContext = useContext(AuthContext);
  const { signin, loading, redirectToReferrer, reverseRedirect } = authContext;

  const [redirect, seTredirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email === "" || values.password === "") {
      console.log("Gerekli alanları doldurun");
    } else {
      signin(values);
      //seTredirect(true);
      // localStorage.setItem("token", JSON.stringify(values));
      //  localStorage.setItem("user", JSON.stringify(values));
    }
  };

  if (isAuthonticated()) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Container>
        <FormWrap>
          <Icon to="/">swt</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit} action="#">
              <FormH1>Авторизация</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                onChange={(e) =>
                  seTvalues({ ...values, email: e.target.value })
                }
                value={values.email}
                type="text"
                required
              />
              <FormLabel htmlFor="for">Пароль</FormLabel>
              <FormInput
                onChange={(e) =>
                  seTvalues({ ...values, password: e.target.value })
                }
                value={values.password}
                type="password"
                required
              />
              <FormButton type="submit">Продолжить</FormButton>
              <Text>Регистрация</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Loader
        type="Bars"
        color="#00BFFF"
        height={40}
        width={40}
        visible={loading}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
    </Fragment>
  );
};
export default Signin;
