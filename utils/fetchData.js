import axios from "axios";
import { cookies } from "next/headers";

export async function fetchData(url, token, method, data) {
  const config = {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  };

  let response;

  if (method === "GET") {
    return await axios
      .get(url, config)
      .then((response) => {
        return {
          status: response.status,
          data: response.data,
        };
      })
      .catch((err) => {
        if (err.response.status === 401) {
          cookies().delete("_token");
        }
        return {
          status: err.response.status,
          data: err.response.data || { status: err.response.status },
        };
      });
  } else if (method === "POST") {
    return await axios
      .post(url, data, config)
      .then((response) => {
        return {
          status: response?.status,
          data: response?.data,
        };
      })
      .catch((err) => {
        if (err.response.status === 401) {
          cookies().delete("_token");
        }
        return {
          status: err.response.status,
          data: err.response.data || { status: err.response.status },
        };
      });
  }

  return response;
}
