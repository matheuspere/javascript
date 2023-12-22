function Contar(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] Faltam dados!')
    } else {
       res.innerHTML = 'Contando: '
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (i < f) {
        for(let c = i; c <= f; c+= p ) {
            res.innerHTML += `${c} \u{27A1}`
       }
        res.innerHTML += `\u{1F51A}`
       }
          else {
            for(let c = i; c >= f, c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
            
         }
         res.innerHTML += `\u{1F51A}`
}
}
