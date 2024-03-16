function crearUsuario(name: string, ci: string, email: string) {
    return { name, ci, email };
}

const usuario = crearUsuario("Mariana Palacios", "1234567", "Mariana@palacios.com");
console.log(usuario);
  