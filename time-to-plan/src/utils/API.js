import axios from "axios";

export default {

    savedStory : function(data){
        return axios.post("https://safe-anchorage-29156.herokuapp.com/api/create-story", data);
    },
    getStories : function(){
        return axios.get("https://safe-anchorage-29156.herokuapp.com/api/stories");
    },
    deleteStory : function(id){
        return axios.delete("https://safe-anchorage-29156.herokuapp.com/api/story/" + id);
    },
    updateStory : function(id,data){
        return axios.put("https://safe-anchorage-29156.herokuapp.com/api/story/" + id,data);
    },
    savedGoal : function(data){
        return axios.post("https://safe-anchorage-29156.herokuapp.com/api/create-goal", data);
    },
    getGoals : function(){
        return axios.get("https://safe-anchorage-29156.herokuapp.com/api/goals");
    },
    deleteGoal : function(id){
        return axios.delete("https://safe-anchorage-29156.herokuapp.com/api/goals/" + id);
    },
    updateGoal : function(id,data){
        return axios.put("https://safe-anchorage-29156.herokuapp.com/api/goals/" + id,data);
    },
    savedUserSignUp : function(data){
        console.log("client side signup register data")
        console.log({data})
        return axios.post("http://localhost:3001/api/register/", data);
    },
    
}
//http://localhost:3001/api/goals/