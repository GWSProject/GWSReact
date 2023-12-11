//Imports
import axios from "axios";

//Api Routes

//SoftSkills
export const softResource = "/softskills";
//HardSkills
export const hardResource = "/hardskills";
//LoginSkills
export const loginResource = "/login";


const myIp = "localhost";
const apiPort = "8080";
export const localApiUrl = `http://${myIp}:${apiPort}`;
const externalApiUrl = null;

const api = axios.create({
  baseURL: localApiUrl,
});

export default api;