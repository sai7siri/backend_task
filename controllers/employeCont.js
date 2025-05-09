import { EducationModel } from "../models/education.js";
import { PersonalModel } from "../models/personalDet.js";

export const personalDetail = async (req, res) => {
  try {
    const {
      fullName,
      lastName,
      languageOne,
      languageTwo,
      department,
      salutation,
      designation,
      gender,
      dob,
      anniversary,
      customerProfile,
      typeOfProfile,
    } = req.body;

    if (
      !fullName ||
      !lastName ||
      !languageOne ||
      !languageTwo ||
      !department ||
      !salutation ||
      !designation ||
      !gender
    ) {
      return res.status(400).json({
        success: false,
        message: "missing invalild fields",
      });
    }

    const user = await PersonalModel.findOne({ fullName });

    if (user) {
      return res.status(409).json({
        success: false,
        message: "employee already existed",
      });
    }

    const newEmployee = new PersonalModel({
      fullName,
      lastName,
      languageOne,
      languageTwo,
      department,
      salutation,
      designation,
      gender,
      dob,
      anniversary,
      customerProfile,
      typeOfProfile,
    });

    await newEmployee.save();
    res.status(201).json({
      success: true,
      message: "employee details created successful",
      data: newEmployee,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const eductionalDetail = async (req, res) => {
  try {
    const userId = req.params.id;
    const {
      personalDetails,
      medicalSchool,
      graduationYear,
      postGraduationYear,
      professionalAssociation,
      continuingEducation,
    } = req.body;

    if (!medicalSchool || !graduationYear) {
      return res.status(400).json({
        error: " something missing ! invalid inputs",
      });
    }

    const existed = await PersonalModel.findOne({ _id: userId });

    if (existed) {
      return res.status(400).json({
        success: false,
        message: "alreadu user created education details",
      });
    }

    const eduData = new EducationModel({
      medicalSchool,
      graduationYear,
      postGraduationYear,
      professionalAssociation,
      continuingEducation,
    });

    await eduData.save();

    res.status(201).json({
        success : true,
        message : 'education details created successful',
        data : eduData
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
