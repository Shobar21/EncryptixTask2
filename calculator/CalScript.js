;(function () {
  let screen = document.querySelector('.screen')
  let buttons = document.querySelectorAll('.btn')
  let clear = document.querySelector('#btn-clear')
  let equal = document.querySelector('#btn-equal')

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num
      if (value) {
        screen.value += value
      }
    })
  })

  equal.addEventListener('click', function () {
    const expression = screen.value

    if (expression === '') {
      screen.value = ''
    } else {
      try {
        const result = eval(expression)
        screen.value = result
      } catch (error) {
        screen.value = 'Error'
      }
    }
  })

  clear.addEventListener('click', function (e) {
    screen.value = ''
  })
})()
