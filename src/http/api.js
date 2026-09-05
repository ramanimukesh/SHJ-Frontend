import axios from "axios";

// Override with REACT_APP_API_URL when the backend is not on localhost.
const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * POST a contact enquiry.
 * The backend requires name and email (STL-Backend src/model/contact.js), so
 * the payload has to actually be sent — these args were previously dropped,
 * which made every submission fail with a 500.
 */
export const userContact = ({ name, email, message }) =>
  client.post("/userContact", { name, email, message });

export const getContact = () => client.get("/getcontact");

export default client;
