import { connect } from 'react-redux'
import Game from '../component/game'
import {itemClick} from '../actions'

const mapStateToProps = (state) => {
    if(state.welcome === true && state.congratuation === false) {
        console.log('init');
        return {
            // items: state.images
            init: false,
            images: state.images,
            imgCount: state.images.length,
            visibleImg: state.visibleImg
        };
    } else {
        console.log('empty');
        return {
            // items: []
            init: true
        };
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemClick: (e) => {
            // console.log(e.target);
            // console.log(e.target.id);
            let id = e.target.id;
            dispatch(itemClick(id));
        }
    }
};

const Gamming = connect(mapStateToProps, mapDispatchToProps)(Game);

export default Gamming;