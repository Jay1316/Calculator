var key = document.querySelectorAll("button")
var expression = document.querySelector("#expression")
var answer = document.querySelector("#result")
var flag = ['AC', '<-', '=', '%']

function place() {
  expression.textContent += this.textContent
}

function clean() {
  expression.textContent = ''
  answer.textContent = ''
}

function clear() {
  expression.textContent = expression.textContent.slice(0,-1)
}

function equal() {
  try {
    answer.textContent = eval(expression.textContent)
  } catch(e) {
    if(e instanceof SyntaxError) {
      alert("Invalid expression")
    }
  }
  expression.textContent = ''
}

function percentage() {
  answer.textContent = eval(expression.textContent)/100 + "%"
}

function execute() {
  if(this.textContent === "AC") {
    clean()
  } else if(this.textContent === "<-") {
    clear()
  } else if(this.textContent == "%") {
    percentage()
  } else {
    equal()
  }
}

for(var i = 0; i < key.length; i++) {
  key[i].addEventListener('click', flag.includes(key[i].textContent) ? execute : place)
}
