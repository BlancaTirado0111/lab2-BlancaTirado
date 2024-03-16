function crearUsuario(name, ci, email) {
    return { name: name, ci: ci, email: email };
}
var usuario = crearUsuario("Mariana Palacios", "1234567", "Mariana@palacios.com");
console.log(usuario);
