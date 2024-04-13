import React, { useState } from "react";

const MainForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState([]);
  const [email, setEmail] = useState("");

  // Define options for address components
  const [districtOptions, setDistrictOptions] = useState([
    "Tỉnh 1",
    "Tỉnh 2",
    "Tỉnh 3",
  ]);
  const [villageOptions, setVillageOptions] = useState([
    "Huyện 1",
    "Huyện 2",
    "Huyên 3",
  ]);
  const [townOptions, setTownOptions] = useState(["Xã 1", "Xã 2", "Xã 3"]);

  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [town, setTown] = useState("");
  return (
    <form className="personal-info-form">
      <label>
        Họ:
        <input
          type="text"
          name="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Tên:
        <input
          type="text"
          name="name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <label>
        Tuổi:
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Địa chỉ: <br />
        <select onChange={(e) => setDistrict(e.target.value)}>
          <option value="">Chọn tỉnh</option>
          {districtOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select onChange={(e) => setVillage(e.target.value)}>
          <option value="">Chọn Huyện</option>
          {villageOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select onChange={(e) => setTown(e.target.value)}>
          <option value="">Chọn Xã/Phường</option>
          {townOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
      <p>{district}</p>
      <p>{village}</p>
      <p>{town}</p>
      <p>{email}</p>
    </form>
  );
};

export default MainForm;
