import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
  data: string;
  comentario: string;
  curtida: number;
  tema: Tema | null;
  usuario: Usuario | null;
}