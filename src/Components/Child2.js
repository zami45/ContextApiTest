import React from 'react';


class Child2 extends React.Component {

    render() {
        const {grandParentContext} = this.props
        return (
            <div>
                <h1>Child 2</h1>
                
                <input type='button' onClick={grandParentContext.updatelastname} value='change LAST name' />
                <input type='button' onClick={grandParentContext.updateboth} value='change BOTH' />
            </div>

        );
    }
}

export default Child2;