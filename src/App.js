import { useState } from "react";

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [type, setType] = useState("Brak");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const onAdd = () => {

    if(/^\d+$/.test(phoneNumber)) {
      setError("");
    } else {
      setError("Nieprawidłowy numer telefonu")
      return;
    }
    const customer = {
      type: type,
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber
    }
    setCustomers(customers.concat(customer));
    setType("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  }

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Brak">Brak</option>
        <option value="Osoba fizyczna">Osoba fizyczna</option>
        <option value="Firma">Firma</option>
      </select>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button onClick={() => onAdd()}>Dodaj</button>
      <p>{error}</p>
      {customers.length === 0 && <p>Brak klientów</p>}
      {customers.length > 0 && <div>
        <h2>Klienci</h2>
        <ul>
          {customers.map((customer, i) => <li key={i}>
            <p>{customer.type}</p>
            <p>Imie: {customer.firstName}</p>
            <p>Nazwisko: {customer.lastName}</p>
            <p>Telefon: {customer.phone}</p>
          </li>)}
        </ul>
      </div>}
    </div>
  );
}