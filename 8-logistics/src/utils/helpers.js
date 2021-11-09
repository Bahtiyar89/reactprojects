import moment from "moment";

export function momentToStringDDMMYYYY(momentVal) {
  return momentVal ? moment(momentVal).format("DD.MM.YYYY") : "";
}

export function stringDDMMYYYYToMoment(stringVal) {
  return stringVal ? moment(stringVal, "DD.MM.YYYY").toDate() : "";
}

export const isAuthonticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) {
    return true; // JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const isSuperAdmin = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) {
    const user = JSON.parse(localStorage.getItem("user"));
    const { authtype } = user;
    if (authtype === "superadmin") {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

export const isAdmin = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("token")) {
    const user = JSON.parse(localStorage.getItem("user"));
    const { authtype } = user;

    if (authtype === "admin") {
      return true;
    }
    return false;
  } else {
    return false;
  }
};
