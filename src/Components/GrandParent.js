import React from 'react';
import {FamilyProvider} from "./Context";
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
            <FamilyProvider value={{state :this.state}}>
               <Parent  />
            </FamilyProvider>
            
        );
    }
}

export default GrandParent;