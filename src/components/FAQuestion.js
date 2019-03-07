import React, { Component } from 'react';

class FAQuestion extends Component {
  
//   state = {
//     que: this.props.oneQ,
//     ans: this.props.oneA
//   }

//   constructor(props) {
//     super(props);
//   }

  constructor(props) {
    super(props);
    this.state = {
        que: this.props.oneQ,
        ans: this.props.oneA
    }
  }
  
  render() {
    return (
        <article>
            <h2>{this.state.que}</h2>
            <p>{this.state.ans}</p>
        </article>
    );
  }
}

export default FAQuestion;