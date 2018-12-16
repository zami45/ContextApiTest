import React from 'react';


class Child extends React.Component {

    render() {
        const {familyContext} = this.props
        return (
            <div>
                <h1>Child 2</h1>
                <p>{familyContext.state.firstname +' '+ familyContext.state.lastname}</p>
                <input type='button' onClick={familyContext.updatelastname} value='change LAST name' />

            </div>

        );
    }
}

export default Child;