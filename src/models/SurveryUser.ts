import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("Surveys_Users")


class SurveyUser {

@PrimaryColumn()
 readonly id:string;

 @ManyToOne(()=>User)
 @JoinColumn({name:"user_id"})
 user:User;

 @Column()
 user_id:string;

 @Column()
 survey_id:string;

 @ManyToOne(()=>Survey)
 @JoinColumn({name:"survey_id"})
 survey:Survey;

 @Column()
 
 value:Number;

 @CreateDateColumn()
 created_at:Date

 constructor(){
     if(!this.id){
         this.id = uuid();
     }
 }
}

export{SurveyUser}