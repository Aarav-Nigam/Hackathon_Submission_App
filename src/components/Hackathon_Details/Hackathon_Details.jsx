import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Hackathon_Details.css'
import moment from 'moment';
import BasicModal from '../Modal/Modal';


function Hackathon_Details() {
    const navigate=useNavigate();
    const location = useLocation();
    const details = location.state.details
    const [isFavorite, setIsFavorite] = useState(details.favourite);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClick = () => {
        setIsFavorite(!isFavorite);
        details.fovourite=!details.favourite;
        const CardsData = JSON.parse(localStorage.getItem('aiPlanetDB'))
        CardsData.forEach(obj=>{
            if (obj.id==details.id){
                obj.favourite=!obj.favourite;
            }
        })
        // console.log(CardsData)
        localStorage.setItem('aiPlanetDB', JSON.stringify(CardsData))
    }


    // console.log(location)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <div id='banner' className="row" >
            <div className='col-1'>

            </div>
            <div className='col-7 align-self-center p-5'>
                <div>
                    <img className='rounded-6' id='thumbnail' src={details.imageSrc} />
                    &nbsp;&nbsp;
                    <span className='h4 ms-3'>{details.title}</span>
                </div>
                <div className='my-3'>{details.summary}</div>
                {!isFavorite?<i onClick={handleClick} className="fa-regular fa-star"></i>:<i onClick={handleClick} className="fa-solid fa-star text-white"></i>}

                &nbsp;&nbsp;
                <span className='h2'>|</span>
                &nbsp;&nbsp;

                <button type="button" class="btn btn-secondary btn-rounded" disabled><i class="fa-regular fa-calendar" ></i> &nbsp;&nbsp; {moment(details.uploadDate).format("Do MMMM")}</button>
            </div>
            <div className='col-4 align-items-center d-flex flex-column justify-content-center' >
            <button type="button" onClick={()=>{navigate('/update/'+details.id,{state:{data:details}})}} class="hack-hero-btn btn btn-outline-light rounded-5 my-2" data-mdb-ripple-color="dark"><CreateIcon fontSize='small'/>Edit </button>
            <button type="button" onClick={handleOpen} class="hack-hero-btn btn btn-outline-light rounded-5 my-2" data-mdb-ripple-color="dark"><DeleteIcon fontSize='small'/> Delete </button>
            <BasicModal open={open} setOpen={setOpen} id={details.id}/>
            </div>
        </div>
        
        <div id='details' className='row'>
            <div className='col-1'>

            </div>
            <div className='col-7 align-self-center p-5'>
                <h2>Description</h2>
                {details.description}
            </div>
            <div className='col-4 '>
                <p className='text-muted my-4'>Hackathon</p>
                <h4>{details.HackathonName}</h4>
                <p className='text-muted my-4'><i class="fa-regular fa-calendar" ></i> {moment(details.startDate).format("Do MMM YYYY")} - {moment(details.endDate).format("Do MMM YYYY")}</p>
                <button onClick={()=>{window.location.href=details.GitHubRepo}} type="button" class="d-block w-50 btn btn-outline-muted text-muted rounded-5 my-2" data-mdb-ripple-color="dark"><GitHubIcon fontSize='small'/> GitHub Repository</button>
                <button onClick={()=>{window.location.href=details.otherLink}} type="button" class="d-block w-50 btn btn-outline-muted text-muted rounded-5 my-2" data-mdb-ripple-color="dark"><i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;Other Link </button>
            </div>
        </div>
        </>
    )
}

export default Hackathon_Details