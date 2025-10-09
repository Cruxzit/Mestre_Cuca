const recipes = [
  {
    id: 1,
    title: "Lasanha Bolonhesa",
    image: "/receita1.jpg",
    description: "Uma deliciosa lasanha com molho bolonhesa tradicional e queijo gratinado.",
    time: "1h 20min",
    difficulty: "Média",
    ingredients: ["500g de carne picada", "1 embalagem de massa para lasanha", "400g de molho de tomate", "200g de queijo ralado"],
    instructions: [
      "Preparar o molho bolonhesa cozinhando a carne e adicionando o molho de tomate.",
      "Montar camadas de massa, molho e queijo.",
      "Levar ao forno a 180°C por cerca de 40 minutos até dourar.",
    ],
  },
  {
    id: 2,
    title: "Risotto de Camarão",
    image: "/receita2.jpg",
    description: "Risotto cremoso com camarões frescos e toque de limão siciliano.",
    time: "50min",
    difficulty: "Fácil",
    ingredients: ["300g de arroz arbóreo", "200g de camarão", "caldo de legumes", "1 cebola"],
    instructions: ["Refogar a cebola, adicionar o arroz e regar com caldo aos poucos.", "Adicionar os camarões nos últimos minutos.", "Finalizar com manteiga e queijo parmesão."],
  },
  {
    id: 3,
    title: "Bolo de Chocolate",
    image: "/receita3.jpg",
    description: "Bolo fofinho de chocolate com cobertura cremosa.",
    time: "1h",
    difficulty: "Fácil",
    ingredients: ["200g de farinha", "200g de açúcar", "3 ovos", "100g de cacau"],
    instructions: ["Misturar os ingredientes secos e depois os líquidos.", "Assar a 180°C por 35-40 minutos.", "Cobrir com ganache quando estiver frio."],
  },
  {
    id: 4,
    title: "Frango Assado com Batatas",
    image: "/receita4.jpg",
    description: "Frango temperado no forno com batatas douradas.",
    time: "1h 30min",
    difficulty: "Fácil",
    ingredients: ["1 frango inteiro (1.5kg)", "4 batatas médias", "3 dentes de alho", "2 ramos de alecrim", "Azeite, sal e pimenta a gosto"],
    instructions: [
      "Pré-aquecer o forno a 200°C.",
      "Temperar o frango com sal, pimenta, alho picado e azeite.",
      "Colocar as batatas cortadas à volta do frango e assar por 1h20-1h30 até dourar.",
      "Deixar repousar 10 minutos antes de servir."
    ],
  },
  {
    id: 5,
    title: "Salmão Grelhado com Legumes",
    image: "/receita5.jpg",
    description: "Salmão grelhado com legumes salteados e molho de ervas.",
    time: "40min",
    difficulty: "Fácil",
    ingredients: ["2 postas de salmão", "1 abobrinha", "1 cenoura", "1 pimento vermelho", "Ervas frescas (salsa, coentros)", "Azeite, sal e pimenta"],
    instructions: [
      "Temperar o salmão com sal, pimenta e um fio de azeite.",
      "Grelhar o salmão em fogo médio 3-4 minutos de cada lado.",
      "Saltear os legumes em cubos com azeite até ficarem macios.",
      "Servir o salmão sobre os legumes e finalizar com ervas frescas." 
    ],
  },
  {
    id: 6,
    title: "Bacalhau à Brás",
    image: "/receita6.jpg",
    description: "Clássico português de bacalhau desfiado com batata palha e ovo.",
    time: "45min",
    difficulty: "Média",
    ingredients: ["400g de bacalhau dessalgado", "4 ovos", "2 cebolas", "200g de batata palha", "Azeite, sal, pimenta e salsa"],
    instructions: [
      "Desfiar o bacalhau e refogar a cebola em azeite até ficar translúcida.",
      "Adicionar o bacalhau e envolver por alguns minutos.",
      "Adicionar as batatas palha e misturar.",
      "Bater os ovos e verter sobre a mistura até cozer ligeiramente (não deixar secar demasiado).",
      "Polvilhar com salsa e servir quente." 
    ],
  },
  {
    id: 7,
    title: "Feijoada",
    image: "/receita7.jpg",
    description: "Feijoada tradicional com carnes de porco e enchidos.",
    time: "2h",
    difficulty: "Difícil",
    ingredients: ["500g de feijão preto", "300g de carne de porco", "200g de chouriço", "1 cebola", "2 dentes de alho", "Folha de louro", "Azeite, sal e pimenta"],
    instructions: [
      "Deixar o feijão de molho de um dia para o outro.",
      "Cozinhar o feijão com a folha de louro até ficar macio.",
      "Refogar as carnes e enchidos à parte e juntar ao feijão.",
      "Temperar a gosto e deixar apurar por mais de 30 minutos." 
    ],
  },
  {
    id: 8,
    title: "Sopa de Legumes",
    image: "/receita8.jpg",
    description: "Sopa nutritiva com legumes frescos.",
    time: "35min",
    difficulty: "Fácil",
    ingredients: ["2 cenouras", "2 batatas", "1 courgette", "1 cebola", "1 litro de caldo de legumes", "Azeite, sal e pimenta"],
    instructions: [
      "Picar todos os legumes e refogar a cebola em azeite.",
      "Adicionar os legumes e o caldo, cozinhar até ficarem macios.",
      "Triturar a sopa até ficar homogénea (opcional) e ajustar temperos." 
    ],
  },
  {
    id: 9,
    title: "Pizza Margherita",
    image: "/receita9.jpg",
    description: "Pizza caseira com molho de tomate, mozzarella e manjericão.",
    time: "1h 15min",
    difficulty: "Média",
    ingredients: ["Massa para pizza (ou 250g de farinha)", "200g de molho de tomate", "150g de mozzarella", "Folhas de manjericão", "Azeite, sal"],
    instructions: [
      "Abrir a massa em disco e espalhar o molho de tomate.",
      "Adicionar a mozzarella e levar ao forno bem quente (250°C) por 8-12 minutos.",
      "Finalizar com folhas de manjericão e um fio de azeite." 
    ],
  },
  {
    id: 10,
    title: "Caril de Frango",
    image: "/receita10.jpg",
    description: "Frango suculento em molho de caril aromático.",
    time: "1h",
    difficulty: "Média",
    ingredients: ["500g de peito de frango", "1 cebola", "2 colheres de sopa de caril em pó", "200ml de leite de coco", "Alho, gengibre, óleo"],
    instructions: [
      "Refogar cebola, alho e gengibre.",
      "Adicionar o frango cortado e o caril, selar a carne.",
      "Adicionar o leite de coco e cozinhar até o frango ficar macio.",
      "Ajustar sal e servir com arroz." 
    ],
  },
  {
    id: 11,
    title: "Panquecas Americanas",
    image: "/receita11.jpg",
    description: "Panquecas fofas servidas com mel ou xarope de ácer.",
    time: "25min",
    difficulty: "Fácil",
    ingredients: ["200g de farinha", "2 colheres de sopa de açúcar", "2 ovos", "300ml de leite", "1 colher de chá de fermento"],
    instructions: [
      "Misturar os ingredientes secos e depois os líquidos até obter uma massa homogénea.",
      "Fritar porções em frigideira antiaderente em fogo médio até dourar dos dois lados.",
      "Servir com mel, manteiga ou frutas." 
    ],
  },
  {
    id: 12,
    title: "Tiramisu",
    image: "/receita12.jpg",
    description: "Sobremesa italiana clássica com café e mascarpone.",
    time: "40min + 4h frio",
    difficulty: "Média",
    ingredients: ["250g de mascarpone", "3 ovos (gemas)", "100g de açúcar", "Biscoitos tipo champagne", "Café forte", "Cacau em pó"],
    instructions: [
      "Bater as gemas com açúcar e incorporar o mascarpone.",
      "Molhar os biscoitos no café e montar camadas com o creme.",
      "Levar ao frigorífico por pelo menos 4 horas e polvilhar cacau antes de servir." 
    ],
  },
  {
    id: 13,
    title: "Polvo à Lagareiro",
    image: "/receita13.jpg",
    description: "Polvo assado no forno com azeite e batatas a murro.",
    time: "1h 40min",
    difficulty: "Difícil",
    ingredients: ["1 polvo (aprox. 1kg)", "4 batatas pequenas", "Alho, azeite, sal, pimenta", "Salsa"],
    instructions: [
      "Cozinhar o polvo até ficar macio (40-60 minutos dependendo do tamanho).",
      "Assar o polvo com azeite, alho e batatas a murro a 200°C até dourar.",
      "Polvilhar com salsa e servir quente." 
    ],
  },
  {
    id: 14,
    title: "Couscous de Legumes",
    image: "/receita14.jpg",
    description: "Prato leve de couscous com legumes salteados.",
    time: "30min",
    difficulty: "Fácil",
    ingredients: ["200g de couscous", "1 cenoura", "1 courgette", "1 cebola", "Caldo de legumes", "Azeite"],
    instructions: [
      "Preparar o couscous com caldo quente e reservar.",
      "Saltear os legumes em cubos com azeite até ficarem tenros.",
      "Misturar o couscous com os legumes e temperar." 
    ],
  },
  {
    id: 15,
    title: "Hambúrguer Caseiro",
    image: "/receita15.jpg",
    description: "Hambúrguer artesanal com carne fresca e pão brioche.",
    time: "45min",
    difficulty: "Fácil",
    ingredients: ["500g de carne picada", "1 ovo", "Pão brioche", "Alface, tomate, queijo", "Sal e pimenta"],
    instructions: [
      "Temperar a carne com sal e pimenta e formar os hambúrgueres.",
      "Grelhar os hambúrgueres até o ponto desejado.",
      "Montar com pão, alface, tomate e queijo." 
    ],
  },
  {
    id: 16,
    title: "Paella Valenciana",
    image: "/receita16.jpg",
    description: "Paella tradicional com frango, coelho e feijão-verde.",
    time: "1h 30min",
    difficulty: "Difícil",
    ingredients: ["300g de arroz para paella", "200g de frango", "150g de coelho (opcional)", "Feijão-verde", "Açafrão, caldo de galinha"],
    instructions: [
      "Dourar as carnes e refogar com os temperos.",
      "Adicionar o arroz e o caldo com açafrão e cozinhar sem mexer até absorver.",
      "Adicionar os legumes nos últimos minutos e deixar repousar antes de servir." 
    ],
  },
  {
    id: 17,
    title: "Quiche de Espinafres e Queijo",
    image: "/receita17.jpg",
    description: "Quiche cremosa com recheio de espinafres e queijo.",
    time: "1h",
    difficulty: "Média",
    ingredients: ["1 base de massa folhada", "200g de espinafres", "3 ovos", "200ml de natas", "100g de queijo ralado"],
    instructions: [
      "Refogar os espinafres até murcharem.",
      "Bater ovos com natas e misturar com o queijo e os espinafres.",
      "Verter sobre a massa e assar a 180°C por 35-40 minutos." 
    ],
  },
  {
    id: 18,
    title: "Ratatouille",
    image: "/receita18.jpg",
    description: "Prato francês de legumes assados em camadas.",
    time: "1h 10min",
    difficulty: "Média",
    ingredients: ["1 beringela", "1 courgette", "2 tomates", "1 pimento", "Alho, azeite, ervas provençais"],
    instructions: [
      "Cortar os legumes em fatias finas e dispor em camadas numa assadeira.",
      "Regar com azeite e polvilhar ervas.",
      "Assar a 180°C por cerca de 40-50 minutos até os legumes ficarem macios." 
    ],
  },
  {
    id: 19,
    title: "Arroz de Pato",
    image: "/receita19.jpg",
    description: "Arroz de pato tradicional gratinado no forno.",
    time: "1h 45min",
    difficulty: "Difícil",
    ingredients: ["1 pato pequeno cozido", "250g de arroz", "Chouriço", "Caldo de pato", "Cebola e alho"],
    instructions: [
      "Desfiar o pato e refogar com cebola e alho.",
      "Adicionar o arroz e o caldo, cozinhar até quase seco.",
      "Transferir para um tabuleiro, cobrir com rodelas de chouriço e levar ao forno para gratinar." 
    ],
  },
  {
    id: 20,
    title: "Crepes com Nutella",
    image: "/receita20.jpg",
    description: "Crepes finos recheados com Nutella e frutas.",
    time: "30min",
    difficulty: "Fácil",
    ingredients: ["200g de farinha", "3 ovos", "500ml de leite", "Nutella", "Frutas a gosto"],
    instructions: [
      "Preparar a massa batendo os ingredientes até ficar lisa.",
      "Fazer crepes finos numa frigideira antiaderente.",
      "Rechear com Nutella e frutas e servir." 
    ],
  },
  {
    id: 21,
    title: "Chili com Carne",
    image: "/receita21.jpg",
    description: "Ensopado de carne moída com feijão e especiarias.",
    time: "1h 10min",
    difficulty: "Média",
    ingredients: ["400g de carne picada", "1 lata de feijão vermelho", "1 cebola", "Pimenta chili em pó", "Tomate pelado"],
    instructions: [
      "Refogar a cebola e a carne até dourar.",
      "Adicionar tomate pelado, feijão e chili em pó e cozinhar por 30-40 minutos.",
      "Ajustar temperos e servir com arroz ou nachos." 
    ],
  },
];

export default recipes;
