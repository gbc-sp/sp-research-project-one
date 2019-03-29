import React, { Component } from 'react';

class SkillProgress extends Component {

    state = {
        prog: this.props.compProgress,
        complete: this.props.complete,
        pos: this.props.pos
    }

    constructor(props) {
        super(props);   
    }
    
    //if product is less than 1 or skill complete, then complete; if equal to 1 & skill not complete, then active; if greater than 1, nothing;

    render() {
        return (
            <h3 className={(this.state.pos/this.state.prog < 1 || this.state.complete) ? "complete" : (this.state.pos/this.state.prog == 1 && !this.state.complete) ? "active" : undefined }>{this.state.pos}</h3>
        )
    }
}
export default SkillProgress;
