class Usuario {
    constructor(codigo, usuario, senha) {
      this.codigo = codigo;
      this.#usuario = usuario;
      this.#senha = senha;
    }
  
    #usuario;
    #senha;

    getUsuario() {
        return this.#usuario;
    }

    getSenha() {
        return this.#senha;
    }
}
  
  module.exports = Usuario;