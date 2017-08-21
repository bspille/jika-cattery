//
// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actionCreators from "../actions";
// import FullscreenDialog from "material-ui-fullscreen-dialog";
// import FlatButton from "material-ui/FlatButton";
// import { Field, Form, reduxForm } from "redux-form";
//
// function RenderFields(fields){
//     fields = fields.map((field)=>{
//         console.log(field);
//         return(
//             <Field
//                 component = { field.component }
//                 label = { field.label }
//                 name = { field.name }
//                 type = { field.type }
//             />
//         )
//     });
//     return fields;
// }
//
// function renderComponent(field){
//     console.log(field);
//
// }
//
// class TomForm extends Component {
//     constructor(props){
//         super(props);
//         console.log(this);
//     }
//
//     render(){
//         return(
//             <FullscreenDialog
//                 open={this.props.formModalOpen}
//                 onRequestClose={this.handleFormModal}
//                 title={'Cat Form'}
//                 actionButton={<FlatButton
//                     label='Done'
//                     onTouchTap={this.handleFormModal}
//                 />}
//             >
//                 welcome to the new cat form
//                 <Form>
//                     <RenderFields fields={ this.props.fields }/>
//                 </Form>
//
//             </FullscreenDialog>
//         )
//     }
// }
//
// // map the redux state to the props object
// function mapStateToProps(state){
//     return Object.assign({},state)
// }
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actionCreators, dispatch)
// }
// function validate(value){
//     console.log(value);
// }
// export default reduxForm({
//     fields:[
//         {
//             component: renderComponent,
//             label: "Name",
//             name: "name",
//             type: "text",
//         },
//         {
//             component: renderComponent,
//             label: "Owner",
//             name: "owner",
//             type: "text",
//         },
//         {
//             component: renderComponent,
//             label: "Image Url",
//             name: "imageUrl",
//             type: "text",
//         },
//         {
//             component: renderComponent,
//             label: "Date of Birth",
//             name: "birthday",
//             type: "date",
//         },
//     ],
//     form: newTom,
//     validate
// })(connect(mapStateToProps, mapDispatchToProps)(TomForm));