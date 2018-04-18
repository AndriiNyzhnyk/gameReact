import { connect } from 'react-redux'
import Game from '../component/game'
import {itemClick} from '../actions'

const mapStateToProps = (state) => {
    return {
        items: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemClick: () => {
            dispatch(itemClick());
        }
    }
};

const Gamming = connect(mapStateToProps, mapDispatchToProps)(Game);

export default Gamming