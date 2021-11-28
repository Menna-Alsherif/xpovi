import React, { useState, useEffect, Fragment } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

const FormPersonalDetails = (props) => {
  const [disableValue, setDisableValue] = useState(true);

  const handleSubmit = (event) => {
    console.log(values.investmentValue, typeof values.investmentValue);
    if (
      values.investment === "" ||
      values.investmentValue === 0 ||
      values.investmentValue === ""  ||
      values.investmentValue === "0"
    ) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      next(event);
    }
  };

  const next = (e) => {
    console.log(props.values);
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  useEffect(() => {
    if (values.investment === "No") setDisableValue(true);
    if (values.investment === "Yes") setDisableValue(false);
  }, [values.investment]);

  return (
    <div>
      <Fragment>
        <Form>
          <p>1. Did you have an investment?</p>

          <InputGroup>
            <Form.Check
              className="m-4"
              name={"qOneSTwo"}
              value={"Yes"}
              checked={values.investment === "Yes"}
              onChange={handleChange("investment")}
              type={"radio"}
              label={"Yes"}
            />
            <Form.Check
              required
              className="m-4"
              name={"qOneSTwo"}
              checked={values.investment === "No"}
              value={"No"}
              onChange={handleChange("investment")}
              type={"radio"}
              label={"No"}
            />
          </InputGroup>

          <br />

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              2. How much was the investment? :{" "}
            </InputGroup.Text>
            <FormControl
              className="m-4"
              disabled={disableValue}
              value={values.investmentValue}
              onKeyDown={(evt) => {
                if (
                  (evt.keyCode >= 48 && evt.keyCode <= 57) ||
                  evt.keyCode === 8 || (evt.keyCode >= 96 && evt.keyCode <= 105)
                ) {
                } else {
                  evt.preventDefault();
                }
              }}
              onChange={handleChange("investmentValue")}
              placeholder="Enter Investment Value"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <br />

          <Button onClick={back} className="w-50 btn-lg btn ">
            Go Back
          </Button>

          <Button onClick={handleSubmit} className="w-50 btn btn-lg btn-dark">
            Continue
          </Button>
        </Form>
      </Fragment>
    </div>
  );
};

export default FormPersonalDetails;
