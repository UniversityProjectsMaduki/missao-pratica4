import { Injectable } from '@angular/core';
import { Livro } from "./livro";

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Use a Cabeça, Java",
      resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java. ",
      autores: ["Bert Bates", "Kathy Sierra"],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: "Java, como Programar",
      resumo: "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
      autores: ["Bert Bates", "Kathy Sierra"],
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = Math.max(...this.livros.map((l) => l.codigo || 0), 0);
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
