import axios from "axios";

export default {

    savedStory : function(data){
        console.log("API Activate")
        console.log(data)
        return axios.post("http://localhost:3001/api/create-story", data);
    },
    getStories : function(){
        return axios.get("http://localhost:3001/api/stories");
    }
}