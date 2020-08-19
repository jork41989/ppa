

export class LoadSequence {
  constructor(public started?: boolean){
    this.started = false;
  }

  loadUp(){
    let logo = document.getElementById("logoMain")
    let modal = document.getElementById("modalBack")
    setTimeout(()=> {
      logo.classList.add("fadeIn")
    }, 500)
    setTimeout(() =>{
      logo.classList.add("fadeOut")
      modal.classList.add("fadeOut")
      setTimeout(()=>{
        modal.classList.add("hideMe")
      }, 2000)
    }, 4000)

  }

}