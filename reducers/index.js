let images = [
    'img/adium.png',
    'img/freebsd.png',
    'img/thebat.png',
    'img/evernote.png',
    'img/linux.png',
    'img/firefox.png',
    'img/adium.png',
    'img/monkeys.png',
    'img/evernote.png',
    'img/firefox.png',
    'img/freebsd.png',
    'img/linux.png',
    'img/twitter.png',
    'img/monkeys.png',
    'img/thebat.png',
    'img/twitter.png'
];

const myState = {
    welcome: false,
    congratuation: false,
    name: '',
    images: images
};

function reducer(state = myState, action) {
    switch (action.type) {
        case 'test':
            console.log('test');
            return state;
            break;
        case 'startGame':
            console.log('start game');
            return Object.assign({}, state, {
                welcome: true,
                name: action.name
            });

        default:
            return state
    }
}

export default reducer