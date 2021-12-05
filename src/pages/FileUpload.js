import React, { Fragment, useState,useEffect } from 'react';
import Message from './Message';
import Progress from './Progress';
import Axios from 'axios';
import {Link,useHistory} from "react-router-dom";
import './styles/FileUpload.css';
import './styles/Navbar.css';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const[gotUser, setGotUser] = useState(false);
  const [blogText, setBlogText] = useState('');
  const history = useHistory();

  useEffect(()=>{
    if(gotUser == false){
      console.log(JSON.parse(localStorage.getItem("axiosresponse"))[0].email);
      setGotUser(true);
    }
  })
  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await Axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      postblog(fileName,JSON.parse(localStorage.getItem("axiosresponse"))[0].email);
      setMessage('File Uploaded');
      history.push("/viewBlog");

    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  const postblog = (blog, email) => {
    Axios.put("http://localhost:3001/postblog", { blog:blog, email:email}).then(
      (response) => {
        console.log(response);
      }
    );
    Axios.put("http://localhost:3001/postblogtext", { blogText:blogText, email:email}).then(
      (response) => {
        console.log(response);
      }
    );
  };

  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
            <span><img id = "logo" src="logo.png" alt="logo"/></span>
            <div class="container-fluid">
            <div class="navbar-nav">
                <div id = "navcard" class="card mb-2">
                <div class="row g-0">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                    <button id = "investors" type="button">Investors</button>
                    <button id = "startUps" type="button">Start-Ups</button>
                    <button id = "about" type="button">About</button>
                    <Link to="/Login"><button id = "login" type="button">Log In</button></Link>
                    <Link to="/Second"><button id = "signUp" type="button">Sign Up</button></Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </nav>
      <div id = 'container'>
        {message ? <Message msg={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className='custom-file mb-4'>
            <input
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={onChange}
            />
            <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label>
          </div>
          <div>
          <textarea 
          id="description" 
          placeholder="Add Blog description" 
          rows="4" cols="50"
          onChange={(event)=>setBlogText(event.target.value)}/>
          </div>
          <Progress percentage={uploadPercentage} />
          <input
            type='submit'
            value='Upload'
            id = 'uploadbtn'
          />
          
        </form>
        {uploadedFile ? (
          <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
              <h3 className='text-center'>{uploadedFile.fileName}</h3>
              <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default FileUpload;
=======
export default FileUpload;
>>>>>>> 25fc581a5241e5658a574590baf225aa2763ed00
