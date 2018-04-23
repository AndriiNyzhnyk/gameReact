import { connect } from 'react-redux'
import Counter from '../component/counter'
import {increment} from '../actions'

const mapStateToProps = (state) => {
    return {
        welcome: state.welcome,
        counter: state.counter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        }
    };
};

const countMoves = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default countMoves;