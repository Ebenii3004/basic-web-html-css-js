let quote = document.getElementById('getquote')
  // document.getElementById('getquote')
  quote.window.location.href = 'http://127.0.0.1:5500/Contact.html';

  let idq = 0;
  //Thêm sự kiện
    quote.addEventListener('click',(event) =>{
    event.preventDefault();
    idq++
      try{
      let fname = document.getElementById('firstname').value;
      let lname = document.getElementById('lastname').value;
      let mail = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;
      let des = document.getElementById('description').value;
      if(fname.value !== '' && lname.value !== '' && mail.value !=='' && phone.value !=='' && des.value !== ''){
      let _data = {
          id : idq,
          firstname: `${fname}`,
          lastname: `${lname}`, 
          email : mail,
          phonenumber : phone,
          description : des
        }
      //Thêm, gọi API 
      fetch('https://6667f9f8f53957909ff5ff42.mockapi.io/contactus', {
          method: "POST",
          body: JSON.stringify(_data),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json)); 
          alert('complete')}
          else alert('Vui lòng nhập đầy đủ thông tin')
      }
      catch {
          alert('error')
      }     
  })