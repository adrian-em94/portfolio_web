import React from 'react'
import '../components/ImageItem.css'

function ImageItem(props) {
    return (   
        <>
            <figure className="image__item__pic-wrap">
                <img src={props.src} alt={props.alt} className='image__item__img' />
                <div className='image__item__info'>
                    <p className="image__item__text">{props.text}</p>
                </div>
            </figure>
        </>
    )
}

export default ImageItem;