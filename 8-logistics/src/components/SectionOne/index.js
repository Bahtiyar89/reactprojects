import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  FormWrap,
  Icon,
  FormContent,
  //Form,
  FormLabel,
  FormInput,
  FormH1,
  FormButton,
  Text,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import { Button as But, Checkbox, Form } from "semantic-ui-react";

const HeroSection = () => {
  const [hover, seThover] = useState(false);
  const onHover = () => {
    seThover(!hover);
  };

  const [values, seTvalues] = useState({
    name: "",
    surname: "",
    patronymic: "",
    phone: "",
    email: "",
    postal_code: "",
    street: "",
    home: "",
    apartment: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        {/*} <HeroH1>Virtual video</HeroH1>
        <HeroP>Sign up and go...</HeroP>
        <FormWrap>
         
          <Form onSubmit={handleSubmit} action="#">
            <div
              style={{
                background: "#010101",
                height: "auto",
                width: "100%",
                flexDirection: "row",
                margin: "0 auto",
                padding: "80px 32px",
                borderRadius: "4px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.9)",
              }}
            >
              <FormLabel htmlFor="for">Имя</FormLabel>
              <FormInput
                onChange={(e) => seTvalues({ ...values, name: e.target.value })}
                value={values.email}
                type="text"
                required
              />
              <FormLabel htmlFor="for">Фамилия</FormLabel>
              <FormInput
                onChange={(e) =>
                  seTvalues({ ...values, surname: e.target.value })
                }
                value={values.password}
                type="text"
                required
              />
            </div>
            <div>
              <FormLabel htmlFor="for">Имя</FormLabel>
              <FormInput
                onChange={(e) => seTvalues({ ...values, name: e.target.value })}
                value={values.email}
                type="text"
                required
              />
              <FormLabel htmlFor="for">Фамилия</FormLabel>
              <FormInput
                onChange={(e) =>
                  seTvalues({ ...values, surname: e.target.value })
                }
                value={values.password}
                type="text"
                required
              />
            </div>
            <FormButton type="submit">Продолжить</FormButton>
          </Form>
              </FormWrap>*/}
        {/*     <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>*/}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
