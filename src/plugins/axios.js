import axios from "axios";
window.axios = require("axios");
export const adminRoot = "/app";

// SERVER_MODE [localhost, dev, live]
const SERVER_MODE = "live"

/********************************************************************
 * LocalHost Credentials
********************************************************************/
const local_img_baseURL = "http://localhost:8000/storage/";
const local_baseURL = "http://localhost:8000/api/";

/********************************************************************
 * Dev Server Credentials
 ********************************************************************/
const dev_img_baseURL = "https://api-dev.swesshome.com/storage/";
const dev_baseURL = "https://api-dev.swesshome.com/api/";

/********************************************************************
 * Live Server Credentials
 ********************************************************************/
const live_img_baseURL = "https://backend.swesshome.com/storage/";
const live_baseURL = "https://backend.swesshome.com/api/";

export const img_baseUrl = live_img_baseURL;//  (SERVER_MODE=="localhost")? local_img_baseURL: (SERVER_MODE=="dev")? dev_img_baseURL : live_img_baseURL;
axios.defaults.baseURL = (SERVER_MODE=="localhost")? local_baseURL: (SERVER_MODE=="dev")? dev_baseURL : live_baseURL;

// export const img_baseUrl = "http://185.194.124.106:80/storage/";
// axios.defaults.baseURL = "http://185.194.124.106:80/api/";
// export const img_baseUrl = "http://swesshomerealestate.com/";
// axios.defaults.baseURL = "http://swesshomerealestate.com/api/";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("accessToken");
export default { axios };
