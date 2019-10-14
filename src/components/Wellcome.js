import React, {Component} from 'react'

class Wellcome extends Component {
    something(cvalue){
        alert(cvalue)
    }
    render(){
        return (
            <div>
                <h1>Class Component {this.props.cname}</h1>
                <button onClick={this.something.bind(this,"class output")}>Class</button>
            </div>
        )
        
    }
}

export default Wellcome