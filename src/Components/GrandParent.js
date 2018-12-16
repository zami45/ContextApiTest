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

    updatefirstname(){
        this.setState({firstname : this.state.firstname === 'soad' ? 'al zami' : 'soad'})
    }
    
    updatelastname(){
        this.setState({lastname: this.state.lastname === 'al-faruq' ? 'rahman' : 'al-faruq'})
    }
    render(){
        return (
            <div >
                <h1>Grandparent</h1>
                <FamilyProvider 
                    value={{
                        state :this.state,
                        updatefirstname :this.updatefirstname.bind(this),
                        updatelastname : this.updatelastname.bind(this)
                        }}>
                <Parent  />
                </FamilyProvider>
            </div>

            
        );
    }
}

export default GrandParent;