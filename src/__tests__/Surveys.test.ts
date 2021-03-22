import request from 'supertest'
import { getConnection } from 'typeorm'
import app from '../app'

import createConnection from"../database"

describe('Surveys',() => {
    beforeAll(async () => {
    const connection = await createConnection() 
       await connection.runMigrations()
    })
    //responsavel por dropa todas as tabelas  apos o fim do teste
    afterAll( async () =>{
        const connection = getConnection();
        await connection.dropDatabase()
        await connection.close()
    })


    it('should be able to create a new user', async () => {
        const response = await request(app).post('/surveys').send({
            title:"title example.com",
            description:"description example",
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
    })


    
    it('should be able to get all surveys', async () => {
        await request(app).post('/surveys').send({
            title:"title example.com",
            description:"description example",

     })
     const response = await request(app).get('/surveys')
     expect(response.body.length).toBe(2)
    })
    
})