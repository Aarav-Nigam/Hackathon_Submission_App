import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Modal.css'
export default function BasicModal({open,setOpen,id}) {
    const navigate=useNavigate();
    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        var CardsData = JSON.parse(localStorage.getItem('aiPlanetDB'))
        var temp=[];
        CardsData.forEach(obj=>{
            if(obj.id!=id){
                temp.push(obj);
            }
        })
        localStorage.setItem('aiPlanetDB', JSON.stringify(temp))
        navigate('/')
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='rounded-8'>
            <Typography id="modal-modal-title" className='text-dark' variant="h6" component="h2">
              Delete Model
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This action is irreversible. Are you sure you want to delete this model?
            </Typography>
            <div className='d-flex justify-content-end'>
            <button type="button" class="btn btn-outline-dark rounded-5" data-mdb-ripple-color="dark">Cancel</button>
            &nbsp;&nbsp;
            <button id='deleteButton' onClick={handleDelete} type="button" class="btn btn-danger rounded-5 ">Delete</button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }