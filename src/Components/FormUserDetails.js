import React, { Fragment } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const FormUserDetails = (props) => {
  const next = (e) => {
    console.log(props.values);
    e.preventDefault();
    props.nextStep();
  };

  const { values, handleChange } = props;
  return (
    <div>
      <div>
        <Fragment>
          <p>1. Is your business model B2C or B2B or both?</p>

          <InputGroup>
            <Form.Check
              className="m-4"
              name={"qOne"}
              value={"B2C"}
              checked={values.businessType === "B2C"}
              onChange={handleChange("businessType")}
              type={"radio"}
              label={"B2C"}
            />
            <Form.Check
            className="m-4"
              name={"qOne"}
              checked={values.businessType === "B2B"}
              value={"B2B"}
              onChange={handleChange("businessType")}
              type={"radio"}
              label={"B2B"}
            />
            <Form.Check
              className="m-4"
              name={"qOne"}
              value={"Both"}
              checked={values.businessType === "Both"}
              onChange={handleChange("businessType")}
              type={"radio"}
              label={"Both"}
            />
          </InputGroup>

          <br />

          {values.businessType === "B2B" || values.businessType === "Both" ? (
            <>
              <p>2. Do you target all age brackets?</p>

              <InputGroup>
                <Form.Check
                  className="m-4"
                  name={"qTwo"}
                  value={"Yes"}
                  checked={values.ageBracket === "Yes"}
                  onChange={handleChange("ageBracket")}
                  type={"radio"}
                  label={"Yes"}
                />
                <Form.Check
                  className="m-4"
                  name={"qTwo"}
                  checked={values.ageBracket === "No"}
                  value={"No"}
                  onChange={handleChange("ageBracket")}
                  type={"radio"}
                  label={"No"}
                />
              </InputGroup>
            </>
          ) : (
            ""
          )}

          {values.businessType === "B2C" || values.businessType === "Both" ? (
            <>
              <p>3. Do you target all industries?</p>

              <InputGroup>
                <Form.Check
                    className="m-4"
                  name={"qThree"}
                  value={"Yes"}
                  checked={values.allIndustries === "Yes"}
                  onChange={handleChange("allIndustries")}
                  type={"radio"}
                  label={"Yes"}
                />
                <Form.Check
                    className="m-4"
                  name={"qThree"}
                  checked={values.allIndustries === "No"}
                  value={"No"}
                  onChange={handleChange("allIndustries")}
                  type={"radio"}
                  label={"No"}
                />
              </InputGroup>
            </>
          ) : (
            ""
          )}

          <br />

          <br />

          <Button onClick={next} className="w-50 btn btn-lg">
            Continue
          </Button>
        </Fragment>
      </div>
    </div>
  );
};

export default FormUserDetails;
