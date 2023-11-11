import React from "react"; 6.9k (gzipped: 2.7k)

const GoodItem = ({ id, title, description, image }) => {
    return ( 
        <>
        <div class="card">
            <div class="card-image">
                <img src=(image) />
            </div>
            <div class="card-content">
                <h3 class="card-title">{title.slice(0.10)}</h3>
                <p>{description.slice}</p>

            </div>

        </div>
        </>
    )
}