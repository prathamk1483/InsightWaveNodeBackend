import axios from "axios";

const axiosReq = async (requestTo, data) => {
    var resdata ;
    const response = await axios.post(`https://insightwavemainbackend-production.up.railway.app/${requestTo}`, data);
    resdata = response.data;

    return resdata;
};

export {axiosReq};
