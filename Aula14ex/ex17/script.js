function gerartabuada() {
let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')

if (num.value.length == 0) {
    window.alert ('Por Favor, digite um número!')
} else {
    let n = Number(num.value)
    let c = 1
    while (c <=10)
    item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
    c++
    
}

}
