import { Request, Response } from "express";
import Flatted from "flatted";

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: object) => {
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
   
      const name = "Deu Certo"
      const cpf = "44907141815"
   

    
    const doc = req.body.doc;
    if (cpf === doc) {
      JSON.stringify(doc, getCircularReplacer());
      console.log(doc)
      return res.json(`${name}: https://stisolucao.ddns.com.br:8090/?doc=${cpf}`
         
      )
    
    }
    return res.json({mensagem: res.status(403).send("erro na api")})
    
  } 
}