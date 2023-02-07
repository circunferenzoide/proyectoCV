//buscar datos de persona generada en API para mostrar en CV
fetch('https://randomuser.me/api/?exc=login,registered,phone,id')
    .then(response => response.json())
    .then(data => {
        let persona = data.results[0];
        document.getElementById('foto-perfil').setAttribute('src', persona.picture.large);
        Array.from(document.getElementsByClassName('nombreApellido')).map(elemento => {
            elemento.innerHTML = `${persona.name.first.toUpperCase()} ${persona.name.last.toUpperCase()}`;
        });
        persona.gender === 'female'
            ? document.getElementById('profesion').innerHTML = 'DESARROLLADORA Y DISEÑADORA WEB'
            : document.getElementById('profesion').innerHTML = 'DESARROLLADOR Y DISEÑADOR WEB'
        document.getElementById('edad').innerHTML = persona.dob.age;
        document.getElementById('nacionalidad').innerHTML = persona.nat;
        document.getElementById('email').innerHTML = persona.email;
        document.getElementById('direccion').innerHTML = `${persona.location.street.name}- ${persona.location.street.number}`;
        document.getElementById('pais').innerHTML = `${persona.location.city} - ${persona.location.state}, ${persona.location.country}`;
        document.getElementById('cel').innerHTML = persona.cell;
        Array.from(document.getElementsByClassName('ciudad')).map(elemento => {
            elemento.innerHTML = persona.location.city
        });
        Array.from(document.querySelectorAll('.años')).map(elemento => {
            let nacimiento = new Date(persona.dob.date).getFullYear();
            let nivel = elemento.classList[1];
            switch (nivel) {
                case 'primario':
                    elemento.innerHTML = `${nacimiento+5} - ${nacimiento+11}`;
                break;
                case 'secundario':
                    elemento.innerHTML = `${nacimiento+12} - ${nacimiento+18}`;
                break;
                case 'universitario':
                    elemento.innerHTML = `${nacimiento+19} - ${nacimiento+24}`;
                break;
                case 'masters':
                    elemento.innerHTML = `${nacimiento+26} - ${nacimiento+28}`;
                break;
            }
        });
    })
