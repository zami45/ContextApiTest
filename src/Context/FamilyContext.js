import React from "react";

const FamilyContext = React.createContext({});
export const FamilyProvider = FamilyContext.Provider;

export class FamilyContextConsumer extends React.Component {
    render(){
        return (
            <FamilyContext.Consumer>
            {(familyContext)=>(
                <React.Fragment>
                    {this.props.render()}
                </React.Fragment>
                
            )}
            </FamilyContext.Consumer>
        )
    }
}

