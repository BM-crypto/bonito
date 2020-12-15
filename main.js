const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 650; /*esta es la velocidad a la
	                                                        que aparezca la foto de flores */
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}