export const itemClick = () => {
    return {
        type: 'test',
        text: 'test123'
    }
};

export const startGame = () => {
    const name = document.getElementById('name').value;
    return {
        type: 'startGame',
        name: name
    }
};

export const increment = () => {
    return {
        type: 'countIncrement'
    }
};