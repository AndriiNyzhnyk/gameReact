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
myState.visibleImg = Object.create(null);
myState.visibleImg.first = null;
myState.visibleImg.second = null;
myState.counter = 0;
myState.timeStartGame = 0;
myState.timeResult = 0;
myState.congratuation = false;

function reducer(state = myState, action) {
    switch (action.type) {
        case 'test':
            // console.log('test');
            let endGame = new Date().getTime();
            let result = (endGame - state.timeStartGame) / 1000;
            // return Object.assign(Object.create(null), state, {
            //     congratuation: true,
            //     timeResult: result
            // });
            return state;
        case 'clickItem':
            let arr = action.id.split('_');
            let index = parseInt(arr[1], 10);
            if(state.visibleImg.first === null) {
                return Object.assign(Object.create(null), state, {
                    visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                        first: index
                    })
                });
            } else if(state.visibleImg.second === null) {
                return Object.assign(Object.create(null), state, {
                    visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                        second: index
                    })
                });
            } else {
                return state;
            }
        case 'hide':
            let cloneImg = [];
            let index1 = state.visibleImg.first;
            let index2 = state.visibleImg.second;

            if(state.images[index1] === state.images[index2]) {
                console.log('equal');
                cloneImg = state.images.slice(0);
                if(index1 > index2) {
                    cloneImg.splice(index1, 1);
                    cloneImg.splice(index2, 1);
                } else {
                    cloneImg.splice(index2, 1);
                    cloneImg.splice(index1, 1);
                }

                return Object.assign(Object.create(null), state, {
                    images: cloneImg,
                    visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                        first: null,
                        second: null
                    })
                });
            } else {
                return Object.assign(Object.create(null), state, {
                    visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                        first: null,
                        second: null
                    })
                });
            }
            console.log(state.visibleImg.first);
            console.log(state.visibleImg.second);



        case 'startGame':
            let start = new Date().getTime();
            return Object.assign(Object.create(null), state, {
                welcome: true,
                name: action.name,
                timeStartGame: start
            });

        case 'countIncrement':
            console.log('increment');
            return Object.assign(Object.create(null), state, {
                counter: state.counter + 1
            });

        default:
            return state
    }
}

export default reducer;