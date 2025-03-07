// Poem text
const kiplingPoem = `<p>Se você pode <span>sorrir</span> mesmo quando eu roubo seu loot,  
E <span>rir</span> mesmo depois de ser trollada outra vez;  
Se você pode <span>jogar</span> e ainda amar o jogo,  
Mesmo quando os demônios te fazem perder a vez;  
Se você pode <span>confiar</span> em mim pra te curar na batalha,  
Mesmo quando eu só <span>observo</span> e finjo tentar,  
Se você pode <span>me encantar</span> com um simples olhar,  
E me deixar <span>perdido</span> sem nem precisar falar;  

Se você pode <span>carregar</span> meu coração em cada masmorra,  
Mesmo quando <span>perdemos</span> e voltamos do início,  
Se você pode <span>tiltar</span> com as táticas injustas,  
E ainda <span>sorrir</span> por ser meu player dois;  
Se você pode <span>me trollar</span> e ainda me fazer te amar,  
E <span>zoar</span> sem que eu queira te largar,  
Então, Momo, meu amor, minha luz, minha sorte,  
O mundo é <span>nosso</span>, Te amo muito minha ruinzinha no diablinho.</p>
`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
