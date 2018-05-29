let cardsArray = ["duff_beer.png",
									"duff_beer.png",
									"duff_beer.png",
									"duff_beer.png",
									"donut.png",
									"donut.png",
									"donut.png",
									"donut.png",
									"6x6-joshua-budich-fictional-fo.jpg",
									"6x6-joshua-budich-fictional-fo.jpg",
									"6x6-joshua-budich-fictional-fo.jpg",
									"6x6-joshua-budich-fictional-fo.jpg"]

const userName = $('#usuario')

function add() {
  const inputValue = $('#nombre').val()
  console.log(inputValue)
  const mostrarUsuario = '<p class="userStyle">' + inputValue + '</p>'

  userName.append(mostrarUsuario)
 
}
$('#nombre').on('keypress', function(e) {
    if (e.keyCode == 13) {
        add()
        $('#nombre').addClass('esc')
        $('#jugador').addClass('esc')
    }
})

let cartasDesordenadas = shuffle(cardsArray);
console.log(cartasDesordenadas)

function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let laCarta = cartasDesordenadas[Math.floor(Math.random()*cartasDesordenadas.length)];

let juegoArray = []  

let juegObjetos = []

let machear = [] 

let turnos = 24;

$('img').on('click', function(e){
	const id = e.target.id
  const clickedIndex = $(this).index()
  console.log(clickedIndex)
  
  const saveThisClick = $(this)
  
$('#' + id).attr('src', cartasDesordenadas[clickedIndex])


if (turnos == 0) {
  alert('Game Over')
  location.reload()
}


juegoArray.push(cartasDesordenadas[clickedIndex])  

juegObjetos.push( {
  imgIndex: clickedIndex,
  clickedDiv: saveThisClick
})
   
if (juegoArray.length == 2) {  
 
  if (juegoArray[0] == juegoArray[1]) { //COMPARAR PAR DE CARTAS
    
    machear.push(juegoArray[0], juegoArray[1])
    juegoArray = []
    juegObjetos = []
    console.log(machear)
    
    setTimeout(function() {
      const inputValue = $('#nombre').val()
    if (machear.length == 12) {
      alert('Ganaste ' + inputValue + "!") 
    }    
  }, 1000)
  

  } else {
    setTimeout(function(){
   // saveThisClick.removeClass('isClicked')
      juegObjetos[0].clickedDiv.attr('src', "homer-simpson.png" )      
      juegObjetos[1].clickedDiv.attr('src', "homer-simpson.png" )

      juegoArray = []
      juegObjetos = []
    },900) 
  } 
}  
//"https://media.licdn.com/dms/image/C560BAQEDf5SaTOmTKg/company-logo_200_200/0?e=2126476800&v=beta&t=hD_7eqBx_noU3Mcf6qmFaK7kplLwxqd7YdzyC8NUYp4"

// console.log(id)
//console.log(clickedIndex)
//console.log(desordenadas[clickedIndex])
// console.log(gameArray)
})






/*$('img').on('click', function(e) {
		//const imagen = $(this).children('img')
		const id = e.target.id
		console.log(id)
		const test = document.getElementById('img-' + id)
		const clickedIndex = $("#gmCont").children().index(test)
		console.log(clickedIndex)
		console.log(cardDesordenadas)
		console.log(cardDesordenadas[clickedIndex])
		$('#' + id).attr('src', cardDesordenadas[clickedIndex])
})*/
		
		
		
		
