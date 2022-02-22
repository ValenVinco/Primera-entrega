const express = require('express')
const app = express()
const port = 3000;

const productos = [
  { 
  id: 1,
  name: "name",
  price: 50,
  image: "imagenes/producto-1.jpg",
  stock:50
},{ 
  id: 2,
  name: "name",
  price: 50,
  image: "imagenes/producto-2.jpg",
  stock:50
},{ 
  id: 3,
  name: "name",
  price: 50,
  image: "imagenes/producto-3.jpg",
  stock:50
},{ 
  id: 4,
  name: "name",
  price: 50,
  image: "imagenes/producto-4.jpg",
  stock:50
},{ 
  id: 5,
  name: "name",
  price: 50,
  image: "imagenes/producto-5.jpg",
  stock:50
},{ 
  id: 6,
  name: "name",
  price: 50,
  image: "imagenes/producto-6.jpg",
  stock:50
},
]
app.get('/api/products', (req, res) => {
  res.send(products)
});

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`http://localhost:3000`)
})
