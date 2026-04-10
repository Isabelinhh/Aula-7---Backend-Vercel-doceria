let categorias = [
    { id: 1, nome: 'Bolos Caseiros' },
    { id: 2, nome: 'Docinhos' },
    { id: 3, nome: 'Bebidas' },
];


let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: 'Bolo de Cenoura',
        descricao: 'Bolo fofinho de cenoura com cobertura de chocolate.',
        preco: 16.00,
        imagem: 'bolo_cenoura.jpg'
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'Brigadeiro',
        descricao: 'Docinho de chocolate feito com leite condensado, cacau e manteiga.',
        preco: 3.00,
        imagem: 'brigadeiro.jpg'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };
