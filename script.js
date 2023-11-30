function toggleMode() {
  /*alert("oi")  msg aparece no topo da tela*/
  const html = document.documentElement
  html.classList.toggle("light") /* essa função realiza troca de class, clara e escura*/

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substiuir a imagem

  if (html.classList.contains("light")) {
    // se tver light mode, adicionar a img lihgt
    img.setAttribute("src", "./assets/light.jpg")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/black.jpg")
  }
}
