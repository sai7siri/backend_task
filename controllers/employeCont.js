import { PersonalModel } from "../models/personalDet.js";

export const personalDetail = async (req , res)=>{
    try{

        const {fullName,
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
            typeOfProfile
        } = req.body;

        const user = await PersonalModel.findOne({fullName});

        if(user){
            return res.status(409).json({
                success : false,
                message : 'employee already existed'
            })
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
            typeOfProfile
        });

        await newEmployee.save();
        res.status(201).json({
            success : true,
            message : 'employee details created successful',
            data : newEmployee
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success : false,
            message : 'server error'
        })
    }
}


export const eductionalDetail = async (req , res)=>{
    try{

    }catch(err){
        res.status(500).json({
            success : false,
            message : 'server error'
        })
    }
}