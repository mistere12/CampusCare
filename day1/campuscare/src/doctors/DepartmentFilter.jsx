function DepartmentFilter({ department, setDepartment }) {
  return (
    <div>
      <label htmlFor="department">
        Filter by department:
      </label>

      <select
        id="department"
        value={department}
        onChange={(event) =>
          setDepartment(event.target.value)
        }
      >
        <option value="All">All Departments</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Pediatrics">Pediatrics</option>
        <option value="Dermatology">Dermatology</option>
        <option value="General Medicine">
          General Medicine
        </option>
      </select>
    </div>
  );
}
