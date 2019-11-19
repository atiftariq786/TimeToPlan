import axios from "axios";

export default {

    savedStory : function(data){
        return axios.post("https://jsonplaceholder.typicode.com/posts", data);
    }
}