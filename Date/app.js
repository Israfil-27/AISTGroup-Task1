const htmldate = document.querySelector(".date")
setInterval( ()=> {
  const currentDate = new Date();
  htmldate.innerHTML = currentDate.toLocaleString( "az-AZ", {hour12: false} )} , 1000)


  