import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = () => {
  const navigate = useNavigate();
  const address = [
    {
      id: 1,
      name: "tinh",
      value: [
        {
          id: "01",
          name: "Hà Nội",
        },
        {
          id: "02",
          name: "Đà Nẵng",
        },
        {
          id: "03",
          name: "Hồ Chí Minh",
        },
      ],
    },
    {
      id: 2,
      name: "huyen",
      value: [
        {
          id: "01",
          name: "Quận 1",
        },
        {
          id: "02",
          name: "Quận 2",
        },
        {
          id: "03",
          name: "Quận 3",
        },
      ],
    },
    {
      id: 3,
      name: "xa",
      value: [
        {
          id: "01",
          name: "Phường 1",
        },
        {
          id: "02",
          name: "Phường 2",
        },
        {
          id: "03",
          name: "Phường 3",
        },
      ],
    },
  ];

  // personal information
  const [personalInputs, setPersonalInputs] = useState({
    self_firstName: "",
    self_lastName: "",
    self_age: "",
    self_cccd: "",
    self_danToc: "",
    self_tonGiao: "",
    self_email: "",
  });
  const [selfDateOfBirth, setSelfDateOfBirth] = useState("");
  const [selfPicture, setSelfPicture] = useState(null);
  const [selfPicturePreview, setSelfPicturePreview] = useState(null);
  const [selfImagePictureUrl, setSelfImagePictureUrl] = useState("");
  const [personalAddress, setPersonalAddress] = useState({
    tinh: address[0].value[0].name,
    huyen: address[1].value[0].name,
    xa: address[2].value[0].name,
  });

  // todo: parent information

  const handlerOnChangePersonalInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPersonalInputs((values) => ({ ...values, [name]: value }));
  };
  const handlerSelectPicture = (event) => {
    const file = event.target.files[0];
    setSelfPicture(file);
    const imageUrl = URL.createObjectURL(file);
    setSelfImagePictureUrl(imageUrl);

    // Read the file as a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      // Set the data URL as the picture source
      setSelfPicturePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const data = {
      personalInputs,
      personalAddress,
      selfDateOfBirth,
      selfPicture,
      selfImagePictureUrl,
    };
    console.log(data);
    navigate("/", { state: { data } });

    // console.log(data);
  };

  return (
    <form className="personal-info-form" onSubmit={handleSubmitForm}>
      <div>
        <h4>Thông tin cá nhân</h4>
        <label>
          Họ:
          <input
            type="text"
            name="self_firstName"
            value={personalInputs.self_firstName}
            onChange={handlerOnChangePersonalInput}
          />
        </label>
        <label>
          Tên:
          <input
            type="text"
            name="self_lastName"
            value={personalInputs.self_lastName}
            onChange={handlerOnChangePersonalInput}
          />
        </label>

        <label>
          Tuổi:
          <input
            type="number"
            name="self_age"
            value={personalInputs.self_age}
            onChange={handlerOnChangePersonalInput}
          />
        </label>
        <label>
          CCCD:
          <input
            type="text"
            name="self_cccd"
            value={personalInputs.self_cccd}
            onChange={handlerOnChangePersonalInput}
          />
        </label>
        <label>
          Dân Tộc:
          <input
            type="text"
            name="self_danToc"
            value={personalInputs.self_danToc}
            onChange={handlerOnChangePersonalInput}
          />
        </label>
        <label>
          Tôn giáo:
          <input
            type="text"
            name="self_tonGiao"
            value={personalInputs.self_tonGiao}
            onChange={handlerOnChangePersonalInput}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="self_email"
            value={personalInputs.self_email}
            onChange={handlerOnChangePersonalInput}
          />
        </label>
        <label>
          Ngày Sinh:
          <input
            type="date"
            name="selfDateOfBirth"
            value={selfDateOfBirth}
            onChange={(e) => setSelfDateOfBirth(e.target.value)}
          />
        </label>
        <label className="picture">
          Ảnh
          <input type="file" onChange={handlerSelectPicture} />
        </label>
        {selfPicturePreview && (
          <img
            src={selfPicturePreview}
            alt="Preview"
            style={{ maxWidth: "400px", marginTop: "10px" }}
          />
        )}
        <label>Địa Chỉ Cá nhân</label>

        {/* Tinh (Province) Dropdown */}
        <select
          value={personalAddress.tinh}
          onChange={(e) =>
            setPersonalAddress({ ...personalAddress, tinh: e.target.value })
          }
        >
          {address[0].value.map((tinh) => (
            <option key={tinh.id} value={tinh.name}>
              {tinh.name}
            </option>
          ))}
        </select>

        {/* Huyen (District) Dropdown */}
        <select
          value={personalAddress.huyen}
          onChange={(e) =>
            setPersonalAddress({
              ...personalAddress,
              huyen: e.target.value,
            })
          }
        >
          {address[1].value.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {/* Xa (Ward) Dropdown */}
        <select
          value={personalAddress.xa}
          onChange={(e) =>
            setPersonalAddress({ ...personalAddress, xa: e.target.value })
          }
        >
          {address[2].value.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4>Thông tin người thân</h4>
        <h5>Thông tin Cha</h5>
        <label>
          Nhập tên cha
          <input type="text" />
        </label>
        <label>
          Nhập tuổi cha
          <input type="number" />
        </label>
        <label>
          Nhập CCCD cha
          <input type="text" />
        </label>
        <label>
          Nhập địa chỉ
          <input type="text" />
        </label>

        <h5>Thông tin mẹ</h5>
        <label>
          Nhập tên mẹ
          <input type="text" />
        </label>
        <label>
          Nhập tuổi mẹ
          <input type="number" />
        </label>
        <label>
          Nhập CCCD mẹ
          <input type="text" />
        </label>
        <label>
          Nhập địa chỉ
          <input type="text" />
        </label>
      </div>

      <input type="submit" />
      {/*<p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
      <p>{district}</p>
      <p>{village}</p>
      <p>{town}</p>
      <p>{email}</p> */}
    </form>
  );
};

export default MainForm;
