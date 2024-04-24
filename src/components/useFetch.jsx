import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then((res) => {
      console.log(res);
    });
  });
};

export default useFetch;
