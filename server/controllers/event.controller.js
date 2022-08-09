const Event = require("../models/event.model");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

const getOneEvent = (req, res) => {
    Event.findOne({_id: req.params.id})
        .then((singleEvent) => res.json(singleEvent))
        .catch((err) => {
            console.log("Error in get one event", err);
            res.status(400).json({
                message: "something went wrong in get one event",
                error: err
            });
        });
};

const getAllEvents = (req, res) => {
    Event.find({})
        .populate("createdBy", "username email")
        .then((allEvents) => res.json(allEvents))
        .catch((err) => {
            console.log("Error in get all events", err);
            res.status(400).json({
                message: "something went wrong in get all events",
                error: err
            });
        });
};

const createEvent = (req, res) => {
    const user  = jwt.verify(req.cookies.userToken, SECRET);
    Event.create({...req.body, createdBy: user._id})
        .then((newEvent) => res.status(201).json(newEvent))
        .catch((err) => {
            console.log("Error in create event", err);
            res.status(400).json({
                message: "something went wrong in create event",
                error: err
            });
        });
};

const updateEvent = (req, res) => {
    Event.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then((updatedEvent) => res.json(updatedEvent))
        .catch((err) => {
            console.log("Error in update event", err);
            res.status(400).json({
                message: "something went wrong in update event",
                error: err
            });
        });
};

const deleteEvent = (req, res) => {
    Event.findOneAndDelete({_id: req.params.id})
        .then((deletedEvent) => res.json(deletedEvent))
        .catch((err) => {
            console.log("Error in delete event", err);
            res.status(400).json({
                message: "something went wrong in delete event",
                error: err
            });
        });
};

module.exports = {
    getOneEvent,
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent 
};