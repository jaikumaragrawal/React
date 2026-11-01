
import Props from "./props";

function App() {
  return (
    <div>
      <h1>Student Management System</h1>

      <Props
        name="Jai Kumar"
        rollNo="101"
        email="jai@example.com"
        course="React + Next.js"
        college="Kalvium"
        skills="HTML, CSS, JavaScript, React"
      />
    </div>
  );
}

export default App;
