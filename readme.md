# React Notes

I have made these notes while learning React. These are the topics I have practised.

## Props

Props means properties. We use props to pass data from one component to another, mostly from parent to child.

- Props are passed like attributes.
- We receive props in the child component.
- Props are read-only, we cannot directly change them in child component.
- We can pass strings, numbers, arrays, objects etc.
- Props help us reuse components.

Example:

App.jsx

```jsx
function App() {
  return <Student name="Jai" age={20} />;
}

export default App;
```

Student.jsx

```jsx
function Student({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

export default Student;
```

Here we are passing name and age from App to Student using props.

## State

State is used to store data in a component. We use useState to create state in React.

- useState is a React Hook.
- State can change with user actions.
- We use a setter function to update state.
- When state changes React updates the UI.
- We should not update state directly.

Syntax:

```jsx
const [count, setCount] = useState(0);
```

Here count is the current value and setCount is used to update it. The initial value is 0.

Example:

```jsx
import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default State;
```

When we click Increase the count increases by 1. When we click Decrease it decreases by 1.

## Events

Events are actions performed by the user. For example clicking a button, typing in an input or submitting a form.

- We use event handlers to perform actions.
- onClick is used when we click something.
- onChange is used when input value changes.
- onSubmit is used when we submit a form.
- React event names use camelCase.
- We pass a function to the event handler.

Example:

```jsx
function Event() {

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <h2>Event Handling</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Event;
```

Here handleClick is called when we click the button.

## Summary

- Props are used to pass data between components.
- State is used to store and update data.
- Events are used to handle user actions.
- useState is used to create state.
- JSX allows us to write HTML-like code in JavaScript.
- A component is a function that returns JSX.
- Re-render means React updates the UI when state changes.