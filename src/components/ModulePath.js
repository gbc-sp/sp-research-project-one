import React, { Component } from 'react';

import checkmark from "checkmark.svg";
import smarterLearning from "smarterLearning.svg";
import strategicThinking from "strategicThinking.svg";
import teamwork from "teamwork.svg";
import communication from "communication.svg";
import selfWork from "selfWork.svg";
import designInnovation from "designInnovation.svg";
import infoManagement from "infoManagement.svg";

class ModulePath extends Component {

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
            <div className="scrollable-row-double invert">

            <div className="timeline blank center"><span>&#10004;</span><div className="time-line"></div></div>
            <div className="timeline blank center"><span>2</span><div className="time-line"></div></div>
            <div className="timeline blank center"><span>3</span><div className="time-line"></div></div>
            <div className="timeline blank center"><span>4</span><div className="time-line"></div></div>
            <div className="timeline blank center"><span>5</span><div className="time-line"></div></div>
            <div className="timeline blank center"><span>6</span><div className="time-line"></div></div>
            <div className="timeline blank center"><span>7</span><div className="time-line"></div></div>

            {
                //deciding onClick: 
                //if completed, then serve tips ; 
                //if !completed && comps == 4, then serve create pp ; 
                //if !completed && (comps < 0 && comps > 4), then continue module ; 
                //if !completed && comps == 0 && arr[i-1].completed, then start module ; 
                //if !completed && comps == 0 && !arr[i-1].completed, then disabled ;

                this.state.tiles.map( tile => 
                    <div key={tile.id} className={'tile module two-column-grid '+ tile.class} onClick={() => {this.decideClick(tile)}}>
                        {tile.complete && <div className="module-done"><img className="checkmark" src= { checkmark } /></div>}
                        <div><h4 className="small-margin-bottom">Module</h4><h3>{tile.name}</h3></div>
                        <img src={ tile.icon } />
                    </div>
                )
            }
            </div>
        )
    }
}
export default ModulePath;
