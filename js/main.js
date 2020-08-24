var textos = new Object;
textos.mensaje1 = "<i>En la calle me dicen el Barbas, pero la gente que me conoce me dice Carlitos.</i>";
textos.mensaje2 = "Aún en los días sin estrellas, brillos interrumpen la oscuridad que me rodea. Son luces verdes, y rojas, de las antenas. Las luces titilan. Nunca adivino el orden. Cambian. La del faro. Y la de los satélites de la oficina de prefectura sobre la bahía. Y las antenas de los barcos.";
textos.mensaje3 = "En la bahía duermen los barcos. Dibujan siluetas oscuras, como patos en un lago durmiendo en grupo. Casas acuáticas que se mueven como una silla mecedora. Apuesto que tienen cable. Y una heladera llena de cosas para hacerse un refuerzo. Con panceta buena. Y buen vino. Apuesto que debe estar lindo adentro. Apuesto que con  solo cerrar la puerta todo el sonido del viento se apaga. Como si se fuera volando.";
textos.mensaje4 = "<i>— Por qué no se va volando este viento que me rodea —</i>";
textos.mensaje5 = "Suben y bajan, movidos por la marea, como mi panza.";
textos.mensaje6 = "Suben y bajan, vacíos, como mi panza.";
textos.mensaje7 = "No hay nadie ahí.";
textos.mensaje8 = "<i>— Carlitos, otra vez sin poderte dormir — </i>";
textos.mensaje9 = "Yo podría estar ahí.";
textos.mensaje10 = "<i>— Carlitos, vení que tu abuela te va a cantar una canción —</i>";
textos.mensaje11 = "Miro hacia arriba, hacia los palos que tengo arriba del colchón, sobre la vereda enfrente al puerto. La vela de mi barco. Las tiras de plástico se revolotean, como las velas de los barcos. Las mismas revolotean; parecen apuntar en todas las direcciones menos en la mía. Con el dedo que se asoma por el agujero de mi guante como una oruga toco la cuerda.";
textos.mensaje12 = "Muevo los dedos del pie derecho, el que no tengo dormido del todo por el frío. Y siento el rasguño de la arena, y con él me llega el olor a salitre que pierde la espuma en su recorrido por los costados del barco, como un vaso de cerveza servido desde abajo hacia arriba.";
textos.mensaje13 = "Siento el sonido de la madera del barco que se estira o comprime, se despereza o se saca las mentiras.";
textos.mensaje14 = "Las luces de un auto a la distancia se pierden. El auto ya se fue.  Como el sol espera a la luna. Dos luces que viajan juntas aunque no lo sepan.";
textos.mensaje15 = "Mis recuerdos son como un palo que atiza el fuego.";
textos.mensaje16 = "En la calle me dicen el Barbas, pero la gente que me conoce me dice Carlitos.";
textos.mensaje17 = "<i>Huelo el pan de maíz recién sacado del gran horno de la panadería mientras entro a hacer mi turno.</i>";
textos.mensaje18 = "En el momento en el que la oscuridad de arriba se junta con la de abajo, el horizonte de luz se confunde con el del sonido. Mis respiros parecen empujar las olas hacia adentro. Nunca avanzan del todo, con cada respiro las frena. En ese momento siempre las veo.";
textos.mensaje19 = "A mi madre.";
textos.mensaje20 = "Y mi señora.";
textos.mensaje21 = "Y mi hermana.";
textos.mensaje22 = "Y mi abuela. Las veo sentadas en una roca, cantándome a lo lejos. Desde su isla.  Me llaman.";
textos.mensaje23 = "Mi colchón se levanta, y vuela conmigo en su dirección. Pasamos por arriba de las piedras, y la arena, y el agua. Atravesamos parches de agua iluminados por la luna tapada de nubes, miro para arriba y veo la luz de la luna como un foco. El murmullo de los relojes. Lo escucho desde los bolsillos y manos y celulares y cabezas. Suenan hasta acercarse al horizonte de espuma mientras me empiezo a dormir. Cuanto más lejos, todos los sonidos de la ciudad, se hacen uno. Miro hacia atrás y veo la estela que deja el colchón en el agua, como una lancha, solo que es marrón, de la mugre que me voy sacando a medida que cruzamos el mar. Cuando veo esa estela me doy cuenta:</br><i>Yo soy el barco.</i></br><i>Ellas son el barco.</i></br><i>Él es el barco.</i></br><i>Todos somos el barco</i>";
textos.mensaje24 = "Llego a ellas."
textos.mensaje25 = "Miro hacia arriba, veo las cuatro cabezas, rodeadas por una aureola blanca gigante, la luna rosada, que enmarca sus rostros."
textos.mensaje26 = "Me pongo en pose fetal. El colchón baja pero el agua es caliente."
textos.mensaje27 = "Dejo de temblar. En ese momento mi cuerpo es como una llave, con los músculos exactamente como tienen que estar para girar la cerradura y abrir la puerta."
textos.mensaje28 = "<i>Volví. Como todas las noches.</i>";

$(document).ready(function() {
	var ultimoMensaje = 0;
	var texto = "";
	$('area').click(function(e){
		var idMensaje = $(e.target).attr('mensaje');
		var mensajeActual = parseInt(idMensaje.replace("mensaje",""));

		if (ultimoMensaje == mensajeActual) {
			return;
		} else if(ultimoMensaje == 0) {
			texto = textos[idMensaje];
		} else {
			texto = textos["mensaje" + ultimoMensaje] + "</br></br>" + textos[idMensaje];
		}
		
		ultimoMensaje = mensajeActual;
		$("#texto").find('p').html(texto);
	});

	$('#sobre').click(function(e){
		ultimoMensaje = 0;
		texto = "<b>Los Barcos</b></br>Foto: Puertito de Buceo de Jimmy Baikovicius</br>https://www.flickr.com/photos/jikatu/35492359205</br></br>CC BY-SA 4.0"
		$("#texto").find('p').html(texto);
	});
});