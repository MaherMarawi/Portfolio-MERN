import React, { useState } from 'react'
import axios from 'axios'
import url from '../../../url'

function Add({ numb, setNumb }) {
    const [ project, setProject ] = useState({})
    const [selectedImage, setSelectedImage] = useState();
	const [isImagePicked, setIsImagePicked] = useState(false);
    
    const changeHandler = (event) => {
		setSelectedImage( event.target.files[0]);
		setIsImagePicked(true);
	}
    const handleSubmission = () => {
        const formData = new FormData();
        const arrayProject = Object.keys(project)
        arrayProject.forEach(key => {
            console.log(key, project[key])
            formData.append(key, project[key])
        })
		formData.append('projectImage', selectedImage);
        axios.post(`${url}/postProject`, formData)
            .then( res => {setNumb(numb +1)})
            .catch( err => console.log(err))
	}
    const onChange = (e) => {
        setProject({...project,[e.target.name]: e.target.value})
    }
    return (
        <div className='card adminpanel-card card-body'>
            <h3>add Project</h3>
            <label>name</label><input type='text' onChange={onChange} name='name' />
            <label>url</label><input type='text' onChange={onChange} name='url' />
            <label>description</label><input type='text' onChange={onChange} name='description' />
            <label>usedFramework</label><input type='text' onChange={onChange} name='usedFramework' />
            <label>codeUrl</label><input type='text' onChange={onChange} name='codeUrl' />
            
            <input type="file" name="projectImage" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>add</button>
			</div>
        </div>
    )
}

export default Add
