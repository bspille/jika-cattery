
import React, { Component } from "react";
import FullscreenDialog from "material-ui-fullscreen-dialog";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import CatForm from "../forms/cat-form";

class CatModal extends Component {
    constructor(props){
        super(props);
        this.handleCatModal = this.handleCatModal.bind(this);
        console.log(this);
    }

    handleCatModal(event){
        this.props.toggleCatModal(!this.props.catModal);
    }
    render(){
        return(
            <FullscreenDialog
                open={this.props.catModal}
                onRequestClose={this.handleCatModal}
                title="Cat Data Form"
                actionButton={<FlatButton
                    label='Done'
                    onTouchTap={this.handleCatModal}
                />}
            >

            <CatForm/>
            </FullscreenDialog>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(CatModal);