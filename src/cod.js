document.querySelectorAll('[menu]').forEach(link => {
    const area1 = document.getElementById('caixa')
    link.onclick = function (e) {
        e.preventDefault ()
        fetch(link.getAttribute('menu'))
            .then(resp => resp.text())
            .then(html => area1.innerHTML = html)
    }
})

let vet = [... document.querySelectorAll('[menu]')]


const buttonPress = document.getElementById('btn')
buttonPress.addEventListener("click", mostrar)

function mostrar(){
    if(buttonPress.value === 'MENU'){
    vet.forEach(elemento => {
        elemento.classList.remove('menu')
        elemento.classList.add('menu2')
    })
    document.getElementById('idMenu').id = 'idMenu2'
    y = document.getElementById('idMenu2')
    }
    if(buttonPress.value === 'MENU') {buttonPress.value = 'OCULTAR'}
    else { buttonPress.value = 'MENU'
        document.getElementById('idMenu2').id = 'idMenu'
        
    }
}