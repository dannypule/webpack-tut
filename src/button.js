const Button = {
    button: `<button id="myButton">Push Me 'Til I Get My Satisfaction</button>`,
    attachEl: () => {
        document.getElementById('myButton').addEventListener('click', () => {
            console.log('Satisfaction');    
        })
    }
}

export default Button;