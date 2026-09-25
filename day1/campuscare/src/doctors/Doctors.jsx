// import { useState } from "react";
// import useFetch from "../hooks/useFetch";
// import DoctorCard from "./DoctorCard";

// function Doctors() {
//   const {
//     data: doctors,
//     loading,
//     error,
//   } = useFetch("/doctors.json");

//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("All");

//   if (loading) {
//     return <p>Loading doctors...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   if (!doctors || doctors.length === 0) {
//     return <p>No doctors found.</p>;
//   }

//   const departments = [
//     "All",
//     ...new Set(
//       doctors.map((doctor) => doctor.department)
//     ),
//   ];

//   const filteredDoctors = doctors.filter(
//     (doctor) => {
//       const matchesSearch =
//         doctor.name
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         doctor.department
//           .toLowerCase()
//           .includes(search.toLowerCase());

//       const matchesDepartment =
//         department === "All" ||
//         doctor.department === department;

//       return (
//         matchesSearch &&
//         matchesDepartment
//       );
//     }
//   );

//   return (
//     <div>
//       <h2>Doctors</h2>

//       <input
//         type="text"
//         placeholder="Search by name or department"
//         value={search}
//         onChange={(event) =>
//           setSearch(event.target.value)
//         }
//       />

//       <br />
//       <br />

//       <select
//         value={department}
//         onChange={(event) =>
//           setDepartment(event.target.value)
//         }
//       >
//         {departments.map((item) => (
//           <option key={item} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>

//       <br />
//       <br />

//       {filteredDoctors.length === 0 ? (
//         <p>No doctors match your search.</p>
//       ) : (
//         filteredDoctors.map((doctor) => (
//           <DoctorCard
//             key={doctor.id}
//             doctor={doctor}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default Doctors;
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import DepartmentFilter from "./DepartmentFilter";
import DoctorList from "./DoctorList";

function Doctors() {
  const {
    data: doctors,
    loading,
    error,
  } = useFetch("/doctors.json");

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  if (loading) {
    return <p>Loading doctors...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!doctors || doctors.length === 0) {
    return <p>No doctors found.</p>;
  }

  const filteredDoctors = doctors.filter(
    (doctor) => {
      const matchesSearch =
        doctor.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        doctor.department
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" ||
        doctor.department === department;

      return (
        matchesSearch &&
        matchesDepartment
      );
    }
  );

  return (
    <div>
      <h2>Doctors</h2>

      <input
        type="text"
        placeholder="Search by name or department"
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <br />
      <br />

      <DepartmentFilter
        department={department}
        setDepartment={setDepartment}
      />

      <br />
      <br />

      {filteredDoctors.length === 0 ? (
        <p>No doctors match your search.</p>
      ) : (
        <DoctorList
          doctors={filteredDoctors}
        />
      )}
    </div>
  );
}

export default Doctors;