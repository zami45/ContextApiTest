import React from 'react';
import {GrandParentProvider} from "../Context/GrandParentContext";
import Parent from './Parent';

class GrandParent extends React.Component{
    constructor(props){
       super(props);
       this.state={
           firstname : "Mr.",
           lastname : "ABC"
       }
    }

    updatefirstname(){
        this.setState({firstname : this.state.firstname === 'Mrs.' ? 'Mr.' : 'Mrs.'})
    }
    
    updatelastname(){
        this.setState({lastname: this.state.lastname === 'XYZ' ? 'ABC' : 'XYZ'})
    }

    updateboth(){
        this.setState({firstname: 'MyFirstName',lastname : 'MyLastName'})
    }
    render(){
        return (
            <div >
                <h1>Grandparent</h1>
                <p>{this.state.firstname +' '+ this.state.lastname}</p>
                <GrandParentProvider 
                    value={{
                        state :this.state,
                        updatefirstname :this.updatefirstname.bind(this),
                        updatelastname : this.updatelastname.bind(this),
                        updateboth : this.updateboth.bind(this)
                        }}>
                <Parent  />
                </GrandParentProvider>
            </div>

            
        );
    }
}

export default GrandParent;