import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  fullName: String,
  lastName: String,
  languageOne: String,
  languageTwo: String,
  department: String,
  salutation: String,
  designation: String,
  gender: String,

  dob: {
    type: Date,
    default: Date.now
  },

  anniversary: {
    type: Date,
    default: Date.now
  },

  customerProfile: {
    type: String,
    default: ""
  },

  typeOfProfile: {
    type: String,
    default: ""
  }
},
{
  timestamps: true
});

export const PersonalModel = mongoose.model('personalData', personalSchema);
