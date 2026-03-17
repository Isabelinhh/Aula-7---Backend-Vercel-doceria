let categorias = [
    { id: 1, nome: 'Bolos Caseiros' },
    { id: 2, nome: 'Docinhos' },
    { id: 3, nome: 'Bebidas' },
];

let produtos = [
    //Bolos caseiros
    {
        categoriaId: 1,
        nome: 'Bolo de Cenoura',
        descricao: "Bolo de Cenoura com recheio de chocolate",
        preco: 16.00,
        imagem: 'https://www.receitasnestle.com.br/receitas/bolo-de-cenoura-com-cobertura-de-brigadeiro'
    },
    {
        categoriaId: 1,
        nome: 'Bolo de Chocolate',
        descricao: "Bolo de Chocolate com recheio de chocolate",
        preco: 17.00,
        imagem: 'https://www.oetker.com.br/receitas/r/bolo-de-chocolate-com-cobertura-de-brigadeiro'
    },
    {
        categoriaId: 1,
        nome: 'Bolo de Fubá',
        descricao: "Bolo de Fubá com recheio de goiabada",
        preco: 18.90,
        imagem: 'https://msabores.com/bolo-de-fuba-com-goiabada/'
    },
   

    //Docinhos
    {
        categoriaId: 2,
        nome: 'Brigadeiro de chocolate',
        descricao: "1 brigadeiro de chocolate com granulados",
        preco: 3.50,
        imagem: 'https://docepedia.com/receitas/brigadeiro-gourmet-de-chocolate-meio-amargo-namur'
    },
    {
        categoriaId: 2,
        nome: 'Beijinho',
        descricao: "Brigadeiro de coco",
        preco: 2.50,
        imagem: 'hhttps://www.receitasnestle.com.br/receitas/beijinho'
    },
   

    //Bebidas
    {
        categoriaId: 3,
        nome: 'Água',
        descricao: "Guarrafa de água 500ml.",
        preco: 3.90,
        imagem: 'https://aguamineralhydrate.com.br/produto/garrafa-agua-mineral-1-5-litros/'
    },
   
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };
