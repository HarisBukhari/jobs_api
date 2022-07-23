const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const createJob = async (req, res) => {
    //??? req.user.userId
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
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