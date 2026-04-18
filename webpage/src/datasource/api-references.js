let apiURL = import.meta.env.VITE_APP_APIURL;
let endpoint = "/api/references/";

const getAuthHeaders = () => {
    const token = sessionStorage.getItem('token');

    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
};

// listing all documents from the database
const list = async () => {
    try {
        let response = await fetch(apiURL + endpoint, {
            method: "GET",
            headers: getAuthHeaders(),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message || "Request failed" };
    }
};

// adding a new document to the database
const create = async (item) => {
    try {
        let response = await fetch(apiURL + endpoint, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(item),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message || "Request failed" };
    }
};

// updating a document in the database
const update = async (item, id) => {
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: "PUT",
            headers: getAuthHeaders(),
            body: JSON.stringify(item),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message || "Request failed" };
    }
};

// removing a document from the database
const remove = async (id) => {
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: "DELETE",
            headers: getAuthHeaders(),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message || "Request failed" };
    }
};

// getting one document from the database
const getOne = async (item, id) => {
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: "GET",
            headers: getAuthHeaders(),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message || "Request failed" };
    }
};

export { list, create, update, remove, getOne };
