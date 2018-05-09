import { connect } from 'react-redux'
import Game from '../component/game'
import {itemClick, hideImg} from '../actions'

const mapStateToProps = (state) => {
    if(state.welcome === true && state.congratuation === false) {
        return {
            init: false,
            images: state.images,
            imgCount: state.images.length,
            visibleImg: state.visibleImg
        };
    } else {
        console.log('empty');
        return {
            init: true
        };
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemClick: (e) => {
            let id = e.target.id;
            dispatch(itemClick(id));
        },
        hideImg: () => {
            dispatch(hideImg());
        }
    }
};

const Gamming = connect(mapStateToProps, mapDispatchToProps)(Game);

export default Gamming;