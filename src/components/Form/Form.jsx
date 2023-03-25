import React, { useState,useEffect } from 'react'
import { Dropzone } from '../Dropzone/Dropzone'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Form.css'




function Form() {
  const [id,setId]=useState(0)
  const [favourite,setFavourite]=useState(false)
  const [uploadDate,setUploadDate]=useState(new Date())
  const [title,setTitle]=useState("")
  const [summary,setSummary]=useState("")
  const [description,setDescription]=useState("")
  const [imageSrc,setImageSrc]=useState(null)
  const [HackathonName,setHackathonName]=useState("")
  const [startDate,setStartDate]=useState(new Date())
  const [endDate,setEndDate]=useState(new Date())
  const [GitHubRepo,setGitHubRepo]=useState("")
  const [otherLink,setotherLink]=useState("")

  const location=useLocation()
  const navigate=useNavigate();
  useEffect(() => {
    if(location.state){
      const data=location.state.data
      setId(data.id)
      setFavourite(data.favourite)
      setUploadDate(new Date(data.uploadDate))
      setTitle(data.title)
      setSummary(data.summary)
      setDescription(data.description)
      setHackathonName(data.HackathonName)
      setImageSrc(data.imageSrc)
      setStartDate(data.startDate)
      setEndDate(data.endDate)
      setGitHubRepo(data.GitHubRepo)
      setotherLink(data.otherLink)
    }
  }, [])
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    var CardsData = JSON.parse(localStorage.getItem('aiPlanetDB'))
    CardsData = [...CardsData,{id:CardsData.length+1,favourite,uploadDate,title,summary,description,imageSrc,HackathonName,startDate,endDate,GitHubRepo,otherLink}]
    localStorage.setItem('aiPlanetDB', JSON.stringify(CardsData))
    navigate('/')
  }

  const handleUpdate = (e) =>{
    e.preventDefault()
    var CardsData = JSON.parse(localStorage.getItem('aiPlanetDB'))
    
    CardsData=CardsData.map(obj=>{
      if(obj.id==id){
        return {id,favourite,uploadDate,title,summary,description,imageSrc,HackathonName,startDate,endDate,GitHubRepo,otherLink}
      }
      else{
        return obj
      }
    })
    // CardsData = [...CardsData,{id:CardsData.length+1,favourite:false,uploadDate:new Date(),title,summary,description,imageSrc,HackathonName,startDate,endDate,GitHubRepo,otherLink}]
    localStorage.setItem('aiPlanetDB', JSON.stringify(CardsData))
    navigate('/')
  }

  return (
    <div id='form-background'>
      <div id='form' onSubmit={location.state?handleUpdate:handleSubmit} className='w-75 bg-white m-5'>
        <form id='form' className='p-5'>
          <h2>New Hackathon Submission</h2>

          <p className='pt-4'>Title</p>
          <input required type="text" value={title} onChange={e=>{setTitle(e.target.value)}} placeholder='Title of the Submission' class="form-control form-control-lg" />


          <p className='pt-5'>Summary</p>
          <input required type="text" value={summary} onChange={e=>{setSummary(e.target.value)}}  placeholder='A short summary of your submission (this will be visible with your submission)' class="form-control form-control-lg" />


          <p className='pt-5'>Description</p>
          <input required type="text" value={description} onChange={e=>{setDescription(e.target.value)}}  style={{ 'paddingBottom': '100px' }} placeholder='Write a long description of your project. You can describe your idea and approach here.' class="form-control form-control-lg" />

          <p className='pt-5'>Cover Image</p>
          <p className='text-muted'> Minimum resolution: 360px  X 360px</p>
          <Dropzone imageSrc={imageSrc} setImageSrc={setImageSrc}/>

          <p className='pt-5'>Hackathon Name</p>
          <input required type="text" value={HackathonName} onChange={e=>{setHackathonName(e.target.value)}}   placeholder='Enter the name of the hackathon' class="form-control form-control-lg" />

          <div className='row'>
            <div className='col-6'>
              <p className='pt-5'>Hackathon Start Date</p>
              <input required type="date" value={moment(startDate).format().split('T')[0]} onChange={e=>{setStartDate(new Date(e.target.value))}} placeholder='Select start date' class="form-control form-control-lg" />
            </div>
            <div className='col-6'>
              <p className='pt-5'>Hackathon End Date</p>
              <input required type="date"  value={moment(endDate).format().split('T')[0]} onChange={e=>{setEndDate(new Date(e.target.value))}} placeholder='Select end date' class="form-control form-control-lg" />
            </div>
          </div>

          <p className='pt-5'>GitHub Repository</p>
          <input required type="text" value={GitHubRepo} onChange={e=>{setGitHubRepo(e.target.value)}} placeholder='Enter your submission’s public GitHub repository link' class="form-control form-control-lg" />

          <p className='pt-5'>Other Links</p>
          <input type="text" value={otherLink} onChange={e=>{setotherLink(e.target.value)}} placeholder='You can upload a video demo or URL of you demo app here.' class="form-control form-control-lg" />
          {
            location.state?<button type="submit" className="btn btn-success mt-5">Save Submission</button>:<button type="submit" className="btn btn-success mt-5">Upload Submission</button>
          }
          {/* <button onClick={handleSubmit} type="button" className="btn btn-success mt-5">Upload Submission</button> */}
        </form>
      </div>
    </div>
  )
}

export default Form
