import axios from "axios";
import { PORT, SERVER_IP } from "./server-config";

export async function login(login: string, pass: string) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/login`, {
    log: login,
    pas: pass
  });
}

login("Yaniddze", "123123").then(res1 => {
  console.log(res1.data);
});
