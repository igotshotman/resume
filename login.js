
  
   
  function login()
  {
     var number = 1;
     var log=prompt("Login ID (admin)");
     var pass=prompt("Password (password)");
     if(log=="admin" && pass=="password")
    {
      alert("Access to resume granted!");
      number++
     
      }
   else
      {
    alert("Access Denied!!");
   window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      }
  }
login();
