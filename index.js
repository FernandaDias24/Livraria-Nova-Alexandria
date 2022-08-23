import { Express } from "express";
import LivrariaController from "./Controller/LivrariaController.js";
import LivrariaModels from "./Models/LivrariaModels.js";

class AcervoDeLivros
{
    const catalogoLivros(idLivro, Titulo, Autor, Editora, Genero, ISBN, Quantidade)
    {
        this.idLivro = idLivro
        this.Titulo = Titulo
        this.Autor = Autor
        this.Editora = Editora
        this.Genero = Genero
        this.ISBN = ISBN
        this.Quantidade = Quantidade
    }

}
