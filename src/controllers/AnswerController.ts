import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController{

async execute(request:Request, response:Response){

    const {value} = request.params;
    const {u} =request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveyUSer = await surveysUsersRepository.findOne({
        id:String(u)

        
    })
    if(!surveyUSer){
        throw new AppError("Survey does not exist")
       
    }

    surveyUSer.value = Number(value)
    
    await surveysUsersRepository.save(surveyUSer)
    
   
    
    return response.json(surveyUSer)

}

}

export {AnswerController}