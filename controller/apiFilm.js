const Film = require("../model/Film");

exports.getFilm=(req, res, next) => {
        const lista = Film.fetchAll();
        res.json(lista);
}


exports.getFilm=(req, res, next) => {
        let jsonr=Film.fetchById(req.params.id);
        if ( typeof jsonr == 'undefined') {
            jsonr = { "msg": `Risorsa id ${req.params.id} non trovata` }
        }
        res.json(jsonr);
}

exports.insertFilm=(req, res, next) => {
        let jsonr = req.body;
        console.log(jsonr)
        let jsoni={};
        let film = new Film(jsonr)
        let idFilm=film.insert();
        jsoni.msg = `Json ricevuto dal client correttamente id=${idFilm}`;
        jsoni.inserted_Obj = { ...jsonr }
        res.json(jsoni);
}

exports.deleteFilm=(req, res, next) => {
        let jsoni;
        let idFilm = req.params.id;
        let risultato = Film.deleteByID(idFilm)
        console.log(risultato);
        if (risultato==0){
            jsoni= { "msg": `id: ${idFilm} cancellato correttamente ` }
        }else{
            jsoni= { "msg": `id: ${idFilm} non trovato in lista ` }
        }
        res.json(jsoni);
}

exports.updateFilm=(req, res, next) => {
        let idFilm = req.params.id;
        let jsonr = req.body;
        jsonr.id=idFilm
        let jsoni = {}
        jsoni.ricevuto = { ...jsonr }
        let risultato = Film.updateByID(idFilm,jsonr)
        if (risultato==0){
            jsoni.msg = `id: ${idFilm} aggiornato correttamente `
        }else{
            jsoni.msg = `id: ${idFilm} non trovato in lista `
        }
        res.json(jsoni);
}
