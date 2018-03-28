const images = [
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

function reducer(state = images, action) {
    switch (action.type) {
        case '':
            return;


        default:
            return state
    }
}

export default reducer