import React from "react"

class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count:0,
        }
        console.log("Constructor is called for " + props.name);
    }
    componentDidMount(){
        console.log("ComponentDidMount called for " + this.props.name);
    }
    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        console.log("Component rendered for " + name);
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
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @akshaymarch07</h3>
            </div>
        )
    }
}

export default UserClass;