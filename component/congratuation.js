import React from 'react'

const Congratuation = ({congratStatus, counter, userName, time}) => {
    if(congratStatus === true) {
        return (
            <div id="openModal" className="modalDialog">
                <div>
                    <h3>Вітаємо {userName}, Ви перемогли</h3>
                    <p>Виконано ходів:</p>
                    <textarea className="congrat" id="tickResult" readOnly>{counter}</textarea>
                    <p>Пройшло часу:</p>
                    <textarea className="congrat" id="timeResult" readOnly>{time + ' c'}</textarea>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        );
    }

};

export default Congratuation;