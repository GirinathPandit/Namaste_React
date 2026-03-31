import React from "react"

class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count:0,
        }
        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Default",
            },
        };
        //console.log("Constructor is called for " + props.name);
    }
    async componentDidMount(){
        //console.log("ComponentDidMount called for " + this.props.name);
        const data = await fetch("https://api.github.com/users/GirinathPandit");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
    }
    componentDidUpdate(){
        console.log("ComponentDid Update called");
    }
    componentWillUnmount(){
        console.log("Component unmounted");
    }
    render(){
        //const {name, location} = this.props;
        const {count} = this.state;
        const {name,location,avatar_url} = this.state.userInfo;
        debugger
        //console.log("Component rendered for " + name);
        return(
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>
                    Count Increase.
                </button>
                <img src = {avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @akshaymarch07</h3>
            </div>
            
        )
        
    }
}

export default UserClass;