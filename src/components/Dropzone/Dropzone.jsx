import React, { useState,useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css'
import fs from 'fs';

export const Dropzone = ({imageSrc,setImageSrc}) => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = e => setImageSrc(e.target.result);
    reader.readAsDataURL(file);
  }, []);

  
  const {getRootProps, getInputProps} = useDropzone({onDrop,
    accept: {
        'image/*': ['.jpeg', '.jpg', '.png'],
       },
    maxFiles: 1
  });

  return (
    <div {...getRootProps()} className='my-dropzone'>
      <input {...getInputProps()} />
      {imageSrc ? (
        <div className='d-flex justify-content-between'>
          <img className='w-25' src={imageSrc} alt="Uploaded image" />
          <button className='btn btn-tertiary text-muted' onClick={() => setImageSrc(null)}>Re-upload <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.35 6.04C18.67 2.59 15.64 0 12 0C9.11 0 6.6 1.64 5.35 4.04C2.34 4.36 0 6.91 0 10C0 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM14 9V13H10V9H7L11.65 4.35C11.85 4.15 12.16 4.15 12.36 4.35L17 9H14Z" fill="#858585"/>
</svg>
</button>
        </div>
      ) : (
      <p>
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.04 6H32V1.96C32 0.88 31.12 0 30.04 0H29.98C28.88 0 28 0.88 28 1.96V6H23.98C22.9 6 22.02 6.88 22 7.96V8.02C22 9.12 22.88 10 23.98 10H28V14.02C28 15.1 28.88 16 29.98 15.98H30.04C31.12 15.98 32 15.1 32 14.02V10H36.04C37.12 10 38 9.12 38 8.04V7.96C38 6.88 37.12 6 36.04 6ZM26 14.02V12H23.98C22.92 12 21.92 11.58 21.16 10.84C20.42 10.08 20 9.08 20 7.96C20 7.24 20.2 6.58 20.54 6H4C1.8 6 0 7.8 0 10V34C0 36.2 1.8 38 4 38H28C30.2 38 32 36.2 32 34V17.44C31.4 17.78 30.72 18 29.96 18C27.78 17.98 26 16.2 26 14.02ZM25.92 34H6C5.18 34 4.7 33.06 5.2 32.4L9.16 27.14C9.58 26.58 10.4 26.62 10.8 27.18L14 32L19.22 25.04C19.62 24.52 20.4 24.5 20.8 25.02L26.7 32.38C27.22 33.04 26.76 34 25.92 34Z" fill="#CCCCCC"/>
</svg>
      </p>)}
    </div>
  );
}