import { Request, Response } from "express";

/* 
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
  */
export class BuscaDocControler{
  handle(req: Request, res: Response) {
   
      const name = "Deu Certo"
      const cpf = "44907141815"  
    
    const doc = JSON.parse(req.body.doc);
    const resposta =  JSON.parse(`${name}: https://stisolucao.ddns.com.br:8090/?doc=${doc}`)
  
    if (cpf === doc) {     
      return res.json(resposta)
    
    }
    return res.json({message: "Invalid CPF ou CNPJ"})
    
  } 
}