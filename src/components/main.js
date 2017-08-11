// TODO: refactor so that the app shows a slider for each cat in the respective tabs

import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Carousel from "./carousel";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import FullscreenDialog from "material-ui-fullscreen-dialog";
import FlatButton from "material-ui/FlatButton";


const styles = {

  slide: {
    padding: 10,
  },
};

function RenderImageSliders(props){
    let cats = props.cats;
    let imageSliders = cats.map((cat)=>{
        return (
            <div key={cat._id}>
                <lable>{cat.name}</lable><br/>
                <Carousel tilesData = { cat.images } />
            </div>
        );
    });
    return(
        <div>
            { imageSliders }
        </div>
    )
}


class Main extends Component {

  constructor(props) {
    super(props);
    console.log(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormModal = this.handleFormModal.bind(this);
    this.state = {
      slideIndex: 0,
    };

  }

  componentWillMount(){
      // need to get all the cat images and store them in there respected states to be passed to the carousel as prop
    this.props.fetchQueens();
    this.props.fetchToms();
    this.props.fetchKittens();

  }

  handleChange (value){
    console.log(value);

    // set the value that opens the slide
    this.setState({
      slideIndex: value,
    });
  }
  handleFormModal(event){
    this.props.toggleForm(!this.props.formModalOpen);
  }

  render() {

    return (
      <div>

          {/* this renders the tabs with index values */}
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Home" value={0} />
          <Tab label="Queens" value={1} />
          <Tab label="Toms" value={2} />
          <Tab label="Kittens" value={3} />
        </Tabs>

          {/* this sets up the content veiws for each tab selected or swipe to change */}
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            Welcome to Jika Cattery
          </div>
          <div style={styles.slide}>
              Queens
              <RenderImageSliders cats={this.props.queens}/>
          </div>
          <div style={styles.slide}>
              Toms
              <RenderImageSliders cats={this.props.toms}/>
          </div>
           <div style={styles.slide}>
               Kittens
               <RenderImageSliders cats={this.props.kittens}/>
          </div>
        </SwipeableViews>

          {/* this sets the full screen modal for the form  */}
        <FullscreenDialog
          open={this.props.formModalOpen}
          onRequestClose={this.handleFormModal}
          title={'Cat Form'}
          actionButton={<FlatButton
              label='Done'
              onTouchTap={this.handleFormModal}
          />}
        >
          welcome to the form
        </FullscreenDialog>
      </div>
    );
  }
}

// map the redux state to the props object
function mapStateToProps(state){
    return Object.assign({},state)
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
// connect the new props to the container
export default connect(mapStateToProps, mapDispatchToProps)(Main);