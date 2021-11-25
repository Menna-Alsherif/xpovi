import React, { Fragment } from "react";
import { ListGroup, Button } from "react-bootstrap";

const Confirm = (props) => {
  const next = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props.values)
  };
  fetch('https://reqres.in/api/posts', requestOptions)
  .then(response => response.json())
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: {
      businessType,
      ageBracket,
      allIndustries,
      investment,
      investmentValue,
    },
  } = props;
  return (
    <div>
      <Fragment>
        <h1>Confirm</h1>

        <br />
        <ListGroup>
          <ListGroup.Item>Business Type: {businessType}</ListGroup.Item>
          <ListGroup.Item>Age Bracket : {ageBracket}</ListGroup.Item>
          <ListGroup.Item>All Industries : {allIndustries}</ListGroup.Item>
          <ListGroup.Item>Investment : {investment}</ListGroup.Item>
          <ListGroup.Item>Investment Value : {investmentValue}</ListGroup.Item>
        </ListGroup>

        <br />
        <Button onClick={back} className="w-50  btn btn-lg">
          Go Back
        </Button>

        <Button onClick={next} className="w-50  btn btn-lg">
          Confirm and Continue
        </Button>
      </Fragment>
    </div>
  );
};

export default Confirm;
