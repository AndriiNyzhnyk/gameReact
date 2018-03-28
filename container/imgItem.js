import { connect } from 'react-redux'
import Game from '../component/game'

const mapStateToProps = (state) => {
    return {
        items: state
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id))
//         }
//     }
// }

const Gamming = connect(mapStateToProps)(Game);

export default Gamming