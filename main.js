var guardapuntos=0
function aumentarpuntos () {
  guardapuntos=guardapuntos+1
  document.getElementById("puntos").innerHTML=guardapuntos
}

function guardarpuntos() {
  localStorage.setItem("puntos",guardapuntos)
}
