const lista = [{id:0, titolo:"DEADPOOL", durata:"108min"},    
               {id:1, titolo:"Mulan", durata:"116min"}]

module.exports = class Film {

  constructor(film) { this.film=film }

  insert() {
    let nuovoid =lista.length
    this.film.id=nuovoid
    lista[nuovoid]=this.film
    return nuovoid;
  }

  static fetchAll() {
    return lista;
  }

  static fetchById(indice) {
    if (lista[indice]) {
      return lista[indice];
    }else{
      return undefined;
    }
  }
  static deleteByID(indice) {
    if (lista[indice] == undefined || lista[indice] == null){
      return 1; // 0 KO
    }else{
      lista[indice]=null;
      return 0; // OK
    }

  }

  static updateByID(indice,ragazza) {
    if (lista[indice] != undefined && lista[indice]!=null){
      lista[indice]=film;
      console.log(lista[indice]);
      return 0; // 0 OK, 1 KO
    }else{
      return 1; // KO
    }
  }

}
