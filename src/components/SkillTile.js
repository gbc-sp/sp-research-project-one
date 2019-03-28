import React, { Component } from 'react';
import { Link } from "react-router-dom";

import checkmark from "icons/checkmark.svg";
import lock from "icons/locked.svg";

class SkillTile extends Component {

    state = {
        tile: this.props.tile,
        lastCompleted: false
    }

    constructor(props) {
        super(props);
    }

    decideClick(tile) {
        let func;

        if (tile.complete) {
            //tips
            func = "this.popTips";
        }
        else if (!tile.complete && tile.comps == 4) {
            //create pp
            func = "redirect(/portfolio/create)";
        }
        else if (!tile.complete && (tile.comps < 0 && tile.comps > 4)) {
            //continue module
            func = "redirect(/module)";
        }
        else if (!tile.complete && tile.comps == 0 && (tile.completed != this.state.lastCompleted)) {
            //start module
            func = "redirect(/module)";
        }
        else {
            //disabled
            func = null;
        }

        this.setState({lastCompleted: tile.completed});
        
        return func;
    }

    render() {
        return (
            <div className={`tile module skill-grid ${this.props.tile.class} ${(this.props.tile.complete ? "complete" : (!this.props.tile.comp) && "disabled")}`}>
                <div>
                <div>
                    <h6 className="small-margin-bottom">Skill</h6>
                    <h1>{this.props.tile.name}</h1>
                </div>
                <div className="module-done"> {this.props.tile.complete ? <img className="checkmark" alt="complete" src={ checkmark }/> : (!this.props.tile.comp) && <img alt="locked" src={ lock } />} </div>
                </div>
                <img className="skill-icon" src={ this.props.tile.icon }/>
                <div className="two-column-grid align-center">
                <div className="skill-progress">
                    <h6>Progress</h6>
                    <div className="prog-bar">
                    {/* Needs logic */}
                        <h3 className="complete">1</h3>
                        <h3 className="complete">2</h3>
                        <h3 className="active">3</h3>
                        <h3>4</h3>
                    </div>
                </div>
                <Link to="/skill" className="button">Go</Link>
                </div>
            </div>
        )
    }
}
export default SkillTile;
