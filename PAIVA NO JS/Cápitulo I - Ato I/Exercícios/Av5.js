const carros = [
  {modelo: "Onix", marca: "Chevrolet"},
  {modelo: "Argo", marca: "Fiat"},
  {modelo: "Mobi", marca: "Fiat"},
  {modelo: "HB20", marca: "Hyundai"}
];

const Fiat = carros.filter(u => u.marca.includes("Fiat"));
console.log(Fiat)