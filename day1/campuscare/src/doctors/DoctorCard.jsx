import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="doctor-icon">
        🩺
      </div>

      <h3>{doctor.name}</h3>

      <p>
        <strong>Department:</strong>{" "}
        {doctor.department}
      </p>

      <p>
        <strong>Experience:</strong>{" "}
        {doctor.experience}
      </p>

      <Link
        className="doctor-button"
        to={`/doctors/${doctor.id}`}
      >
        View Details
      </Link>
    </div>
  );
}

export default DoctorCard;