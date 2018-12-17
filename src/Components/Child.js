import React from 'react';
import { GrandParentContextConsumer } from "../Context/GrandParentContext";
import { ParentContextConsumer } from "../Context/ParentContext";
import Child3 from "./Child3";

class Child extends React.Component {
    
    render() {
        const {grandParentContext} = this.props
        const ChildThree = ParentContextConsumer(GrandParentContextConsumer(Child3,['updateboth']),['changeparentname'])

        return (
             <div>
                <h1>Child1 Says {this.props.hi}</h1>
                <ChildThree/>
                <br/>
                <p>Child 1 functions</p>
                <input type='button' onClick={grandParentContext.updatefirstname} value='change FIRST name' />
                <input type='button' onClick={grandParentContext.updateboth} value='change BOTH' />
             </div>
        );
    }
}

export default Child;