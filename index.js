class AcervoDeLivros{
    constructor (idLivro, Titulo, Autor, Editora, Genero, ISBN, Quantidade){
        this.idLivro = idLivro;
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Editora = Editora;
        this.Genero = Genero;
        this.RegistroLivro = ISBN;
        this.Quantidade = Quantidade;
    }
}

const item1 = new AcervoDeLivros (01, "Mainstream - A guerra global das mídias e das culturas", "Frédéric Martel", "Civilização Brasileira", "Sociedade e Cultura", "978-85-200-1076-1", 5);
const item2 = new AcervoDeLivros (02, "Como as Democracias Morrem", "Steven Levitsky e Daniel Ziblatt", "Zahar", "Política", "978-85-378-1800-8", 2);
const item3 = new AcervoDeLivros (03, "A Ferro e Fogo - A historia e a devastação da mata Atlântica Brasileira", "Warren Dean", "Companhia das Letras", "Historia do Brasil", "978-85-7164-590-5", 6);
const item4 = new AcervoDeLivros (04, "Sobre o Autoritarismo Brasileiro ", "Lilia Moritz Schwartz", "Companhia das Letras", "Politica e Ciencias Socias", "978-85-359-3219-5", 1);
const item5 = new AcervoDeLivros (05, "O demônio do meio dia - uma anatomia da depressão", "Andrew Solomon", "Companhia das Letras", "Saúde", "978-85-359-2463-3", 6);

console.log (item1);
console.log (item2);
console.log (item3);
console.log (item4);
console.log (item5);

