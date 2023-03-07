const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch theme Dyanamically
function switchTheme(event){
    console.log(event.target.checked)
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
    }else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}


// Even listener
toggleSwitch.addEventListener('change', switchTheme)