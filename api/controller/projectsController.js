const Project = require('../model/projectsSchema')
const { deleteImage } = require('../controller/uploadImage')





const getProjects = (req, res) => {
    Project.find()
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const postProject = (req, res) => {
    const project = new Project(req.body)
    // project.projectImage = req.file.path
    project.save()
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

const deleteProject = (req, res) => {
    
    Project.findByIdAndDelete(req.params.id)
        .then(response => {
            // deleteImage(response.projectImage)
            res.status(200).send(response)})
        .catch(err => console.log(err))
}

//-------------------NOT USED FUNCTIONS---------------------

const getProject = (req, res) => {
    Project.findById(req.params.id)
    .then(response => {res.status(200).send(response)})
    .catch(err => console.log(err))
}

const updateProject = (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
        .then(response => {res.status(200).send(response)})
        .catch(err => console.log(err))
}

module.exports = {
    getProjects,
    getProject,
    postProject,
    updateProject,
    deleteProject
}