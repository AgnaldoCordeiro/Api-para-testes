import { Request, Response } from "express";


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
      const result = JSON.stringify(doc, getCircularReplacer());
      return res.json(`${name}: https://stisolucao.ddns.com.br:8090/?doc=${result}`
         
      )
    
    }
    return res.json("CPF ou CNPJ Inválidos! favor conferir")
    
  } 
}