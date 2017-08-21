import React, { Component } from "react";
import { connect } from "react-redux";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";



class SideNav extends Component {

  constructor(props) {
    super(props);
    console.log(this);
    this.handleSideNav = this.handleSideNav.bind(this);
    this.handleCatModal = this.handleCatModal.bind(this);
  }

  handleSideNav(event){
    this.props.toggleSideNav(!this.props.sideNavOpen);
  }

  handleCatModal(event){
    this.props.toggleCatModal(!this.props.catModal);
  }

  render() {
    return (
        <Drawer 
          docked={false}
          open={this.props.sideNavOpen}
          onRequestChange={this.handleSideNav}
        >
          <MenuItem
            onTouchTap={()=>{this.handleCatModal(); this.handleSideNav();}}>
              Cat Form
          </MenuItem>
          <MenuItem>To be linked</MenuItem>
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