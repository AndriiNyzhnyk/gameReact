let images = [
    'img/adium.png',
    'img/adium.png',
    'img/freebsd.png',
    'img/freebsd.png',
    'img/evernote.png',
    'img/evernote.png',
    'img/linux.png',
    'img/linux.png',
    'img/firefox.png',
    'img/firefox.png',
    'img/monkeys.png',
    'img/monkeys.png',
    'img/twitter.png',
    'img/twitter.png',
    'img/thebat.png',
    'img/thebat.png',
];

const myState = Object.create(null);
myState.welcome = false;
myState.name = '';
myState.images = randomPositionImg(images);
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
            const arr = action.id.split('_');
            const index = parseInt(arr[1], 10);

            if(state.visibleImg.first === null && isNaN(index) === false) {
                return Object.assign(Object.create(null), state, {
                    visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                        first: index
                    })
                });

            } else if(state.visibleImg.second === null
                    && state.visibleImg.first !== index
                    && isNaN(index) === false) {
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
                alert('Чудово, так тримати !');
                cloneImg = state.images.slice(0);

                if(index1 > index2) {
                    cloneImg.splice(index1, 1);
                    cloneImg.splice(index2, 1);
                } else {
                    cloneImg.splice(index2, 1);
                    cloneImg.splice(index1, 1);
                }

                if(cloneImg.length === 0 ) {
                    let endGame = new Date().getTime();
                    let result = (endGame - state.timeStartGame) / 1000;

                    return Object.assign(Object.create(null), state, {
                        images: cloneImg,
                        counter: state.counter + 1,
                        congratuation: true,
                        timeResult: result,
                        visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                            first: null,
                            second: null
                        })
                    });
                }

                return Object.assign(Object.create(null), state, {
                    images: cloneImg,
                    counter: state.counter + 1,
                    visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                        first: null,
                        second: null
                    })
                });
            } else {
                alert('Подумай краще !');
                return Object.assign(Object.create(null), state, {
                    counter: state.counter + 1,
                    visibleImg: Object.assign(Object.create(null), state.visibleImg, {
                        first: null,
                        second: null
                    })
                });
            }

        case 'startGame':
            let start = new Date().getTime();
            return Object.assign(Object.create(null), state, {
                welcome: true,
                name: action.name,
                timeStartGame: start
            });

        default:
            return state
    }
}

function randomPositionImg(array) {
    if(Math.random() > 0.5) array.reverse();

    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        if(Math.random() > 0.5) {
            newArr.push(array[i]);
        } else {
            newArr.unshift(array[i]);
        }
    }

    if(Math.random() > 0.5) newArr.reverse();

    let finishArr = [];
    for(let i = 0; i < newArr.length; i++) {
        if(Math.random() > 0.5) {
            finishArr.push(newArr[i]);
        } else {
            finishArr.unshift(newArr[i]);
        }
    }

    if(Math.random() > 0.5) finishArr.reverse();

    return finishArr;
}

export default reducer;