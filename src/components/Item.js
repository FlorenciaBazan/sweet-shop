// Información breve de un producto
import React from 'react';
import { Link } from 'react-router-dom';

function Item({id, title, price, pictureUrl, description}) {
    return(
        <div className="m-5">
            <div className="card p-2" style={{backgroundColor:"#grey", width: "18rem"}}>
                <h2 className="card-title">{title} {id}</h2>
                <img src={pictureUrl} className="card-img-top" alt="lorem" />
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <Link to={`/item/${id}`}>Details</Link>
                </div>
            </div>
        </div>
    )    
}

export default Item