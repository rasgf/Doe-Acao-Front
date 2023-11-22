import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
  data: string;
  comentario: string;
  curtida: number;
  foto: string;
  tema: Tema | null;
  usuario: Usuario | null;
}