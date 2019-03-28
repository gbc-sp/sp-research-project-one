import React, { Component } from 'react';

import halfHead from "just-head.svg";

class HeadProgress extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="head-progress">
              <div class="one-skill">
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
              </div>
              <div class="one-skill complete">
                <div class="one-comp active"></div>
                <div class="one-comp active"></div>
                <div class="one-comp active"></div>
                <div class="one-comp active"></div>
              </div>
              <div class="one-skill">
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
              </div>
              <div class="one-skill complete">
                <div class="one-comp active"></div>
                <div class="one-comp active"></div>
                <div class="one-comp active"></div>
                <div class="one-comp active"></div>
              </div>
              <div class="one-skill">
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
              </div>
              <div class="one-skill">
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp active"></div>
                <div class="one-comp active"></div>
              </div>
              <div class="one-skill">
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
                <div class="one-comp"></div>
              </div>
              <img src={ halfHead }/>
            </div>
        )
    }
}
export default HeadProgress;
