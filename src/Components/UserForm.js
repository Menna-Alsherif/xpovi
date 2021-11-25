import React, { useReducer } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

const UserForm = () => {
  const initialState = {
    step: 1,
    businessType: "",
    ageBracket: "",
    allIndustries: "",
    investment: "",
    investmentValue: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREASE_STEP":
        return { ...state, step: state.step + 1 };
      case "DECREASE_STEP":
        return { ...state, step: state.step - 1 };
      case "UPDATE_STATE":
        return { ...state, [action.payload.input]: action.payload.event };

      default:
        throw new Error();
    }
  }

  const nextStep = () => {
    dispatch({ type: "INCREASE_STEP" });
  };

  const prevStep = () => {
    dispatch({ type: "DECREASE_STEP" });
  };

  const handleChange = (input) => (e) => {
    dispatch({
      type: "UPDATE_STATE",
      payload: {
        input: input,
        event: e.target.value,
      },
    });
  };

  const { step } = state;
  const {
    businessType,
    ageBracket,
    allIndustries,
    investment,
    investmentValue,
  } = state;

  // values so we can take it into each component
  const values = {
    businessType,
    ageBracket,
    allIndustries,
    investment,
    investmentValue,
  };
  console.log("values", values);

  console.log("state", state);
  console.log("step", step);

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      return <p>Hey There</p>;
  }
};

export default UserForm;
