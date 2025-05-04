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
      required : true
  },

  anniversary: {
    type: Date,
    required : true
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
