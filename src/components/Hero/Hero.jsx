import React from 'react'
import bulb from '../../assets/Hand holding bulb 3D.png'
import './Hero.css'
function Hero() {
    return (
        <>
            <div id='hero' className="row p-5 bg-image" >
                <div className='col-8 p-5'>
                    <h2>Hackathon Submissions</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa facere, sapiente in ea incidunt ducimus! Libero, natus minus. Ipsam, quam magnam fuga voluptates laborum dolores dolor deleniti dignissimos quod fugit eligendi nemo placeat repellendus natus ipsum velit ratione temporibus quidem praesentium blanditiis cum nisi a, recusandae autem. Iusto, error.</p>
                    <button onClick={()=>{window.location.href='/create'}} type="button" className="btn btn-success">Upload Submission</button>
                </div>
                <div className='col-4 ' >
                    <img id='bulb' src={bulb}/>
                </div>
            </div>
        </>
    )
}

export default Hero