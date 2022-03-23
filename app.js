const a = document.querySelector('.first')
const b = document.querySelector('.second')
const end = document.querySelector('.end')
const pl = document.querySelector('.pl')
const min = document.querySelector('.min')
const mul = document.querySelector('.mul')
const div = document.querySelector('.div')

end.onclick = ()=>{
    pl.innerHTML = Number(a.value) + Number(b.value)
    min.innerHTML = Number(a.value) - Number(b.value)
    mul.innerHTML = Number(a.value) * Number(b.value)
    div.innerHTML = Number(a.value) / Number(b.value)
}
