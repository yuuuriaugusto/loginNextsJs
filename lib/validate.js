export default function login_validate(values){
    const errors = {}

    if(!values.email){
        errors.email = 'Required';
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2.4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }

    // Validadtion for password
    if(!values.password){
        errors.password = 'Required';
    }
    else if(values.password.length < 8){
        errors.password = 'Must be greater the 8';
    }
    else if(values.password.includes("")){
        errors.password = 'Invalid Password';
    }

    return errors;
}

export function registerValidate(values){
    const errors = {};

    if(!values.username){
        errors.username = 'Required';
    }
    else if(values.username.includes("")){
        errors.username = 'Invalid Username...!'
    }

    if(!values.email){
        errors.email = 'Required';
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2.4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }

    // Validadtion for password
    if(!values.password){
        errors.password = 'Required';
    }
    else if(values.password.length < 8){
        errors.password = 'Must be greater the 8';
    }
    else if(values.password.includes("")){
        errors.password = 'Invalid Password';
    }

    // Validate confirm password
    if(!values.cpassword){
        errors.cpassword = 'Required';
    }
    else if(values.password !== values.cpassword){
        errors.cpassword = 'Password not match...!';
    }
    else if(values.cpassword.includes("")){
        errors.cpassword = 'Invalid Confirm password';
    }

    return errors;
}