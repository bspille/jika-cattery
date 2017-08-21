//
// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actionCreators from "../actions";
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
// function renderField(field){
//     console.log(field);
//     return(
//         <div className="input-row">
//         <input {...field.input} type={field.type}/>
//         {field.meta.touched && field.meta.error &&
//         <span className="error">{field.meta.error}</span>}
//     </div>
//     )
// }
//
// class ImageForm extends Component {
//     constructor(props){
//         super(props);
//         console.log(this);
//     }
//
//     render(){
//         return(
//             <Form>
//                 <RenderFields fields={ this.props.fields }/>
//             </Form>
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
//             component: renderField,
//             label: "Author",
//             name: "author",
//             type: "text",
//         },
//         {
//             component: renderField,
//             label: "Category",
//             name: "model",
//             type: "text",
//         },
//         {
//             component: renderField,
//             label: "Cat Id",
//             name: "catId",
//             type: "text",
//         },
//         {
//             component: renderField,
//             label: "Date",
//             name: "date",
//             type: "date",
//         },
//         {
//             component: renderField,
//             label: "Image Url",
//             name: "imageUrl",
//             type: "text",
//         },
//         {
//             component: renderField,
//             label: "Title",
//             name: "title",
//             type: "text",
//         },
//
//
//
//     ],
//     form: newImage,
//     validate
// })(connect(mapStateToProps, mapDispatchToProps)(ImageForm));