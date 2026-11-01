
function Props({ name, course, email, rollNo, college, skills }) {
  return (
    <div className="student-card">
      <h2>Student Profile</h2>

      <h3>{name}</h3>

      <p><b>Roll No:</b> {rollNo}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Course:</b> {course}</p>
      <p><b>College:</b> {college}</p>
      <p><b>Skills:</b> {skills}</p>
    </div>
  );
}

export default Props;
