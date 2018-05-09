export const itemClick = (id) => {
    return {
        type: 'clickItem',
        id: id
    }
};

export const hideImg = () => {
    return {
        type: 'hide'
    }
};

export const startGame = () => {
    const name = document.getElementById('name').value;
    if(name == '') {
        alert('Введіть коректне ім\'я');
        return {
            type: 'null'
        };
    }

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