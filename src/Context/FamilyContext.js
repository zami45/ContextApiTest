import React from "react";

const FamilyContext = React.createContext({});
export const FamilyProvider = FamilyContext.Provider;

export const FamilyContextConsumer = (Component)=>(props)=>{
    
    return (
        <FamilyContext.Consumer>
        {(familyContext)=>(
            <React.Fragment>
                <Component familyContext = {familyContext}/>
            </React.Fragment>
            
        )}
        </FamilyContext.Consumer>
    )
    
}

