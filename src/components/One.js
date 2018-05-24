import React from 'react';

class One extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            num: 0
        }
    }
    handleCilck = ()=>{
        this.setState({
            num: ++this.state.num
        })
        console.log( this.state.num )
    }
    render() {
        return (
            <div>这是组件一
                <input type="button" onClick={this.handleCilck} value="add"/>
            </div>
        )
    }
}

export default One;