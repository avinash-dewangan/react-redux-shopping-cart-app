export default function validateInfo(values) {
    let errors = {}
    //const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    // if(!values.minvalue.trim()){
    //     errors.minvalue = "Min Value required"
    // }
    // if(!values.maxvalue.trim()){
    //     errors.maxvalue = "Min Value required"
    // }
    // else{
    //     errors.maxvalue = ""
    // }
    // if(!values.username.trim()){
    //     errors.maxvalue = "User Name required"
    // }
    // if(!values.email.trim()){
    //     errors.maxvalue = "Email required"
    // }else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)){
    //     errors.email = "Email address is invalid"
    // }
    // if(!values.password){
    //     errors.password ="Password is required"
    // }else if(values.password.length<6){
    //     errors.password ="Password need to be 6 charaters or more"
    // }
    // if(!values.password2){
    //     errors.password2="Password is required"
    // }else if(values.password2 !== values.password){
    //     errors.password2="Password do not match"
    // }
    return errors;
}