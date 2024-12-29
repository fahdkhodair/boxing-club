// scrollspy
const navlinks=document.querySelectorAll(".nav-link");
function updateActivelink(){
    let currentsection=''
    document.querySelectorAll("section").forEach(section =>{
        const rect=section.getBoundingClientRect();
           if(rect.top <=0 &&rect.bottom>=0){
         currentsection=section.getAttribute('id')
           }
    })
    navlinks.forEach(link=>{
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentsection) {
            link.classList.add('active');
        }
     });
    }
    window.addEventListener('scroll',updateActivelink);
    updateActivelink()
    // contact-us
    document.getElementById("contact").addEventListener('click',function(event){
      event.preventDefault();
      const error=document.querySelectorAll(".error-message");
      error.forEach(el=> el.style.display='none')
      const fullname=document.getElementById("fullname").value.trim();
      const Email=document.getElementById("Email").value.trim();
      const phone=document.getElementById("phone").value.trim();
      const message=document.getElementById("message").value.trim();
      let isvalid=true;
      if(fullname===""){
        document.getElementById("error-fullname").textContent="full name is required";
        document.getElementById("error-fullname").style.display="block";
        document.getElementById("error-fullname").style.color="black";
      }
      const Emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(Email===""||Emailpattern.test(Email)){
        document.getElementById("error-Email").textContent="Email is required";
        document.getElementById("error-Email").style.display="block";
        document.getElementById("error-Email").style.color="black";
      }if(phone===""){
        document.getElementById("error-phone").textContent="please enter your phone";
        document.getElementById("error-phone").style.display="block";
        document.getElementById("error-phone").style.color="black";
      }if(message===""){
        document.getElementById("messages").textContent="please enter your message";
        document.getElementById("messages").style.display="block"
        document.getElementById("messages").style.color="black"
      }if(isvalid){
        alert("form submit sucessfully")
      }
    })

