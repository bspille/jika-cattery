import React, { Component } from 'react';
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from '../actions';


 class Header extends Component {
     constructor(props){
         super(props);
         console.log(this);
         this.handleClick = this.handleClick.bind(this);

     }
    handleClick(event){
         event.preventDefault();
         this.props.toggleSideNav(!this.props.sideNavOpen);
     }
    render(){
        return (
            <AppBar
                title={this.props.site.name}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.handleClick}
            />    
        );
    }
};
    // iconClassNameRight={ 
    //                 <IconButton  
    //                 iconClassName="muidocs-icon-navigation-expand-more"
    //                 onTouchTap={ this.handleClick }/> 
    //             }
    //         />
function mapStateToProps(state){
    return Object.assign({},state)
}
function mapDispatchToProps(dispatch){
    return bindActionCreators( actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);