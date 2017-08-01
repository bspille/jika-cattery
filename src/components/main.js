import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Carousel from "./carousel";

const styles = {

  slide: {
    padding: 10,
  },
};

export default class Main extends Component {

  constructor(props) {
    super(props);
    console.log(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      slideIndex: 0,
    };

  }

  handleChange (value){
    console.log(value);
    this.setState({
      slideIndex: value,
    });
  }

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Home" value={0} />
          <Tab label="Queens" value={1} />
          <Tab label="Toms" value={2} />
          <Tab label="Kittens" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            Swipe to see the next slide.<br />
           <Carousel/>
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
           <div style={styles.slide}>
            slide n°4
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
              