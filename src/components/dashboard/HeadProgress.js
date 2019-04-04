import React, { Component } from 'react';

import halfHead from "logos/just-head.svg";

const { useState, useRef } = React;

function HeadProgress(props) {
  return (
    <div className="head-progress">
      <div className="one-skill">
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
      </div>
      <div className="one-skill complete">
        <div className="one-comp active"></div>
        <div className="one-comp active"></div>
        <div className="one-comp active"></div>
        <div className="one-comp active"></div>
      </div>
      <div className="one-skill">
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
      </div>
      <div className="one-skill complete">
        <div className="one-comp active"></div>
        <div className="one-comp active"></div>
        <div className="one-comp active"></div>
        <div className="one-comp active"></div>
      </div>
      <div className="one-skill">
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
      </div>
      <div className="one-skill">
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp active"></div>
        <div className="one-comp active"></div>
      </div>
      <div className="one-skill">
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
        <div className="one-comp"></div>
      </div>
      <img alt="skillpod logo" src={ halfHead }/>
    </div>
  )
}

export default HeadProgress;
