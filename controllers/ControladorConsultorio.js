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
    static async mostrarConsultaPost(req, res){
        req.flash('message', 'Com o diagnóstico hipotético em mãos, procure saber mais sobre a doença e, se precisar, procure um médico também!');
        res.render('consultorio/home');

        return
    }
}