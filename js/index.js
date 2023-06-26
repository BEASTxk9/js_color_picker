// call all inputs
const inputs = document.querySelectorAll('.controls input');

// create function
function handleUpdate(){
    // console.log(this.value);

    const suffix = this.dataset.sizing || '';     // fetch sizing eg px, rem, vh for the input range
    // console.log(suffix);                       // display sizing

    // console.log(this.name);                    // display inputs name
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};



// add event listeners
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));