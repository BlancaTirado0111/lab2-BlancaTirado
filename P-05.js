const emailList = [
    "javascript@gmail.com",
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mail0fPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
    "randomUser@hotmail.com"
];

function filtrarCorreosValidos(emailList) {
    const correoValidoRegex = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+\.)+[A-Za-z]{2,7}$/;

    const correosValidos = emailList.filter((email) => {
        return correoValidoRegex.test(email);
    });

    return correosValidos;
}

const correosFiltrados = filtrarCorreosValidos(emailList);
console.log("Correos válidos:");
console.log(correosFiltrados);
