import { useReducer } from 'react';
import Form from './Form';
import NewField from './NewField';

const initialState = {
  formName: '',
  fields: []
};

export default function Builder() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(state);
  };
  const addField = (_, details) => {
    // could set a warning if duplicate
    if (!isDuplicate(state, details.name) && details.name.length > 0) {
      dispatch({
        type: 'addField',
        fieldName: details.name,
        value: {
          type: details.inputType,
          name: details.name,
          label: details.label
        }
      });
    }
  };
  const removeField = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'removeField',
      fieldName: evt.target.name
    });
  };
  return (
    <div>
      <h3>Builder</h3>
      <Form onSubmit={handleSubmit}>
        {state.fields.map((field) => {
          return (
            <fieldset key={field.name}>
              <label>{field.label}</label>
              <input type={field.type} name={field.name} />
              <button onClick={removeField} name={field.name}>
                -
              </button>
            </fieldset>
          );
        })}
      </Form>
      <NewField addField={addField} />
    </div>
  );
}

function isDuplicate(state, name) {
  // if state.name exists then it is a duplicated field
  return !!state.fields.find((customFields) => customFields.name === name);
}

function reducer(state, action) {
  switch (action.type) {
    case 'addField':
      return {
        ...state,
        fields: [
          ...state.fields.filter((fieldName) => action.fieldName !== fieldName),
          action.value
        ]
      };
    case 'removeField':
      return {
        ...state,
        fields: [
          ...state.fields.filter(
            (fieldName) => action.fieldName !== fieldName.name
          )
        ]
      };
    default:
      console.log('reducer action.type not found');
  }
}
