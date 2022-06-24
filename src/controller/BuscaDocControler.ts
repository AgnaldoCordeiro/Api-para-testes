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
    
    const doc = req.body.doc;
   
  
    if (cpf === doc) {   
      const mensagem = `https://stisolucao.ddns.com.br:8090/?doc=${doc}`
      //const obj = JSON.stringify(mensagem)
      return res.json({message: mensagem})
    
    }
    return res.json({message: "Invalid CPF ou CNPJ"})
    
  } 
}