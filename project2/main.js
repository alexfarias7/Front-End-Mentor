const button = document.querySelector(".btn-submit");
const divMain = document.querySelector(".main");
const divHidden = document.querySelector(".divSecondary");
const score = document.querySelector(".score");
const valueResposts = document.querySelectorAll(".valueUser");
const result = document.querySelector('.errorMSG')


let valueOption = null;

valueResposts.forEach((value) => {
  value.addEventListener("click", handleValueClick);
});

function handleValueClick(event) {
  valueResposts.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (event.target.classList.contains("valueUser")) {
    event.target.classList.add("active");
  } else {
    event.target.parentElement.classList.add("active");
  }
  valueOption = event.target.textContent;

  console.log(valueOption);
}

function Onsubmit(e) {
  e.preventDefault();
  if (valueOption === null) {
    setResult()
    return false;
  }


  

  divMain.classList.add("hidden");
  divHidden.classList.remove("hidden");
  score.textContent = valueOption;

  console.log(score);
}

function setResult(){
  result.innerHTML=''
  const p = document.createElement('p')
  p.classList.add('pResult')
  p.innerHTML= 'Please select a rating before clicking submit'
  result.appendChild(p)

  setTimeout(function(){
    p.style.display = 'none';
  }, 5000)
 
}


button.addEventListener("click", Onsubmit);
