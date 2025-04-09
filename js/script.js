document.addEventListener('DOMContentLoaded', function() {
    const chatBody = document.getElementById('chatBody');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    // Весь масив повідомлень
    const messagesData = [
        { sender: 'bot', text: '<strong>Corresponsal:</strong> Buenos días, señor Raúl. Gracias por aceptar compartir su historia con nuestros lectores.', timestamp: '9:00 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Buenos días. Para mí es un honor contarla si puede ayudar a alguien.', timestamp: '9:01 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> Señor Raúl, usted accedió a contarnos su experiencia luchando contra la prostatitis. ¿Cuándo se enfrentó por primera vez a este problema?', timestamp: '9:02 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Oh, eso fue hace algunos años. Al principio no le di mucha importancia: idas al baño más frecuentes, especialmente por la noche. Pensé que era la edad. Pero luego apareció la incomodidad, ardor, a veces incluso dolor. Se volvió muy agotador.', timestamp: '9:03 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> ¿Cómo afectaron estos síntomas su vida diaria?', timestamp: '9:04 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Mire, me quitaba mucha energía. Estaba constantemente cansado, irritable por no dormir bien. Mis pasatiempos favoritos —la jardinería, pasear con mis nietos— ya no me daban tanta alegría. Me sentía… menos hombre, si le soy sincero.', timestamp: '9:05 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> ¿Buscó ayuda médica? ¿Cuáles fueron sus primeros pasos?', timestamp: '9:06 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Sí, claro. Fui a varios doctores, me hicieron exámenes. Me recetaron diferentes medicamentos, pero desafortunadamente no sentí un alivio significativo. A veces mejorвала немного, pero luego todo volvía. Empecé a pensar que esto ya sería para siempre.', timestamp: '9:07 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> ¿Y cuál fue el punto de inflexión? ¿Cómo encontró la solución a su problema?', timestamp: '9:08 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Fue un encuentro casual con un viejo amigo, Ernesto. No nos veíamos desde hacía muchos años. Se veía mucho más joven y enérgico de lo que lo recordaba. Le conté mis problemas y él me habló de <strong>Uroxel</strong>.', timestamp: '9:09 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> ¿<strong>Uroxel</strong>? ¿Qué sabía usted de este producto en ese momento?', timestamp: '9:10 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Para ser honesto, nada. Ernesto me dijo que era un remedio natural que le había ayudado a él. Yo era escéptico, pero su convicción y su ejemplo positivo me animaron a probarlo. Busqué información sobre <strong>Uroxel</strong> en internet, leí sobre su composición —L-arginina, zinc, cúrcuma, jengibre… Sonaba prometedor.', timestamp: '9:11 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> ¿Y cuál fue su experiencia tomando <strong>Uroxel</strong>? ¿Qué tan rápido sintió los resultados?', timestamp: '9:12 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> ¡Oh, fue increíble! A las pocas semanas de tomarlo noté cambios significativos. Las idas al baño por la noche se hicieron mucho menos frecuentes, el dolor y la incomodidad empezaron a desaparecer. ¡Volví a dormir toda la noche! La energía regresó y volví a disfrutar mis pasatiempos con alegría.', timestamp: '9:13 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> ¿Cómo afectó esto su bienestar emocional y psicológico?', timestamp: '9:14 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Es difícil ponerlo en palabras. Volví a sentirme un hombre completo. La ansiedad constante y la irritabilidad desaparecieron. Puedo disfrutar de la vida nuevamente, pasar tiempo con mi familia sin molestias. Me devolvió la confianza en mí mismo.', timestamp: '9:15 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> ¿Quisiera darle algún consejo a otros hombres que puedan estar enfrentando problemas similares?', timestamp: '9:16 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Claro que sí. Primero que nada, no se avergüйтесь de hablar de ello y de buscar ayuda médica. Pero si los tratamientos tradicionales no les brindan el alivio deseado, quizás valga la pena considerar remedios naturales como <strong>Uroxel</strong>. Por supuesto, es necesario consultar con su médico, pero mi experiencia personal fue tan positiva que sinceramente recomiendo informarse al respecto. ¡No pierdan la esperanza, hay una solución!', timestamp: '9:17 AM' },
        { sender: 'bot', text: '<strong>Corresponsal:</strong> Señor Raúl, muchas gracias por su historia sincera e inspiradora. ¡Le deseamos mucha salud y muchos años de vida activa!', timestamp: '9:18 AM' },
        { sender: 'user', text: '<strong>Raúl:</strong> Gracias a usted. ¡Cuídese!', timestamp: '9:19 AM' }
    ];

    function addMessage(messageData) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', messageData.sender === 'user' ? 'user-message' : 'bot-message', 'visible');
        messageDiv.innerHTML = `<p class="message-text">${messageData.text}</p><span class="timestamp">${messageData.timestamp}</span>`;
        chatBody.appendChild(messageDiv);
    }

    messagesData.forEach(addMessage);
    chatBody.scrollTop = 0;

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(event) {
            event.preventDefault();
            alert('¡Descubra más sobre Uroxel en nuestra página de producto!');
            // window.location.href = 'pagina_del_producto.html';
        });
    }
});