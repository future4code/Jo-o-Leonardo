import express, { Express, request, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("./users/create", (req: Request, rest: Response) => {
    try{
        const { name, CPF, dateOfBirthAsString } = req.body

        const [day, month, year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        const ageInMilissecounds: number = Date.now() - dateOfBirth.getTime()

        const agrInYears: number = ageInMilissecounds / 1000 / 60 / 60 / 24 / 365   
        
        if (agrInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        rest.status(201).send("Conta criada com sucesso!")
    } catch (error) {
        console.log(error)
        rest.send(error.message)

    }
    
})

app.get("users/all", (req: request, rest: Response) => {
    try {
        if(!accounts.length){
            rest.statusCode = 404
            throw new Error("Nenhuma conta encontrada!")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})