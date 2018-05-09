import { connect } from 'react-redux'
import Counter from '../component/counter'

const mapStateToProps = (state) => {
    return {
        welcome: state.welcome,
        counter: state.counter,
        congrat: state.congratuation
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => {
//             dispatch(increment());
//         }
//     };
// };

const countMoves = connect(mapStateToProps)(Counter);

export default countMoves;