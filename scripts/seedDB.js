// Dependencies
const mongoose = require("mongoose");
const db = require("../models");
//This file empties the Items & Users collections and inserts the items & users below
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/donations",
	{ useUnifiedTopology: true, useNewUrlParser: true }
);
const donations = [
	{
		eventName: "Name of Event",
		eventDate: new Date(Date.now()),
        lunchNumber: 200,
		eventDescription: "These lunches will be available from 11am-2pm, Address Here/Phonenumber",
		userName: "sampleUsername1"
	},

];
db.Item.remove({})
	.then(() => db.Item.collection.insertMany(donations))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
    });
    


