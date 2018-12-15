import React from 'react';
import {FamilyProvider} from "../Context/FamilyContext";
import Parent from './Parent';

class GrandParent extends React.Component{
    constructor(props){
       super(props);
       this.state={
           firstname : "al zami",
           lastname : "rahman"
       }
    }

    render(){
        return (
            <FamilyProvider 
                 value={{
                     state :this.state,
                     updatefirstname : e=>this.setState({firstname : 'soad'})
                     }}>
               <Parent  />
            </FamilyProvider>
            
        );
    }
}

export default GrandParent;