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

const myState = Object.create(null);
myState.welcome = false;
myState.name = '';
myState.images = images;
myState.counter = 0;
myState.timeStartGame = 0;
myState.timeResult = 0;
myState.congratuation = false;

function reducer(state = myState, action) {
    switch (action.type) {
        case 'test':
            console.log('test');
            let emptyObj = Object.create(null);
            let endGame = new Date().getTime();
            let result = (endGame - state.timeStartGame) / 1000;
            return Object.assign(emptyObj, state, {
                congratuation: true,
                timeResult: result
            });
        case 'startGame':
            let emptyObj1 = Object.create(null);
            let start = new Date().getTime();
            return Object.assign(emptyObj1, state, {
                welcome: true,
                name: action.name,
                timeStartGame: start
            });

        case 'countIncrement':
            console.log('increment');
            let emptyObj2 = Object.create(null);
            return Object.assign(emptyObj2, state, {
                counter: state.counter + 1
            });

        default:
            return state
    }
}

export default reducer;