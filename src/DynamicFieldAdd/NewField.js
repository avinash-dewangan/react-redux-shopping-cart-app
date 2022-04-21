import { useReducer } from "react";
import "./NewField.css";

const initialForm = {
  name: "",
  label: "",
  inputType: "input"
};

export default function NewField({ addField }) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const handleInput = (evt) => {
    dispatch({
      type: "input",
      fieldName: evt.target.name,
      value: evt.target.value
    });
  };

  const handleNameInput = (evt) => {
    dispatch({
      type: "trimInput",
      fieldName: evt.target.name,
      value: evt.target.value
    });
  };

  const handleSelect = (evt) => {
    dispatch({
      type: "select",
      fieldName: evt.target.name,
      value: evt.target.value
    });
  };

  const handleSubmit = (evt) => {
    addField(evt, state);
    dispatch({
      type: "reset"
    });
  };

  return (
    <>
      <fieldset className="newField">
        <label htmlFor="name">Internal Name: </label>
        <input
          name="name"
          placeholder="field name"
          value={state.name}
          onChange={handleNameInput}
        />
        <label htmlFor="label">Label: </label>
        <input
          name="label"
          placeholder="label name"
          value={state.label}
          onChange={handleInput}
        />
        <label htmlFor="inputType">Input type: </label>
        <select name="inputType" onChange={handleSelect}>
          <option value="text">Text input</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="time">Date</option>
        </select>
        <button onClick={handleSubmit}>add</button>
      </fieldset>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "input":
      return { ...state, [action.fieldName]: action.value };
    case "trimInput":
      return { ...state, [action.fieldName]: action.value.trim() };
    case "select":
      return { ...state, [action.fieldName]: action.value };
    case "reset":
      return { ...initialForm };
    default:
      console.log("reducer action.type not found");
  }
}
