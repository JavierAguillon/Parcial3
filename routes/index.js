var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/reservaciones/nueva-reservacion',async (req,res)=>{
  const {firstname , lastname, phone, email, arrive_date, departure_date, room, package} = req.body;
  const errors = [];
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const phoneRegexp = /^\d{8}-\d{1}$/;
  if(phoneRegexp.test(phone) != true){
      errors.push({text: "Nùmero de telefono incorrecto."})
  }
  if(emailRegexp.test(email)!= true){
      errors.push({text: "Correo electronico incorrecto."})
  }
  if(departure_date <= arrive_date){
      errors.push({text: 'La fecha de salida no puede ser menor o igual a la fecha de llegada.'})
  }
  if(errors.length > 0){
      res.render('add_reservation', {errors, phone, email, arrive_date,
           departure_date, room, package})
  }else{
      const newReservation = new Reservation({firstname, lastname, phone, email,
      arrive_date,departure_date,room,package});
      await newReservation.save();
      res.send('Recibido')
  }
})

module.exports = router;

module.exports = router;
