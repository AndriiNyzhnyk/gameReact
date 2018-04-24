import { connect } from 'react-redux'
import Game from '../component/game'
import {itemClick} from '../actions'

const mapStateToProps = (state) => {
    if(state.welcome === true && state.congratuation === false) {
        return {
            items: state.images
        };
    } else {
        return {
            items: []
        };
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

export default Gamming;