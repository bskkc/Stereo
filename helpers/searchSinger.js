import axios from "axios";

const searchSinger = ({ searchQuery }) => {
    const apiUrl = `https://saavn.dev/search/artists?query=${searchQuery}`;

    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

export default searchSinger;