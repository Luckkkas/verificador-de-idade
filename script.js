function verificar() {

    var ano = Number(document.getElementById('txtano').value)
    var fsex = document.getElementsByName('radsex')
    var res = document.getElementById('res')

    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - ano

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    var genero = ''

    // HOMEM
    if (fsex[0].checked) {

        genero = 'Homem'

        if (idade < 10) {
            img.src = 'assets/garoto bebe.png'

        } else if (idade < 21) {
            img.src = 'assets/garoto ad.png'

        } else if (idade < 50) {
            img.src = 'assets/garoto adulto.png'

        } else {
            img.src = 'assets/idoso homem.jpg'
        }

    // MULHER
    } else if (fsex[1].checked) {

        genero = 'Mulher'

        if (idade < 10) {
            img.src = 'assets/garota bebe.png'

        } else if (idade < 21) {
            img.src = 'assets/garota ad.png'

        } else if (idade < 50) {
            img.src = 'assets/mulher adulta.png'

        } else {
            img.src = 'assets/garota idosa.png'
        }
    }

    res.innerHTML = `Você é ${genero} com ${idade} anos.`
    res.appendChild(img)
}