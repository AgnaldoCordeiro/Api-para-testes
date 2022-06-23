import { Request, Response } from "express";

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export class BuscaDocControler{
  handle(req: Request, res: Response) {
    const user = {
      name: "Deu Certo",
      doc: "44907141815"
    }

    
    const doc = req.body.doc

    if (user.doc == req.body.doc) {
      const result = JSON.stringify(Object.fromEntries(doc), getCircularReplacer());
      return res.json(
        { mensagem: res.status(201).send(`${user.name}: https://stisolucao.ddns.com.br:8090/?doc=${result}`+ console.log(doc + result)) },
         
      )
     
    }
    return res.json({mensagem: res.status(403).send("erro na api")})
    
  } 
}