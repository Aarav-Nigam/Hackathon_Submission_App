import moment from 'moment'
import { Link } from 'react-router-dom'
import React from 'react'
import './Card.css'
function Card({ obj }) {
  // console.log(new Date(obj.uploadDate))
  return (

    <div id='card' class="card shadow-6-strong col-6 w-25 m-5">
      <Link to={`/details/${obj.id}`} state={{ details: obj }}>
        <div id='row' className='row'>
          <img id='card-image' src={obj.imageSrc} class="col-6 rounded-9 my-2" />
          <div className='col-6 align-self-center h5'>{obj.title}</div>
        </div>
        <div class="card-body">
          <p class="card-text">{obj.summary}</p>
        </div>
        <div class="card-footer text-muted text-end fst-italic">uploaded {moment(obj.uploadDate).fromNow(true)} ago</div>
      </Link>
    </div>

  )
}

export default Card

{/* <div class="card" style="width: 18rem;">
            <div className='row'>
                <img src={obj.img} class="card-img-top col-6" />
                <div className='col-6'>{obj.title}</div>
            </div>
            <div class="card-body">
                <p class="card-text">{obj.summary}</p>
            </div> 
    </div>
*/}