import mongoose from 'mongoose'

const availabilitySchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor', // Reference to the Doctor (User) model
        required: true,
    },

    day: {
        type: String,
        enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        required: true,
    },

    startTime: {
        type: Date,
        required: true,
    },

    endTime: {
        type: Date,
        required: true,
    },
},
{timestamps: true}
);

export default mongoose.model('Availability', availabilitySchema);

// const availabilitySchema = new mongoose.Schema({
//     doctorId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Doctor', // Reference to the Doctor (User) model
//         required: true,
//     },
//     ticketPrice:{
//         type: Number,
//         required: true
//     },

//     days:{
//         type: [String],
//         // required: true
//     },

//     startDatetime: {
//         type: [Date],
//         // required: true,
//     },

//     endDatetime: {
//         type: [Date],
//         // required: true,
//     },
// },
// {timestamps: true}
// );

// export default mongoose.model('Availability', availabilitySchema);

// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;


// Consider the nature of appointments in your scenario. If appointments have fixed durations & scheduling is  straightforward
// using durations in minutes might be a simpler approach. But, if appointments can vary in duration and you need detailed tracking of appointment times, timestamps may be more appropriate.

// A hybrid approach may also be suitable, to use timestamps for the actual appointment time and
//  durations in minutes for the appointment length to provide the benefits of both approaches.


// {timestamps: true} automatically adds createdAt and updatedAt fields. A good practice to track when the document was created and last updated.