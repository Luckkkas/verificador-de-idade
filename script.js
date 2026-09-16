function verificar() {

    // Pega a data atual
    var data = new Date()

    // Pega o ano atual
    var ano = data.getFullYear()

    // Pega o valor digitado no campo ano
    var fano = document.getElementById('txtano')

    // Pega a div onde aparecerá o resultado
    var res = document.querySelector('div#res')

    // Verifica se o campo está vazio ou se o ano é inválido
    if (fano.value.length == 0 || Number(fano.value) > ano) {

        // Mostra uma mensagem de erro
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        // Pega os dois radio buttons de sexo
        var fsex = document.getElementsByName('radsex')

        // Calcula a idade
        var idade = ano - Number(fano.value)

        // Cria uma variável para guardar o gênero
        var gênero = ''

        // Cria uma imagem
        var img = document.createElement('img')

        // Dá o ID "foto" para a imagem
        img.setAttribute('id', 'foto')


        // Verifica se o primeiro radio button foi marcado
        if (fsex[0].checked) {

            // Define o gênero como Homem
            gênero = 'Homem'


            // Verifica a idade
            if (idade >= 0 && idade < 10) {

                // Criança
                img.setAttribute('src', 'assets/bebe homen.png')

            } else if (idade < 21) {

                // Jovem
                img.setAttribute('src', 'assets/jovem ad.png')

            } else if (idade < 50) {

                // Adulto
                img.setAttribute('src', 'assets/homen adulto.png')

            } else {

                // Idoso
                img.setAttribute('src', 'assets/idoso homen.png')
            }


        // Verifica se o segundo radio button foi marcado
        } else if (fsex[1].checked) {

            // Define o gênero como Mulher
            gênero = 'Mulher'


            // Verifica a idade
            if (idade >= 0 && idade < 10) {

                // Criança
                img.setAttribute('src', 'assets/garota bebe.png')

            } else if (idade < 21) {

                // Jovem
                img.setAttribute('src', 'assets/garota ad.png')

            } else if (idade < 50) {

                // Adulto
                img.setAttribute('src', 'assets/mulher adulta.png')

            } else {

                // Idoso
                img.setAttribute('src', 'assets/garota idosa.png')
            }
        }


        // Centraliza o resultado
        res.style.textAlign = 'center'

        // Mostra a mensagem
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

        // Coloca a imagem dentro da div
        res.appendChild(img)
    }
}