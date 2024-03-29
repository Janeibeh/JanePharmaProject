import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient (Patient) model
    required: true,
  },
  availabilityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Availability', // Reference to the Doctor (User) model
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'canceled'],
    default: 'pending',
  },

  isPaid:{
    type: Boolean,
    default: true
  },

  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
},

{timestamps: true}
);

export default mongoose.model('Booking', bookingSchema);

// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;


// Consider the nature of appointments in your scenario. If appointments have fixed durations & scheduling is  straightforward
// using durations in minutes might be a simpler approach. But, if appointments can vary in duration and you need detailed tracking of appointment times, timestamps may be more appropriate.

// A hybrid approach may also be suitable, to use timestamps for the actual appointment time and
//  durations in minutes for the appointment length to provide the benefits of both approaches.


// {timestamps: true} automatically adds createdAt and updatedAt fields. A good practice to track when the document was created and last updated.