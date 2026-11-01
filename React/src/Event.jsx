
function Event() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <h2>React Event Handling</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Event;
