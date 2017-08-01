import React, { Component } from 'react';
import { connect } from "react-redux";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { bindActionCreators } from "redux";
import * as actionCreators from '../actions';



class SideNav extends Component {

  constructor(props) {
    super(props);
    console.log(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.toggleSideNav(!this.props.sideNavOpen);
  }

  render() {
    return (
        <Drawer 
          docked={false}
          open={this.props.sideNavOpen}
          onRequestChange={this.handleClick}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    );
  }
}

function mapStateToProps(state){
    return Object.assign({},state)
}
function mapDispatchToProps(dispatch){
    return bindActionCreators( actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SideNav);