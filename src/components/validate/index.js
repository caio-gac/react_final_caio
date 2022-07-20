import PasswordValidator from 'password-validator';

export default function passwordValidate() {
    let passwordValidator = PasswordValidator;
    let schema = new passwordValidator();
    schema
        .is().min(8)
        .has().uppercase()                             
        .has().lowercase();
    
    return schema.validate();
    
}
