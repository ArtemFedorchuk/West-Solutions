import {connect} from 'react-redux';
import Login from "./Login";
import {sendUserCreator} from "../../redux/login-reducer";

const mapStateToProps = (state) => {
    return {
        name: '',
        password: ''
    }
};

const LoginContainer = connect(mapStateToProps,{
    updateUserHandler: sendUserCreator,
})(Login);

export default LoginContainer;