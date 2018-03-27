import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Main from './component'


// const store = createStore(reduser);

render(
<Provider store={'dff'}>
    <Main />
    </Provider>,
document.getElementById('root')
);