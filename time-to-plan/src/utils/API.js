import axios from "axios";

export default {

    savedStory : function(data){
        console.log("API Activate Story")
        console.log(data)
        return axios.post("http://localhost:3001/api/create-story", data);
    },
    getStories : function(){
        return axios.get("http://localhost:3001/api/stories");
    },
    deleteStory : function(id){
        console.log("delete story activate")
        console.log(id)
        return axios.delete("http://localhost:3001/api/story/" + id);
    },
    savedGoal : function(data){
        console.log("API Activate Goal ")
        console.log(data)
        return axios.post("http://localhost:3001/api/create-goal", data);
    },
    getGoals : function(){
        return axios.get("http://localhost:3001/api/goals");
    },
    deleteGoal : function(id){
        return axios.delete("http://localhost:3001/api/goals/" + id);
    },
    updateGoal : function(data){
        console.log("update goal activate")
        console.log({data})
        return axios.put("http://localhost:3001/api/updateGoals/" + data);
    },
    
}