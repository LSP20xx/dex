const express = require("express");
const app = express();
app.use(express.json())

const datos = {
    usuarios: [
        { id: 1, nombre: 'Juan Pérez', edad: 30 },
        { id: 2, nombre: 'Ana Gómez', edad: 25 },
        { id: 3, nombre: 'Carlos Ruiz', edad: 35 }
    ]
};

app.get('/usuarios', (req, res) => {
    res.json(datos)
});

app.post('/usuarios', (req, res) => {
    var nuevoUser = req.body
    console.log(req)

    nuevoUser.id = datos.usuarios.length + 1

    datos.usuarios.push(nuevoUser)

    res.send('ok')
})


app.listen({ port: 5000 },
    () => {
        console.log("Listening...")
    }
);