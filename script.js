function togleMode() {
  const html = document.documentElement;
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/tobi.jpg')
    img.setAttribute('alt', 'Foto de Tobias Santos com camisa cinza e mochila preta, segurando uma caveira preta de óculos em frente ao seu rosto, prateleiras de loja com caixas de som ao fundo.')
  } else {
    //se tiver sem light mode, manter a imagem normal
   img.setAttribute('src', 'assets/avatar.png')
   img.setAttribute('alt', 'Foto de Tobias Santos sorrindo, usando camisa social preta.')
  }

}
