const products = [
  {
    id: "1",
    name: "SECADOR DE PELO PROFESIONAL MARCA TEKNIKPRO MODELO 2800 ALTRO * 1600w",
    price: 150,
    category: "electronicos",
    img: "https://acdn.mitiendanube.com/stores/198/447/products/2800-altro-b1-1cd38bb0b2f9b9b22e15722775189171-320-0.png",
    stock: 25,
    description: "Descripcion de Secador de pelo Teknikpro 2800",
  },
  {
    id: "2",
    name: "Juego De Tijeras De Adelgazamiento De 7 Profesional",
    price: 200,
    category: "herramientas",
    img: "https://http2.mlstatic.com/D_NQ_NP_892990-MLA54887543010_042023-O.webp",
    stock: 16,
    description: "Descripcion de Juego de tijeras Profesional",
  },
  {
    id: "3",
    name: "Shampoo matizador Elvive purple 200ml",
    price: 5,
    category: "capilares",
    img: "https://elbloquear.vtexassets.com/arquivos/ids/164916/Dise%C3%B1o-sin-titulo---2022-09-28T122620.637.png?v=637999759021870000",
    stock: 0,
    description: "Descripcion de Shampoo Matizador",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
