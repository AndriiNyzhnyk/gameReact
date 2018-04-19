import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Main from './container'
import store from './store'


render(
    <Provider store={store}>
        <Main />
    </Provider>,
        document.getElementById('root')
);