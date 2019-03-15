import React, { Component } from 'react';

import checkmark from "checkmark.svg";

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
            <div key={tile.id} className={'tile module two-column-grid '+ tile.class} onClick={() => {this.decideClick(tile)}}>
                {tile.complete && <div className="module-done"><img className="checkmark" src= { checkmark } /></div>}
                <div><h4 className="small-margin-bottom">Module</h4><h3>{tile.name}</h3></div>
                <img src={ tile.icon } />
            </div>
        )
    }
}
export default SkillTile;
