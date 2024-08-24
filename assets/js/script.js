
let $whattsapp = document.getElementById("whatsapp");
let numeroTelefono = 56958231539;
let mensaje = "Hola, estoy interesado en tu trabajo como Desarrollador Web. ¿Me puedes ayudar?";

const mensajeEncoded = encodeURIComponent(`https://wa.me/${numeroTelefono}?text=${mensaje}`);
document.getElementById("btnWsp").href = `https://wa.me/${numeroTelefono}?text=${mensaje}`

$whattsapp.addEventListener("click", (e) => {
console.log(mensajeEncoded)
document.getElementById("whatsapp").href = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
  
});
