import React from 'react';
import { FamilyContextConsumer } from "../Context/FamilyContext";

class Child extends React.Component {

    render() {
        return (

            <FamilyContextConsumer render ={()=>(
                <div>
                <p>{familyContext.state.firstname +' '+ familyContext.state.lastname}</p>
                <p>{familyContext.state.lastname}</p>
                <input type='button' onClick={familyContext.updatefirstname} value='change first name' />
                </div>
            )}>

            </FamilyContextConsumer>
        );
    }
}

export default Child;