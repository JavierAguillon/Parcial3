var express = require("express");
var router = express.Router();
var mongoose = require('mongoose')

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", async (req, res) => {
  const { nombre, tipo, tamaño, ubicacion } = req.body;
  const errors = [];

  if (nombre.length < 0) {
    errors.push({ text: "Nombre demasiado corto" });
  }
  if (tipo != true) {
    errors.push({ text: "No se ha escrito un tipo de documento." });
  }
  if (tamaño.length < 0) {
    errors.push({ text: "Su documento no tiene tamaño." });
  }
  if (ubicacion.length < 0) {
    errors.push({ text: "Su documento no tiene tamaño." });
  }
  if (errors.length > 0) {
    res.render("add_registro", {
      errors,
      phone,
      email,
      arrive_date,
      departure_date,
      room,
      package
    });
  } else {
    const newReservation = new Reservation({
      firstname,
      lastname,
      phone,
      email,
      arrive_date,
      departure_date,
      room,
      package
    });
    await newReservation.save();
    res.send("Recibido");
  }
});

module.exports = router;
