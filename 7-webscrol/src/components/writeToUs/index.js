import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import toast, { Toaster } from "react-hot-toast";
import { isMobile } from "react-device-detect";
import validator from "validator";
import emailjs from "emailjs-com";

import {
  AboutContainer,
  HeroBg,
  VideoBg,
  AboutContent,
  AboutH1,
  RowContent,
  SpanContent,
  Button,
  AlignRight,
  Centered,
} from "./RoadMapElements";

const CssTextField = withStyles({
  root: {
    "& > *": {
      marginTop: "17px",
      width: "335px",
      height: "56px",
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#efbb31",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF",
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#efbb31",
      },
    },
  },
})(TextField);

const CssTextField2 = withStyles({
  root: {
    "& > *": {
      marginTop: "17px",
      width: "335px",
      height: "135px",
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#efbb31",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF",
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#efbb31",
      },
    },
  },
})(TextField);

const WriteToUs = () => {
  const [formState, seTformState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const notify = () => {};

  const onInputChange = (e, fieldName) => {
    seTformState((prev) => {
      const varForm = { ...prev };
      switch (fieldName) {
        case "name":
          varForm.name = e.target.value;
          break;
        case "email":
          varForm.email = e.target.value;
          break;
        case "message":
          varForm.message = e.target.value;
          break;
        default:
          varForm[fieldName] = e.target.value;
      }
      return varForm;
    });
  };

  function sendEmail(e) {
    e.preventDefault();
    if (formState.name.length <= 0) {
      return toast.error("Name should not be null!");
    } else if (!validator.isEmail(formState.email)) {
      return toast.error("Email should not be null!");
    } else if (formState.message <= 0) {
      return toast.error("Message should not be null!");
    } else {
      emailjs
        .sendForm(
          "service_lky9zdh",
          "template_b9bg7xw",
          e.target,
          "user_lCxrG4z6KF1HYxNKLyxpG"
        )
        .then(
          (result) => {
            seTformState({
              name: "",
              email: "",
              message: "",
            });
            e.target.reset();
            return toast.success("Successfully created!", {
              // Styling
              style: {},
              className: "",
              // Custom Icon
              icon: "👏",
              // Change colors of success/error/loading icon
              iconTheme: {
                primary: "#000",
                secondary: "#fff",
              },
              // Aria
              ariaProps: {
                role: "alert",
                "aria-live": "polite",
              },
            });
          },
          (error) => {
            return toast.error("Message was not send");
          }
        );
    }
  }
  return (
    <>
      <AboutContainer id="road_map">
        <HeroBg>
          <VideoBg src={require("../../images/Rectangle_5.jpg").default} />
        </HeroBg>
        <AboutContent>
          <AboutH1>Write To Us</AboutH1>

          <RowContent>
            <form
              className="cont"
              onSubmit={sendEmail}
              noValidate
              autoComplete="off"
            >
              <SpanContent>
                <CssTextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  onChange={(e, o) => onInputChange(e, "name")}
                  value={formState.name}
                />
              </SpanContent>
              <SpanContent>
                <CssTextField
                  label="Mail"
                  name="email"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  onChange={(e, o) => onInputChange(e, "email")}
                  value={formState.email}
                />
              </SpanContent>
              <SpanContent>
                <CssTextField2
                  id="outlined-multiline-static"
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  variant="outlined"
                  onChange={(e, o) => onInputChange(e, "message")}
                  value={formState.message}
                />
              </SpanContent>
              <Centered>
                <AlignRight>
                  <Button type="submit">Send</Button>

                  <Toaster
                    position="top-center"
                    toastOptions={{
                      // Define default options
                      className: "",
                      duration: 1000,
                      style: {
                        background: "black",
                        color: "#fff",
                        marginTop: isMobile ? "20%" : "10%",
                      },
                      // Default options for specific types
                    }}
                  />
                </AlignRight>
              </Centered>
            </form>
          </RowContent>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default WriteToUs;
