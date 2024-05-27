module.exports = class ControladorConsultorio {
    static mostrarContemplados(req, res) {
        res.render('consultorio/home');
    }

    static mostrarConsulta(req, res) {
        res.render('consultorio/consulta')
    }

    static mostrarAvaliar(req, res) {
        res.render('consultorio/avaliar')
    }
}