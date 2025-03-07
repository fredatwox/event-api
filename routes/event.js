import  {Router}  from "express";
import { addEvent, getEvent, updateEvent, deleteEvent } from "../controllers/event.js"


// create events router
const eventRouter = Router();


// define routes
eventRouter.post('/event', addEvent);

eventRouter.get('/event', getEvent);

eventRouter.patch('/event/:id', updateEvent);

eventRouter.delete('/event/:id', deleteEvent);


//Export router
export default eventRouter;