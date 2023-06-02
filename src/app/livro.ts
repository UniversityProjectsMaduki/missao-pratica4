export class Livro {
  constructor(
    public codigo: number = 0,
    public titulo: string = '',
    public resumo: string = '',
    public codEditora: number = 0,
    public autores: Array<string> = []
  ) { }
}
