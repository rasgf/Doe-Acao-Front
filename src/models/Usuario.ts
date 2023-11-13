import Postagem  from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;    
    cpf: string;
    cnpj: string;
    senha: string;    
    foto: string;
    nascimento: string;
    postagem?: Postagem | null;
  }