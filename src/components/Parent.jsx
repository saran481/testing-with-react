import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class Parent extends Component {
  constructor (props) {
       super(props);
       this.state={
         saran : "hey there"
       }
      this.label = "I’m your father";
      
  };

  onSubmit = (option) => (option === "I’m your father" ? 'cool' : 'not cool');

  render () {
    return(
      <div className="container">
        <ChildComponent label={this.label} onSubmit={this.onSubmit} />
      </div>
    );
  };
};