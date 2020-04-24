function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número') 
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //comando que faz limpar a área antes de mostrar a tabuada para nao ficar uma embaixo da outra
        while (c <= 10) {
            var item = document.createElement('option') //criou o option pelo JS ao invés de HTML
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}` //os options também tem que ter value, por isso esse comando está aqui, já que foi feito o select pelo JS. Cada option é um tab tab1 tab2 tab3...
            tab.appendChild(item)
            c++ //comando que incrementa o c para ir subindo até 10

        }
    }
   
}