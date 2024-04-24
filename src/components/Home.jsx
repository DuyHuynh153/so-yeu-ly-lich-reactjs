import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tinh, setTinh] = useState("");
  const [tinhID, setTinhID] = useState("");

  const location = useLocation();

  const [formData, setFormData] = useState(null);

  // const { data } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
        const response = await fetch("https://esgoo.net/api-tinhthanh/4/0.htm");
        const data = await response.json();
        setMyData(data.data);
        setLoading(false);
        console.log("your data 3: ", data.data[0].data2[0].data3);
      } catch (err) {
        if (err.code === "AbortError") {
          console.log("AbortErro");
          setLoading(false);
        } else {
          console.log("Error: ", err);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.state && location.state.data) {
      setFormData(location.state.data);
      console.log("Form data received:", location.state.data);
    }
  }, [location.state]);

  const handleChangeTinh = (e) => {
    const select_tinh_id = e.target.value;
    const select_tinh = myData.find((data) => data.id === select_tinh_id);
    if (select_tinh) {
      setTinh(select_tinh.full_name);
      setTinhID(select_tinh_id - 1);
      console.log("tinh id", select_tinh_id);
    }
  };

  return (
    <div>
      <div>
        <h1>this is home page</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <select onChange={handleChangeTinh}>
            {myData.map((data, index) => (
              <option key={index} value={data.id}>
                {data.full_name}
              </option>
            ))}
          </select>
        )}

        {tinh ? <p>{tinh}</p> : <p>Chọn tỉnh</p>}

        {myData.length > 0 &&
        tinhID !== "" &&
        myData[parseInt(tinhID)].data2 ? (
          <select>
            {myData[parseInt(tinhID)].data2.map((data, index) => (
              <option key={index} value={data.id}>
                {data.full_name}
              </option>
            ))}
          </select>
        ) : (
          <p>No data yet</p>
        )}
      </div>
      <div>
        <h1>This is the home page</h1>
        {formData && (
          <div>
            <h2>Thông Tin Cá Nhân</h2>
            {formData.selfImagePictureUrl && (
              <img
                src={formData.selfImagePictureUrl}
                alt="Self"
                style={{ maxWidth: "200px" }}
              />
            )}
            <p>
              <strong>Họ:</strong> {formData.personalInputs.self_firstName}
            </p>
            <p>
              <strong>Tên:</strong> {formData.personalInputs.self_lastName}
            </p>
            <p>
              <strong>Tuổi:</strong> {formData.personalInputs.self_age}
            </p>
            <p>
              <strong>CCCD:</strong> {formData.personalInputs.self_cccd}
            </p>
            <p>
              <strong>Dân Tộc:</strong> {formData.personalInputs.self_danToc}
            </p>
            <p>
              <strong>Tôn Giáo:</strong> {formData.personalInputs.self_tonGiao}
            </p>
            <p>
              <strong>Email:</strong> {formData.personalInputs.self_email}
            </p>
            <p>
              <strong>Ngày Sinh:</strong> {formData.selfDateOfBirth}
            </p>
            <p>
              <strong>Địa Chỉ Cá Nhân:</strong> {formData.personalAddress.tinh},{" "}
              {formData.personalAddress.huyen}, {formData.personalAddress.xa}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
