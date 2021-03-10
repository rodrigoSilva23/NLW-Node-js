import{Request,Response} from "express"
import { getCustomRepository } from "typeorm";
import { surveyRepository } from "../repositories/SurveyRepository";

class SurveyController{

    async create(request:Request , response:Response ){
        const {title,description} = request.body;

        const surverysRepository = getCustomRepository(surveyRepository)

        const survey = surverysRepository.create({
            title,
            description

        })
        await surverysRepository.save(survey)
        return response.status(201).json(survey)
    }

    async show(request:Request,response:Response){
        const surverysRepository = getCustomRepository(surveyRepository)
        
        const all = await surverysRepository.find()

        return response.json(all)

    }
}

export{SurveyController}