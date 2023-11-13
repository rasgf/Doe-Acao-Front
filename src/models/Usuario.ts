import Postagem  from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    cpf: string;
    cnpj: string;
    nascimento: string;
    postagem?: Postagem | null;
  }