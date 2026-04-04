let apiURL = import.meta.env.VITE_APP_APIURL;
let endpoint = "/api/services/";


//listing all the document from the database
const list = async() => {
    try{
        let response = await fetch(apiURL + endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }catch(error){
        console.log(error);
        return { success: false, message: error.message || 'Request failed' };
    }
}

//adding a new document to the database
const create = async (item) => {
    try{
        let response = await fetch(apiURL+ endpoint,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return await response.json();
    }catch(error){
        console.log(error);
        return { success: false, message: error.message || 'Request failed' };
    }
}

//updating a document in the database
const update = async (item, id) =>{
    try{
        let response = await fetch(apiURL + endpoint + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return await response.json();
    }catch(error){
        console.log(error);
        return { success: false, message: error.message || 'Request failed' };
    }
}

//removing a document from the database
const remove = async (id) => {
    try{
        let response = await fetch(apiURL + endpoint + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }catch(error){
        console.log(error);
        return { success: false, message: error.message || 'Request failed' };
    }
}

//getting one document from the database
const getOne = async (item, id) => {
    try{
        let response = await fetch(apiURL + endpoint + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }catch(error){
        console.log(error);
        return { success: false, message: error.message || 'Request failed' };
    }
}

export { list, create, update, remove, getOne };