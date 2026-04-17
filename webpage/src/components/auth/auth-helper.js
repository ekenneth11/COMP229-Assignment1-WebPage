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
    }
    cb();
}

const getCurrentUserIdentity = () => {
    if (typeof window === "undefined") {
        return {
            username: "",
            email: "",
            uid: "",
            userId: "",
            ownerCandidates: []
        };
    }

    const token = sessionStorage.getItem("token");
    const storedUsername = sessionStorage.getItem("username") || "";

    if (!token) {
        return {
            username: storedUsername,
            email: "",
            uid: "",
            userId: "",
            ownerCandidates: storedUsername ? [storedUsername.toLowerCase()] : []
        };
    }

    try {
        const payload = jwtDecode(token);
        const username = String(
            storedUsername ||
            payload.username ||
            payload.preferred_username ||
            payload.unique_name ||
            payload.name ||
            ""
        );
        const email = String(payload.email || "");
        const uid = String(payload.uid || payload.sub || "");
        const userId = String(payload.userId || payload.id || "");

        const ownerCandidates = [username, email, uid, userId]
            .filter(Boolean)
            .map((value) => value.toLowerCase());

        return { username, email, uid, userId, ownerCandidates };
    } catch (error) {
        console.log(error);
        return {
            username: storedUsername,
            email: "",
            uid: "",
            userId: "",
            ownerCandidates: storedUsername ? [storedUsername.toLowerCase()] : []
        };
    }
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
  }
}

export { authenticate, getToken, isAuthenticated, getUsername, clearJWT, getCurrentUserIdentity }