import { connect } from 'react-redux'
import Congratuation from '../component/congratuation'

const mapStateToProps = (state) => {
    return {
        congratStatus: state.congratuation,
        counter: state.counter,
        userName: state.name
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         f: () => {
//             dispatch();
//         }
//     }
// };

const CongratWindow = connect(mapStateToProps)(Congratuation);

export default CongratWindow;