import { jwtDecode } from "jwt-decode"

const authenticate = (token, cb) => {
    // console.log(token);
    if (typeof window !== "undefined") {
        sessionStorage.setItem("token", token);

        try {
            const payload = jwtDecode(token);
            const derivedUsername =
                payload.username ||
                payload.preferred_username ||
                payload.unique_name ||
                payload.email ||
                payload.name ||
                payload.sub ||
                "";

            if (derivedUsername) {
                sessionStorage.setItem("username", String(derivedUsername));
            }
        } catch (error) {
            console.log(error);
        }

        window.dispatchEvent(new Event("auth-changed"));
    }
    cb();
}


const getToken = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return sessionStorage.getItem("token");
}

const getUsername = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return sessionStorage.getItem("username");
}

const setUserEmail = (email) => {
    if (typeof window !== "undefined") {
        if (email) {
            sessionStorage.setItem("userEmail", String(email));
        } else {
            sessionStorage.removeItem("userEmail");
        }
        window.dispatchEvent(new Event("auth-changed"));
    }
}

const getUserEmail = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return sessionStorage.getItem("userEmail");
}

const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return !!sessionStorage.getItem('token');
}

const clearJWT = ()=>{
  if (typeof window !== "undefined") {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
        sessionStorage.removeItem('userEmail');
        window.dispatchEvent(new Event("auth-changed"));
  }
}

export { authenticate, getToken, isAuthenticated, getUsername, setUserEmail, getUserEmail, clearJWT }