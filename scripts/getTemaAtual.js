import cookie from "cookie";

import temaClaro from '../src/styles/temaClaro'
import temaEscuro from '../src/styles/temaEscuro'

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

const getTemaAtual = (req) => {
  const cookies = parseCookies(req);
  const tema = cookies.tema == 'temaEscuro' ? temaEscuro : temaClaro

  return tema
}

export default getTemaAtual