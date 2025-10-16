import axios from "axios";

export const FetchData = async (url) => {
  try {
    let res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    // let val = await res.data;
    return res;
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};
