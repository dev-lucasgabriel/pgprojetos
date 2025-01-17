function toggleMode() {
  const html = document.documentElement;  // Acessa o elemento <html>
  
  // Alterna a classe 'light' no elemento <html>
  html.classList.toggle("light");
}