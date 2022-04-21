import { Children } from 'react';
import './Form.css';

export default function Form({ onSubmit, children }) {
  const childrenCount = Children.toArray(children).length;
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      {childrenCount > 0 && (
        <button type="submit" disabled={false}>
          Submit
        </button>
      )}
    </form>
  );
}
