import { connect } from 'react-redux'
import Welcome from '../component/welcome'
import {startGame} from '../actions'

const mapStateToProps = (state) => {
    return {
        welcome: state.welcome
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch(startGame());
        }
    }
};

const WelcomeWindow = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeWindow;