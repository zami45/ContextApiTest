import React from 'react';
import {FamilyConsumer} from "./Context";

class Child extends React.Component{

    render(){
        return (
            <FamilyConsumer>
            {(context) => (
               <React.Fragment>
                   <p>{context.state.firstname +' '+ context.state.lastname}</p>
                   <p>{context.state.lastname}</p>
               </React.Fragment>
           )}
            </FamilyConsumer>
        );
    }
}

export default Child;