const Doenca = require("../models/Doenca");

module.exports = class ControladorConsultorio {
    static async mostrarContemplados(req, res) {

        const Clamidia = {
            nome: 'Clamídia',
            titulo: 'O agente causador: bactéria Chlamydia trachomatis',
            sintomas: 'Sintomas diferem, porém sempre existirá dor ao urinar e algum corrimento',
            tratamento: 'Tratamento: uso de antibióticos receitados segundo a especificidade do caso'
            }
    
        const Gonorreia = {
            nome: 'Gonorréia',
            titulo: 'O agente causador: bactéria Neisseria gonorrhoeae',
            sintomas: 'Sintomas diferem, porém sempre existirá secreção e desconforto físico geral',
            tratamento: 'Tratamento: uso de antibióticos receitados segundo a especificidade do caso'
        }
    
        const Tricomoniase = {
            nome: 'Tricomoníase',
            titulo: 'O agente causador: parasita Trichomonas Vaginalis',
            sintomas: 'Corrimento amarelo; coceira; odor forte; irritação vulvar e dificuldade de urinar',
            tratamento: 'Tratamento: uso de antibióticos (como metronidazol) e quimioterapia'
        }
    
        const HPV = {
            nome: 'HPV',
            titulo: 'O agente causador: Human Papiloma Virus',
            sintomas: 'Verrugas genitais; prurido; queimação e sangramento',
            tratamento: 'Tratamento: remoção das verrugas (laser; crioterapia ou cirurgia)'
    }
    
        const CancroMole = {
            nome: 'Cancro Mole',
            titulo: 'O agente causador: bactéria Haemophilus ducreyi',
            sintomas: 'Úlcera dolorosa no órgão genital; secreção amarelo-esverdeada',
            tratamento: 'Tratamento: uso de antibióticos, como azitromicina, ceftriaxona e entre outros...'
    }
    
        const Danovanose = {
            nome: 'Danovanose',
            titulo: 'O agente causador: bactéria Klebsiella granulomatis',
            sintomas: 'Inchaço na região genital; presença de caroço ou nódulos; feridas que não doem',
            tratamento: 'Tratamento: uso de antibióticos receitados segundo a especificidade do caso'
    }
    
        const objects = [Clamidia, Gonorreia, Tricomoniase, HPV, CancroMole, Danovanose];

        const verificar = await Doenca.findOne({where: {titulo: 'O agente causador: bactéria Chlamydia trachomatis'}});

    if (!verificar) {

        try {

            for (let i = 0; i < objects.length; i++) {
                await Doenca.create(objects[i]);
            }
        }
        catch(error) {
            console.log(`Houve uma falha ao atualizar o banco de dados: ${error}`)
        }
    }

        const doencas = await Doenca.findAll(
        );

        const read = doencas.map((resultado) => resultado.get({ plain: true }))

        res.render('consultorio/home', { read });
    }

    static mostrarConsulta(req, res) {
        res.render('consultorio/consulta')
    }

    static mostrarAvaliar(req, res) {
        res.render('consultorio/avaliar')
    }

    static async mostrarConsultaPost(req, res){
        req.flash('message', 'Com o diagnóstico hipotético em mãos, procure saber mais sobre a doença e, se precisar, procure um médico também!');
        res.redirect('/');

        return
    }

}