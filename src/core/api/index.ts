import axios from "axios";
import { PORT, SERVER_IP } from "./server-config";
import { as } from "pg-promise";
import { TIMEOUT } from "dns";

export async function login(login: string, pass: string) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/login`, {
    log: login,
    pas: pass
  });
}

export async function register(
  login: string,
  pass: string,
  name: string,
  cou: string,
  cit: string,
  str: string,
  house: string,
  indd: string
) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/register`, {
    log: login,
    pas: pass,
    nam: name,
    cu: cou,
    ct: cit,
    st: str,
    hou: house,
    ind: indd
  });
}

export async function getuserbytoken(token: string) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/login`, {
    tok: token
  });
}

export async function usercheck(login: string) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/usercheck`, {
    log: login
  });
}

export async function add_category(tok: string, tii: string, mcic: number) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/addcategory`, {
    token: tok,
    tit: tii,
    mci: mcic
  });
}

export async function add_main_category(tok: string, tii: string) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/addmaincategory`, {
    token: tok,
    tit: tii
  });
}

export async function add_product(
  tok: string,
  abou: string,
  tii: string,
  pr: number
) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/addproduct`, {
    token: tok,
    abo: abou,
    tit: tii,
    pri: pr
  });
}

export async function add_sale(tok: string, tii: string, pr: number) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/addsale`, {
    token: tok,
    tit: tii,
    per: pr
  });
}

export async function addcattoproduct(token: string, cid: number, pid: number) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/addcategorytoproduct`, {
    tok: token,
    c_id: cid,
    p_id: pid
  });
}

export async function addtowish(token: string, pid: number) {
  return await axios.post(`http://${SERVER_IP}:${PORT}/addtowish`, {
    tok: token,
    p_id: pid
  });
}

// add_main_category("20b3c1336564e9ad4ce321005eee809a", "Бас гитары").then(
//   res1 => {
//     console.log(res1.data);
//   }
// );

// add_product(
//   "20b3c1336564e9ad4ce321005eee809a",
//   "Легенда среди акустических гитар",
//   "Gibson L-48 (1963)",
//   50000
// ).then(res1 => {
//   console.log(res1.data);
// });

addcattoproduct("20b3c1336564e9ad4ce321005eee809a", 2, 2).then(res1 => {
  console.log(res1.data);
});
