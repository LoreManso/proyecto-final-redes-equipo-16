
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Configuración de CORS
app.use(cors({
    origin: "http://localhost:5500",
    allowedHeaders: ["Content-Type", "X-Red-Equipo"],
    methods: ["GET", "POST"]
}));

// Permitir recibir información JSON
app.use(express.json());

// Datos de nuestro equipo
const N = 16;
const CLAVE_EQUIPO = `CIAF-${N}`;

// Middleware para validar el encabezado

function validarEquipo(req, res, next) {
    const claveRecibida = req.get("X-Red-Equipo");

    console.log("Header recibido:", claveRecibida);
    console.log("Header esperado:", CLAVE_EQUIPO);

    if (claveRecibida !== CLAVE_EQUIPO) {
        return res.status(401).json({
            mensaje: "Acceso no autorizado",
            error: "Encabezado X-Red-Equipo incorrecto o faltante"
        });
    }

    res.set("X-Servidor-Procesado", `Equipo-${N}`);

    next();
}

// Inventario inicial
let productos = [
    {
        id: 1,
        nombre: "Computador",
        cantidad: 10,
        sucursal: "Pereira"
    },
    {
        id: 2,
        nombre: "Impresora",
        cantidad: 5,
        sucursal: "Manizales"
    }
];

// GET: consultar inventario
app.get("/api/recurso", validarEquipo, (req, res) => {
    res.status(200).json({
        mensaje: "Inventario consultado correctamente",
        productos: productos
    });
});

// POST: registrar un producto
app.post("/api/recurso", validarEquipo, (req, res) => {
    const { nombre, cantidad, sucursal } = req.body || {};

    if (
        typeof nombre !== "string" ||
        nombre.trim() === "" ||
        !Number.isInteger(cantidad) ||
        cantidad < 0 ||
        typeof sucursal !== "string" ||
        sucursal.trim() === ""
    ) {
        return res.status(400).json({
            mensaje: "Datos del producto incorrectos"
        });
    }

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        cantidad: cantidad,
        sucursal: sucursal
    };

    productos.push(nuevoProducto);

    res.status(201).json({
        mensaje: "Producto registrado correctamente",
        producto: nuevoProducto
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
