import React from 'react';


class Child extends React.Component {

    render() {
        const {familyContext} = this.props
        return (
            <div>
                <h1>Child 2</h1>
                <h3>{familyContext.state.firstname}</h3>
            </div>

        );
    }
}

export default Child;