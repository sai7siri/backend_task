import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    personalDetails  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "personalData",
        required : true
    },

    medicalSchool : {
        type : String,
        required : true
    },
    GraduationYear : {
        type : Date,
        required : true
    },
    postGraduationYear : {
        type : Date,
        required : true
    },
    professionalAssociation : {
        type  :String
    },
    continuingEducation : {
        type : String
    }

},
{
    timestamps : true
}
);

export const EducationModel = mongoose.model("educationData" , educationSchema);