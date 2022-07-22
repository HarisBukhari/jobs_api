const createJob = async (req, res) => {
    res.send('Create jobs')
}
const getAllJobs = async (req, res) => {
    res.send('Get All jobs')
}
const getJob = async (req, res) => {
    res.send('get job')
}
const updateJobs = async (req, res) => {
    res.send('Update jobs')
}
const deleteJobs = async (req, res) => {
    res.send('Delete jobs')
}

module.exports = {
    deleteJobs,
    getAllJobs,
    getJob,
    updateJobs,
    createJob,
}