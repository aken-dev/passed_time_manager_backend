const mongoose = require('mongoose');
const ScheduleSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    howmany: {
        type: String,
    },
    days: {
        type: Number,
    },
    times: {
        type: Number,
    },
    doneDateTime: {
        type: Date,
    },
    status: {
        type: Number,
    },
    exid: {
        type: String,
    }
},{ collection: 'schedules'}
)

export = mongoose.model("Schedule", ScheduleSchema);
