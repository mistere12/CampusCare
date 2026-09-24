import DoctorCard from "./DoctorCard";

function DoctorList({ doctors }) {
  return (
    <div>
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
        />
      ))}
    </div>
  );
}

export default DoctorList;