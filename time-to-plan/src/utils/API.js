import axios from "axios";

axios.defaults.withCredentials = true;

export default {

    savedStory : function(data){
        return axios.post("https://safe-anchorage-29156.herokuapp.com/api/create-story", data);
        //https://safe-anchorage-29156.herokuapp.com

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
        return axios.post("https://safe-anchorage-29156.herokuapp.com/auth/register/", data);
    },
    savedUserLogin : function(data){
        return axios.post("https://safe-anchorage-29156.herokuapp.com/auth/login/", data);
    },
    getLogout : function(){
        return axios.get("https://safe-anchorage-29156.herokuapp.com/auth/logout/");
    },
    
}