import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Main from './component'
import store from './store'
import ImgItem from './container/imgItem'



// const store = createStore(reduser);

render(
<Provider store={store}>
    {/*<Main />*/}
    <ImgItem/>
    </Provider>,
document.getElementById('root')
);