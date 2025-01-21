const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/token', (req, res) => {
    const { username, password } = req.body;

    // Verificar si el cuerpo de la solicitud contiene username y password
    if (!username || !password) {
        return res.status(400).json({ 
            error: 'Username and password are required', 
            success: false 
        });
    }

    // Generar las credenciales en base64 y el token
    const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
    const dateTime = new Date().toISOString();
    const token = `${base64Credentials}-${dateTime}`;
    
    // Respuesta exitosa
    res.json({ 
        token, 
        success: true 
    });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});