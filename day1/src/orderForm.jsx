import { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validPhone = /^09\d{8}$/.test(form.phone);

  const isValid =
    form.name.trim() !== "" &&
    validPhone &&
    form.area.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    alert("Delivery order submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>TeleBirr Delivery</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="TeleBirr number"
        value={form.phone}
        onChange={handleChange}
      />

      {!validPhone && form.phone !== "" && (
        <p>Enter a valid TeleBirr number: 09XXXXXXXX</p>
      )}

      <input
        type="text"
        name="area"
        placeholder="Delivery area"
        value={form.area}
        onChange={handleChange}
      />

      <button type="submit" disabled={!isValid}>
        Confirm Delivery
      </button>
    </form>
  );
}

export default OrderForm;