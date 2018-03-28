import React from 'react'

const Congratuation = () => (
    <div id="openModal" className="modalDialog">
        <div>
            <h3>Вітаємо, Ви перемогли</h3>
            <p>Виконано ходів:</p>
            <textarea className="congrat" id="tickResult" readOnly>eee</textarea>
            <p>Пройшло часу:</p>
            <textarea className="congrat" id="timeResult" readOnly>rrr</textarea>
        </div>
    </div>
);

export default Congratuation;