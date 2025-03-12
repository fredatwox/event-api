import { EventModel } from "../models/event.js";




// Create Event
export const getEvent = async (req, res, next) => {
    try {
        const event = await EventModel.find();
        res.status(200).json(event);

    } catch (error) {
        next(error);
    }

};

// Get All Events
export const addEvent = async (req, res, next) => {
    // try {
    //     const { name, date, time, location } = req.body
    //     const event = new EventModel.find({ name, date, time, location });
    //     await event.save();
    //     res.status(200).json(event);
    // } catch (error) {
    //     next(error);
    // }

    const event = await EventModel.create(req.body);
    res.status(201).json(event);
};


// Update Event
export const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, date, time, location } = req.body;
        const updatedEvent = await EventModel.findByIdAndUpdate(id, { name, date, time, location }, { new: true });
        res.status(200).json(updatedEvent);
    }
    catch (error) {
        next(error);
    }

};


// Delete Event
export const deleteEvent = async (req, res, next) => {
    try {
        // const { id } = req.params;
        const eventId = req.params.id;

        const event = await EventModel.findByIdAndDelete(eventId);
        // res.status(200).json();

        if (!event) {
            return res.status(404).send("Event not found");
        }


        return res.status(200).send("Event Deleted");


    } catch (error) {
        next(error);
    }

};
