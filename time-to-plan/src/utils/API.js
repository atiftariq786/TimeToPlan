import axios from "axios";

export default {

    savedStory : function(data){
        return axios.post("https://safe-anchorage-29156.herokuapp.com/api/create-story", data);
    },
    getStories : function(){
        return axios.get(" https://safe-anchorage-29156.herokuapp.com/api/stories");
    },
    deleteStory : function(id){
        return axios.delete("https://safe-anchorage-29156.herokuapp.com/api/story/" + id);
    },
    updateStory : function(id,data){
        return axios.put("http://localhost:3001/api/story/" + id,data);
    },
    savedGoal : function(data){
        return axios.post("http://localhost:3001/api/create-goal", data);
    },
    getGoals : function(){
        return axios.get("http://localhost:3001/api/goals");
    },
    deleteGoal : function(id){
        return axios.delete("http://localhost:3001/api/goals/" + id);
    },
    updateGoal : function(id,data){
        return axios.put("http://localhost:3001/api/goals/" + id,data);
    },
}