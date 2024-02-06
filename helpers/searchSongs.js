import axios from "axios";

const searchSongs = ({ searchQuery, page, limit }) => {
    const apiUrl = `https://saavn.dev/search/songs?query=${searchQuery}&page=${page}&limit=${limit}`;

    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

export default searchSongs;