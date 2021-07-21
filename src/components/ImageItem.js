import React from 'react'
import '../components/ImageItem.css'

function ImageItem(props) {
    return (   
        <>
            <li className="image__item">
                    <figure className="image__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="n/a" className='image__item__img' />
                    </figure>
            </li>
        </>
    )
}

export default ImageItem;