$(document).ready(function () {

    const dataFinal = new Date("2025-06-30T23:59:59").getTime();

    function atualizarContador() {

        const agora = new Date().getTime();

        const diferenca = dataFinal - agora;

        if (diferenca > 0) {

            const dia = Math.floor(diferenca / (1000 * 60 * 60 * 24));

            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            $("#dias").text(dia);

            $("#horas").text(horas);

            $("#segundos").text(segundos);

            $("#minutos").text(minutos);

        } else {

            $(".contador").html("<h3>Inscrições Encerradas!</h3>");

        }

    }

    setInterval(atualizarContador, 1000);

});
