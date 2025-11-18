export function isLogged() {
    const t = localStorage.getItem("token");
    return Boolean(t);
  }
  