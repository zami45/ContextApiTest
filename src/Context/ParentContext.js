import React from "react";

const ParentContext = React.createContext({});
export const ParentProvider = ParentContext.Provider;

export const ParentContextConsumer = (Component, funcList) => (props) => {

    return (

        <ParentContext.Consumer>
            {(parentContext) => {
                
                    const parentobj = {};
                    funcList.forEach(elem => parentobj[elem] = parentContext[elem])
                    return (
                        <React.Fragment>
                            <Component parentContext={parentobj} {...props} />
                        </React.Fragment>
                    )

               }
            }
        </ParentContext.Consumer>
    )

}

