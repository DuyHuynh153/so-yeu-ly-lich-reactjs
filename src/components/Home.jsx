import React, { useEffect, useState } from "react";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tinh, setTinh] = useState("Chọn tỉnh");
  const abortController = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
        const response = await fetch("https://esgoo.net/api-tinhthanh/4/0.htm");
        const data = await response.json();
        setMyData(data.data);
        setLoading(false);
        console.log("your data: ", data.data);
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

  return (
    <div>
      <h1>this is home page</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <select value={tinh} onChange={(e) => setTinh(e.target.value)}>
          {myData.map((data, index) => (
            <option key={index} value={data.id}>
              {data.full_name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Home;
