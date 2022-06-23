import { Request, Response } from "express";


export class BuscaDocControler{
  handle(req: Request, res: Response) {
    const user = {
      name: "Deu Certo",
      doc: "44907141815"
    }
    const doc = req.body.doc

    if (user.doc == req.body.doc) {
      return res.json({mensagem: res.status(201).send(`${user.name}: https://stisolucao.ddns.com.br:8090/?doc=${doc}`)})
      
    }
    return res.json({mensagem: res.status(403).send("erro na api")})
    
  } 
}