import React, { useState, useEffect, Fragment } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

const FormPersonalDetails = (props) => {

  const [disableValue, setDisableValue] = useState(false);

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
  if(values.investment === "No")
    setDisableValue(true);
    if(values.investment === "Yes")
    setDisableValue(false);
 }, [values.investment])
  

  return (
    <div>
      <Fragment>
        <p>1. Did you have an investment?</p>

        <InputGroup>
          <Form.Check
            name={"qOneSTwo"}
            value={"Yes"}
            checked={values.investment === "Yes"}
            onChange={handleChange("investment")}
            type={"radio"}
            label={"Yes"}
          />
          <Form.Check
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
            disabled={disableValue}
            type="number"
            min="0"
            step="1"
            onChange={handleChange("investmentValue")}
            defaultValue={values.investmentValue}
            placeholder="Enter Investment Value"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <br />

        <Button onClick={back} className="w-50 btn btn-lg">
          Go Back
        </Button>

        <Button onClick={next} className="w-50 btn btn-lg btn-dark">
          Continue
        </Button>
      </Fragment>
    </div>
  );
};

export default FormPersonalDetails;
