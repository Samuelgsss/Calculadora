// seleciona o elemento HTML <main> e armazena na constante "main"
const main = document.querySelector("main")

// seleciona o elemento HTML :root e armazena na constante "root", que é usado para definir variáveis CSS personalizadas
const root = document.querySelector(":root")

// seleciona o elemento HTML <input> com o ID "input" e armazena na constante "input"
const input = document.getElementById("input")

// seleciona o elemento HTML <input> com o ID "result" e armazena na constante "resultInput"
const resultInput = document.getElementById("result")

// array que contém as teclas permitidas que podem ser digitadas no input
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// itera por todos os elementos HTML com a classe "charKey" e adiciona um listener de clique que adiciona o valor do atributo "data-value" ao input
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

// adiciona um listener de clique ao elemento HTML com o ID "clear" que limpa o input e define o foco no input
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus()
})

// adiciona um listener de tecla ao input que impede a digitação de teclas que não estão no array "allowedKeys" e executa a função "calculate()" quando a tecla "Enter" é pressionada
input.addEventListener("keydown", function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
})

// adiciona um listener de clique ao elemento HTML com o ID "equal" que executa a função "calculate()"
document.getElementById("equal").addEventListener("click", calculate)

// função que calcula o resultado da expressão matemática inserida no input, exibe o resultado no elemento HTML com o ID "result" e adiciona ou remove a classe "error" dependendo se houve erro ou não
function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove("error")
}

// adiciona um listener de clique ao elemento HTML com o ID "copyToClipboard" que copia o resultado no elemento HTML com o ID "result" para a área de transferência e atualiza o texto do botão para "Copied!" e adiciona a classe "success"
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})
// Define um evento de clique no elemento com ID "themeSwitcher"
document.getElementById("themeSwitcher").addEventListener("click", function () {
    // Verifica se o tema atual é o escuro
    if (main.dataset.theme === "dark") {
    // Altera as propriedades de estilo das variáveis CSS para o tema claro
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    // Define o valor do dataset "theme" como "light"
    main.dataset.theme = "light"
    } else {
    // Altera as propriedades de estilo das variáveis CSS para o tema escuro
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    // Define o valor do dataset "theme" como "dark"
    main.dataset.theme = "dark"
    }
    })
    
    
    
    