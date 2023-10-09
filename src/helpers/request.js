import axios from "axios";

export const request = async (method, url, data = null) => {
    const response = await axios({
        method,
        url,
        ...(data ? {data} : {})
    });
    return response;
};

