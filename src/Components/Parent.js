import React from 'react';
import Child from "./Child";
import Child2 from "./Child2";
import { GrandParentContextConsumer } from "../Context/GrandParentContext";
import { ParentProvider } from "../Context/ParentContext";

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parentname : 'Initial'
        }
    }

    changeparentname (){
        this.setState({parentname : this.state.parentname === 'Initial' ? 'Final' : 'Initial'})
    }
    render(){
        const ChildOne = GrandParentContextConsumer(Child,['updatefirstname','updateboth'])
        const ChildTwo = GrandParentContextConsumer(Child2,['updatelastname'])
        return (
            <ParentProvider value ={{
                changeparentname : this.changeparentname.bind(this)
            }}>
            <div>
                <h1>Parent</h1>
                <h4>{'Parent name : '+ this.state.parentname}</h4>
                <ChildOne hi='hi'/>
                <ChildTwo />
            </div>
            </ParentProvider>
        );
    }
}

export default Parent;