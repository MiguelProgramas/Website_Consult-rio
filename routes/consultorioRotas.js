const express = require('express');
const router = express.Router();
const ControladorConsultorio = require('../controllers/ControladorConsultorio');

router.get('/consulta', ControladorConsultorio.mostrarConsulta);
router.post('/consulta', ControladorConsultorio.mostrarConsultaPost);
router.get('/avaliar', ControladorConsultorio.mostrarAvaliar);
router.post('/doenca', ControladorConsultorio.mostrarDoencaPost);
router.get('/doenca/:id', ControladorConsultorio.mostrarDoenca);

module.exports = router;