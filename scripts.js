window.onload = function () {
    const telInput = document.getElementById("fone");
    Inputmask("(99) 99999-9999").mask(telInput);
    
    const dataNascimentoInput = document.getElementById("data_nascimento");
    Inputmask("99/99/9999").mask(dataNascimentoInput);

    const emailInput = document.getElementById("email");
    Inputmask("email").mask(emailInput);
};

const trocarTema = document.getElementById('theme-toggle');
const iconeTema = document.getElementById('theme-icon');
const body = document.body;

trocarTema.addEventListener('click', () => {
    if (body.dataset.bsTheme === 'light') {
        body.setAttribute('data-bs-theme', 'dark');
        iconeTema.classList.remove('bi-sun');
        iconeTema.classList.add('bi-moon');
    } else {
        body.setAttribute('data-bs-theme', 'light');
        iconeTema.classList.remove('bi-moon');
        iconeTema.classList.add('bi-sun');
    }
});

