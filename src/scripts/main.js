const dataDoEvento = new Date('Aug 1, 2024 00:00:01');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horaAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horaAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horaAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);


document.querySelector('#botao').addEventListener('click', function() {
    let nome = document.querySelector('#nome').value;
    let celular = document.querySelector('#celular').value;
    const erroNome = document.querySelector('#erroNome');
    const erroCelular = document.querySelector('#erroCelular');

    mensagemErroNome();
    mensagemErroCelular();
    recarregaPágina();

    function mensagemErroNome(){
        if (nome === "") {
            erroNome.classList.remove('naoVisivel');
            erroNome.classList.remove('valido');
        } else { 
            erroNome.classList.add('naoVisivel');
            erroNome.classList.add('valido');
        }
    } 

    function mensagemErroCelular(){
        if (celular === "") {
            erroCelular.classList.remove('naoVisivel');
            erroCelular.classList.remove('valido');
        } else { 
            erroCelular.classList.add('naoVisivel');
            erroCelular.classList.add('valido');
        }
    } 

    function recarregaPágina() {
        if (erroNome.classList.contains('valido') && erroCelular.classList.contains('valido')) {
            const nomeConvidado = nome;

            location.reload();
            alert(`Parabens, ${nomeConvidado}! Sua presença foi marcada.`)
        }
    }
})


// if (celular === "") {
//     erroCelular.classList.remove('naoVisivel');
//     console.log('Celular invalido');
// } 


// alert('Parabens! Sua presença foi marcada');
// location.reload();