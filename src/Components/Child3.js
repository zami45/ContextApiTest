import React from 'react';


class Child3 extends React.Component {

    render() {
        console.log(this.props)
        const {parentContext} = this.props
        
        const {grandParentContext} = this.props
        return (
             <div>

                <h2>Child 3 : Child of Child1</h2>
                <p>Child 3 functions</p>
                <input type='button' onClick={parentContext.changeparentname} value='change Parent name' />
                <input type='button' onClick={grandParentContext.updateboth} value='Child 3 update Grand Parent fname & lname' />
             </div>
        );
    }
}

export default Child3;