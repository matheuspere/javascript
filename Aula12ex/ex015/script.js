function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formul_ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formul_ano.value.length ==0 || Number(formul_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.!')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number (formul_ano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    
    if (fsex[0].checked) {
        gênero = 'Homem'

        if (idade >=0 && idade < 3) {
            //bebe
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if (  idade < 14){
            //criança
            img.setAttribute('src', 'foto-crianca-m.png')
        } else if ( idade < 21){
          //adolescente
          img.setAttribute('src', 'foto-adolescente-m.png')   
        } else if ( idade < 60){
            //adulto
            img.setAttribute('src', 'foto-adulto-m.png')
        } else {
            //idoso
            img.setAttribute('src', 'foto-idoso-m.png')
        }
        
        



    } else if (fsex[1].checked) {
        gênero = 'Mulher'
    }
    if (idade >=0 && idade < 3) {
        //bebe
        
    } else if (  idade < 14){
        //criança
        
    } else if ( idade < 21){
      //adolescente
       
    } else if ( idade < 60){
        //adulto
        
    } else {
        //idoso
        
    }
    
    
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
}