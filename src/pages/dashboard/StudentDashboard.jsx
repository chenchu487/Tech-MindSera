function StudentDashboard({ user }) {
  return (
    <div className="dash-card glass">
      <h2>🎓 Student Dashboard</h2>

      <p><strong>Purpose:</strong> {user.purpose}</p>

      <ul>
        <li>Application: {user.status.application}</li>
        <li>SOP: {user.status.sop}</li>
        <li>Visa: {user.status.visa}</li>
      </ul>
    </div>
  );
}

export default StudentDashboard;
