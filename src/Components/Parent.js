import React from 'react';
import Child from "./Child";
import Child2 from "./Child2";
import { FamilyContextConsumer } from "../Context/FamilyContext";

class Parent extends React.Component{

    render(){
        const ChildOne = FamilyContextConsumer(Child)
        const ChildTwo = FamilyContextConsumer(Child2)
        return (
            <div>
            <ChildOne />
            <ChildTwo />
            </div>

        );
    }
}

export default Parent;