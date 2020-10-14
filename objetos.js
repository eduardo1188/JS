let recipes = [
  {ingrediente: "leche en polvo", cantidad: "1 litro"},
  {ingrediente: "chocolate en barra", cantidad: "3 barras"},
  {ingrediente: "azúcar", cantidad: "30 gramos"}
]
for (let i = 0; i < recipes.length; i++) {
  let recipe = recipes[i]
  console.log("ingrediente: " + recipe.ingrediente);
  console.log("cantidad: " + recipe.cantidad);
}
