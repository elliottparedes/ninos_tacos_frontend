

window.onscroll = function() {scrollFunction()};


 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").classList.remove("bg-transparent");
    document.getElementById("navbar").classList.add("bg-black");
    document.getElementById("navbar").classList.add("halfopaque");
    
  } else {
   
    document.getElementById("navbar").classList.add("bg-transparent");
  }
}


const thisForm = document.getElementById("myForm");
if(thisForm)
{
  thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log(thisForm.name.value)
    const Http = new XMLHttpRequest();
    const url='https://ninostacosbackend.herokuapp.com/addEvent';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    Http.send(JSON.stringify({
      "name":thisForm.name.value,
      "email": thisForm.email.value,
      "phone": thisForm.phone.value,
      "date": thisForm.date.value,
      "time": thisForm.time.value,
      "people": thisForm.people.value,
      "type": thisForm.type.value,
      "location": thisForm.location.value,
      "hear": thisForm.hear.value,
      "comments": thisForm.comments.value
      
    }));

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
  window.location.href = "/thanks.html";
}

});
}



const contactForm = document.getElementById("contactForm");
if(contactForm)
{
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log(contactForm.contactName.value)
    const Http = new XMLHttpRequest();
    const url='https://ninostacosbackend.herokuapp.com/addMessage';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    Http.send(JSON.stringify({
      "name":contactForm.contactName.value,
      "email": contactForm.contactEmail.value,
      "subject": contactForm.contactSubject.value,
      "comments": contactForm.contactComments.value,
    
      
    }));

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
  window.location.href = "/sent.html";
}

});
}


//    contat form 
// const contactForm = document.getElementById('contactForm');
// contactForm.addEventListener('submit', async function (e) {
//     e.preventDefault();
  
//     const Http = new XMLHttpRequest();
//     const url='https://ninostacosbackend.herokuapp.com/addMessage';
//     Http.open("POST", url);
//     Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
//     Http.send(JSON.stringify({
//       "name":contactForm.name.value,
//       "email": contactForm.email.value,
//       "subject": contactForm.subject.value,
//       "comments": contactForm.comments.value,
      
      
//     }));

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
//   window.location.href = "/thanks.html";
// }

// });