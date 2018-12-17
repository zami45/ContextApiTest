import React from "react";

const GrandParentContext = React.createContext({});
export const GrandParentProvider = GrandParentContext.Provider;

export const GrandParentContextConsumer = (Component, funcList) => (props) => {

    return (

        <GrandParentContext.Consumer>
            {(grandParentContext) => {
                
                    const grandparentobj = {};
                    funcList.forEach(elem => grandparentobj[elem] = grandParentContext[elem])
                    return (
                        <React.Fragment>
                            <Component grandParentContext={grandparentobj} {...props} />
                        </React.Fragment>
                    )


               }
            }
        </GrandParentContext.Consumer>
    )

}

