const button = document.querySelector("button");

const onClick = () => {
  const yourName = prompt("What is your name?");

  // console.log(yourName)

  button.innerHTML = yourName;

}


button.addEventListener('click', onClick);

