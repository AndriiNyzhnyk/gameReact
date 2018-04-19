import { connect } from 'react-redux'
import Welcome from '../component/welcome'

const mapStateToProps = (state) => {
    return state;
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         f: () => {
//             dispatch();
//         }
//     }
// };

const WelcomeWindow = connect(mapStateToProps)(Welcome);

export default WelcomeWindow