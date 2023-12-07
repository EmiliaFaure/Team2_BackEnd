import { addItemList } from "./helper.js"

var Placeholder = document.getElementById("placeholder")


fetch('http://127.0.0.1:5000/de-cultoDos')
    .then(response => response.json())
    .then(data => { 
        console.log(data)
        for (var pelicula of data) {
            addItemList(Placeholder, pelicula.nombre)
            addItemList(Placeholder, pelicula.sinopsis)
           
        } 
    })