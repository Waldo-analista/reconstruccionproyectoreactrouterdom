import axios from "axios";

export const urlAPI = "https://apicursoreactrouterdom.onrender.com";

export const getDataFromAPI = async (url, setFunction) => {
  try {
    const response = await axios.get(url);
    setFunction(response.data);
  } catch (error) {
    console.log("Error de get");
    throw new Error("Ha ocurrido un error de get 404");
  }
};
