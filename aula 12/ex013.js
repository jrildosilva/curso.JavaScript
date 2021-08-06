//var agora = new Date
//var diaSem = agora.getDay()
//diaSem = 8
/*
   0 = Domingo
   1 = segunda
   2 = terça
   3 = quarta
   4 = quinta
   5 = sexta
   6 = sábado
*/ 
//console.log(diaSem) 
// comando no Node.js através Node.js exec ( tecla F8) 
// resposta: data/ hoje 05/08/21 quinta-feira = 4
switch(diaSem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda') 
        break
    case 2:
        console.log('terça') 
        break
    case 3:
        console.log('quarta') 
        break
    case 4:
        console.log('quinta')  
        break
    case 5:
        console.log('sexta') 
        break
    case 6:
        console.log('sábado') 
        break   
    default:
        console.log('[Erro]dia inválido')
        break                  
}