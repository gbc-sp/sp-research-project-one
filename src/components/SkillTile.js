import React, { Component } from 'react';

import checkmark from "checkmark.svg";
import lock from "locked.svg";

class SkillTile extends Component {

    state = {
        tiles: this.props.tiles,
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
            <div key={tile.id} className={"tile module skill-grid "+ tile.class} onClick={() => {this.decideClick(tile)}}>
                <div>
                <div>
                    <h6 className="small-margin-bottom">Skill</h6>
                    <h1>{tile.name}</h1>
                </div>
                <div className="module-done"> {tile.complete ? <img className="checkmark" src= { checkmark }/> : <img className="checkmark" src= { lock } />} </div>
                </div>
                <img className="skill-icon" src={ tile.icon }/>
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
                <button className="button">Go</button>
                </div>
            </div>
        )
    }
}
export default SkillTile;
