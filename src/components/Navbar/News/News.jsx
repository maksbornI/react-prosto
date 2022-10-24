import React from 'react';
import s from './News.module.css';

const News = () => {
    return (
        <div>
            <div className={s.item}>
                Юля вчера пила мгного просеки
            </div>
            <div>
                <img src='https://cdn.the-village.ru/the-village.ru/post_image-image/-R1j8O9x_OKNE2WTY9KMoA.png' alt={"avatar"}/>
            </div>
        </div>
    )
}

export default News;