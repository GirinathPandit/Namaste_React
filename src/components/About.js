import React from "react";
import User from "./User";  
import UserClass from "./UserClass";

/*const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series.</h2>*/
            {/*<User name = {"Girinath Function"} location = {"Kulgachia Function"}/>*/}
            /*<UserClass name = {"First Class"} location = {"Kulgachia Class"}/>
            <UserClass name = {"Second Class"} location = {"Kulgachia Class"}/>
        </div>
    );
};*/

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }
    render(){
       console.log("Parent class rendered") 
        return(
                <div>
                    <h1>About</h1>
                    <h2>This is Namaste React Web Series.</h2>
                    {/*<User name = {"Girinath Function"} location = {"Kulgachia Function"}/>*/}
                    <UserClass name = {"First Class"} location = {"Kulgachia Class"}/>
                    <UserClass name = {"Second Class"} location = {"Kulgachia Class"}/>
                </div>
            ); 
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount called");
    }
}

export default About;