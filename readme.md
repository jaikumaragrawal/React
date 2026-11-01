# React Notes

## 1. Props

Props means properties.

- Props are used to pass data from parent component to child component.
- Props are read-only.
- We can reuse a component with different data.

Example:

App.jsx

```jsx
import Student from "./Student";

function App() {
  return <Student name="Jai" course="React" />;
}

export default App;
```

Student.jsx

```jsx
function Student({ name, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
    </div>
  );
}

export default Student;
```

## 2. State

State is used to store data inside a component. State can change when the user performs an action.

- useState is a React Hook.
- It is used to create and update state.
- When state changes, React updates the UI.
- We should not change state directly.

Syntax:

```jsx
const [count, setCount] = useState(0);
```

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

## 3. Events

Events are actions performed by the user, like clicking a button or typing in an input.

- Events are handled using event handler functions.
- React event names use camelCase.
- We use onClick for button clicks.
- We use onChange for input changes.
- We use onSubmit for form submission.

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

## 4. Difference between Props, State and Events

| Props | State | Events |
|---|---|---|
| Pass data between components | Store changing data | Handle user actions |
| Read-only in child | Can be updated | Call a function |
| Example: Student name | Example: Counter | Example: Button click |

## 5. Quick Revision

- Props: Pass data from parent to child.
- State: Store and update data.
- useState: Hook used for state.
- Events: Handle user actions.
- JSX: HTML-like syntax used in React.
- Component: Reusable part of an application.
- Re-render: React updates the UI when state changes.