import React from 'react'


function Card(props) {
    
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    
    return (
        <div className="card">
            {badgeText  && <div className='card-badge'>{badgeText}</div>}
            <img src={props.item.coverImg[0]} className='card-image' />
            <div className='card-stats'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAXy2aZPJPG0ELuwIyAM81ENGURiCdtrQwY8Jz5yz6rWQLs7bacAE-y08pdvPX4lh4n8&usqp=CAU" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span  className="card-price bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
export default Card;