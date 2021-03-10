import { EntityRepository, Repository } from "typeorm";
import { survey } from "../models/Survey";

@EntityRepository(survey) 
class surveyRepository extends Repository<survey>{


}

export { surveyRepository };
