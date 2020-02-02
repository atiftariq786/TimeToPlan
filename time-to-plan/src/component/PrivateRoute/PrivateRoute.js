import React from "react";
import {Route, Redirect} from "react-router-dom";

const privateRoute = ({component: Component, ...rest}) => {

    return(
        <Route
        {...rest}
        render = {(props) => {
                console.log("inside private route");
                console.log(rest.isLogin)
            return rest.isLogin === "true" ? <Component {...props}/> : <Redirect to ="/login/" />}
        }>
        
        </Route>
    )
}
export default privateRoute;