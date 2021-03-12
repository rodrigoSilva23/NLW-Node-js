import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveryUser";

@EntityRepository(SurveyUser) 
class SurveysUsersRepository extends Repository<SurveyUser>{


}

export { SurveysUsersRepository };
