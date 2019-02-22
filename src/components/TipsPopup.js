import React, { Component } from 'react';

class TipsPopup extends Component {
  render() {
    return (
      <div id="tipsPopUp" className="pop-up">
        <div className="tile">
          <div id="tipsClose" className="close-pop-up"><span className="lighten">x</span></div>
          <h3 id="moduleTitle" className="txt-impact">Module Name</h3>
          <h1>Tips & Reflections</h1>
          <select id="compSelection">
            <option value="0">Competency 1</option>
            <option value="1">Competency 2</option>
            <option value="2">Competency 3</option>
          </select>
          <p id="tipsContent">Tips Content</p>
        </div>
      </div>
    );
  }
}

export default TipsPopup;
