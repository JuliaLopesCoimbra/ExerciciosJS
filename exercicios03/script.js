//lista de repeticao
function calculaGrupo(){
    let valor1 = []
    let valor2 = []
    let valor3 = []
    let valor4 = []
    let valor5 = []
    for(let i = 0; i < 4; i++) {
        let valor = Number(prompt('Informe o '+ (i + 1) +'º valor do Grupo 1'))
        valor1[i] = valor
    }
    for(let i = 0; i< 4;i++){
        let valor = Number(prompt('Informe o '+ (i + 1)+'º valor do Grupo 2'))
        valor2[i] = valor
    }
    for(let i = 0; i< 4;i++){
        let valor = Number(prompt('Informe o '+ (i + 1)+'º valor do Grupo 3'))
        valor3[i] = valor
    }
    for(let i = 0; i< 4;i++){
        let valor = Number(prompt('Informe o '+ (i + 1)+'º valor do Grupo 4'))
        valor4[i] = valor
    }
    for(let i = 0; i< 4;i++){
        let valor = Number(prompt('Informe o '+ (i + 1)+'º valor do Grupo 5'))
        valor5[i] = valor
    }
    
    document.getElementById("calc01").innerHTML = `números digitados do Grupo 1 ${valor1}`
    document.getElementById("calc01_1").innerHTML = `números digitados do Grupo 2 ${valor2}`
    document.getElementById("calc01_2").innerHTML = `números digitados do Grupo 3 ${valor3}`
    document.getElementById("calc01_3").innerHTML = `números digitados do Grupo 4 ${valor4}` 
    document.getElementById("calc01_4").innerHTML = `números digitados do Grupo 5 ${valor5}`
    valor1.sort((a,b) => a-b)
    document.getElementById("calc01_5").innerHTML = `números digitados do Grupo 1 em ordem crescente ${valor1}`
    valor2.sort((a,b) => a-b)
    document.getElementById("calc01_6").innerHTML = `números digitados do Grupo 1 em ordem crescente ${valor2}`
    valor3.sort((a,b) => a-b)
    document.getElementById("calc01_7").innerHTML = `números digitados do Grupo 1 em ordem crescente ${valor3}`
    valor4.sort((a,b) => a-b)
    document.getElementById("calc01_8").innerHTML = `números digitados do Grupo 1 em ordem crescente ${valor4}`
    valor5.sort((a,b) => a-b)
    document.getElementById("calc01_9").innerHTML = `números digitados do Grupo 1 em ordem crescente ${valor5}`
}

function calculaIngresso(){
    let valorIngresso = Number(document.getElementById("ingresso").value);
    let qnt = 120
    let calc
    let total
    if(valorIngresso == 5){
        calc = 5*qnt
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = 120 " 
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 4.5){
        calc = 4.5*(qnt+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 4){
        calc = 4*(qnt+26+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 3.5){
        calc = 3.5*(qnt+26+26+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26+26+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 3){
        calc = 3*(qnt+26+26+26+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26+26+26+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 2.5){
        calc = 2.5*(qnt+26+26+26+26+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26+26+26+26+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 2){
        calc = 2*(qnt+26+26+26+26+26+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26+26+26+26+26+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 1.5){
        calc = 1.5*(qnt+26+26+26+26+26+26+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26+26+26+26+26+26+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }else if(valorIngresso == 1){
        calc = 1*(qnt+26+26+26+26+26+26+26+26)
        total = calc -200
        document.getElementById("calc02").innerHTML = "preço do ingresso = " + valorIngresso
        document.getElementById("calc02_1").innerHTML = "quantidade de ingressos = " + (qnt+26+26+26+26+26+26+26+26)
        document.getElementById("calc02_2").innerHTML = "lucro máximo = " + calc
    }
}
function calculaPorcentagemDasIdades(){
    let cont = 0
    let acm15 = 0
    let acm30 = 0
    let acm45 = 0
    let acm60 = 0
    let acm = 0
    let aux, aux1
    while(cont <8){
        let idade = Number(prompt('Informe a idade de 8 pessoas'))
        cont += 1
        if(idade> 0 && idade <16){
            acm15 +=1
        }else if(idade>15 && idade<31){
            acm30 +=1
        }else if(idade>30 && idade<46){
            acm45 +=1
        }else if(idade>45 && idade<61){
            acm60 +=1
        }else if(idade>60){
            acm +=1
        }
    }
    aux = (acm15*100)/8
    aux1 = (acm*100)/8
    document.getElementById("calc03").innerHTML = "Quantidade de pessoas com 15 anos =" + acm15
    document.getElementById("calc03_1").innerHTML = "Quantidade de pessoas com 30 anos =" + acm30
    document.getElementById("calc03_2").innerHTML = "Quantidade de pessoas com 45 anos =" + acm45
    document.getElementById("calc03_3").innerHTML = "Quantidade de pessoas com 60 anos =" + acm60
    document.getElementById("calc03_4").innerHTML = "Quantidade de pessoas acima de 60 anos =" + acm
    document.getElementById("calc03_5").innerHTML = "A porcentagem de pessoas na primeira faixa etária com relação ao total de pessoas =" + aux+ "%"
    document.getElementById("calc03_6").innerHTML = "A porcentagem de pessoas da última faixa etária com relação ao total de pessoas =" + aux1+ "%"
}
function calculaTabuada(){
    let num = Number(prompt('Digite um número'))
    let cont = 0
    while(cont <=10){
        document.getElementById("calc04").innerHTML = num+ " x 1 = " +num*1
        document.getElementById("calc04_1").innerHTML = num+ " x 2 = " +num*2
        document.getElementById("calc04_2").innerHTML = num+ " x 3 = " +num*3
        document.getElementById("calc04_3").innerHTML = num+ " x 4 = " +num*4
        document.getElementById("calc04_4").innerHTML = num+ " x 5 = " +num*5
        document.getElementById("calc04_5").innerHTML = num+ " x 6 = " +num*6
        document.getElementById("calc04_6").innerHTML = num+ " x 7 = " +num*7
        document.getElementById("calc04_7").innerHTML = num+ " x 8 = " +num*8
        document.getElementById("calc04_8").innerHTML = num+ " x 9 = " +num*9
        document.getElementById("calc04_9").innerHTML = num+ " x 10 = " +num*10
        cont++
    }
}
function calculcaTabuadaTodas(){
    let cont1 = 1
    while(cont1<=10){
        let cont2 = 0
        let saida = ""
        while(cont2 <= 10){
            saida = saida + `${cont1} x ${cont2} = ${cont1*cont2}`
            cont2++
        }
        alert(saida)
        cont1++
    }
}
function calculaCompras(){
    let acmV = 0
    let acmP = 0
    let cont = 0
    let valorV = 0
    let valorP = 0
    while(cont <15){
    let cod = prompt('Digite o código, para "V" compra a vista e "P" compra a prazo')
        if(cod=="V"){
             let valor = Number(prompt('Digite o valor da '+ (acmV+=1)+ ' compra a vista'))
             valorV =+valor
        }else if(cod=="P"){
            let valor1 = Number(prompt('Digite o valor da '+ (acmP+=1)+ 'compra a prazo'))
            valorP =+valor1
        }else{
            console.log('Não existe esse código')
        }
    cont+=1
    }
    document.getElementById("calc06").innerHTML = valorV
    document.getElementById("calc06_1").innerHTML = valorP
    document.getElementById("calc06_2").innerHTML = valorP + valorV
    document.getElementById("calc06_3").innerHTML = "O valor da primeira prestação das contas a prazo é "+valorP/3
    
}

function calcula5Idades(){
    let cont = 0
    let valorI = 0
    let valorP = 0
    let valorA = 0
    let valor = 0
    let acmPeso = 0
    let calc,calc1
    while(cont<5){
        let idade = Number(prompt('Digite a idade da ' + (cont+1)+ " pessoa"))
        let peso = Number(prompt('Digite o peso da ' + (cont+1)+ " pessoa"))
        valorP+=1
        let altura = Number(prompt('Digite a altura da ' + (cont+1)+ " pessoa em cm"))
        if(peso<40){
            acmPeso+=1
            calc = ((acmPeso)/valorP)*100
        }
        if(idade>50){
            valorI+=1
        }
        if(idade>10 && idade <20){
            valor+=1
            valorA+=altura
        }
        calc1 = valorA/valor
        cont++
    }
        document.getElementById("calc07").innerHTML = `a quantidade de pessoas com idade superior a 50 = ${valorI}`  
        document.getElementById("calc07_2").innerHTML = `a média das alturas das pessoas com idade entre 10 a 20 anos é = ${calc1} `
        document.getElementById("calc07_1").innerHTML = `a porcentagem das pessoas com peso inferior a 40 kg = ${calc} %`
}
//erro
function calculaInformacoes(){
    let cont = 0
    let acm1 = 0
    let acm2 = 0
    let acmIdade = 0
    let acmOA = 0
    let acm3 = 0
    let calc,calc1
    while(cont < 10){
        let idade = Number(prompt('Digite a idade da ' + (cont+1)+ " pessoa"))
        let peso = Number(prompt('Digite o peso da ' + (cont+1)+ " pessoa"))
        if(idade>50 && peso<60){
            acm1+=1
        }
        let altura = Number(prompt('Digite a altura da ' + (cont+1)+ " pessoa em cm"))
        if(altura<150){
            acm2+=1
            acmIdade = acmIdade+ idade
        }
        let corO = prompt('Digite a letra ao lado que corresponda a cor do olho da ' + (cont+1)+ " pessoa || C - Castanho, V - Verde, A - Azul, P - Preto")
        if(corO=="A"){
            acmOA+=1
            calc1 = (acmOA/10)*100
        }
        let corC = prompt('Digite a letra ao lado que corresponda a cor do cabelo da ' + (cont+1)+ " pessoa || C- Castanho, L - Louro, R- Ruivo, P-Preto")
        if(corC == "R" && corO != "A"){
            acm3+=1
        }
        calc = acmIdade/acm2
        cont++
    } 
        document.getElementById("calc08").innerHTML = `a quantidade de pessoas com idade superior a 50 e peso inferior a 60kg = ${acm1}` 
        document.getElementById("calc08_1").innerHTML = `a média das idades de pessoas com altura inferior a 1,50m = ${calc} ` 
        document.getElementById("calc08_2").innerHTML = `a porcetagem de pessoas com olhos azuis entre todas analisadas = ${calc1}% `
        document.getElementById("calc08_3").innerHTML = `a qnt de pessoas que são ruivas e não tem olhos azuis = ${acm3} `
}

function calcula10(){
    let cont = 0
    let acmIdade = 0
    let acm = 0
    let acm1 = 0
    let acm2 = 0
    let media,calc
    while(cont<10){
        let idade = Number(prompt('Digite a idade da ' + (cont+1)+ " pessoa"))
        acmIdade = acmIdade + idade
        let peso = Number(prompt('Digite o peso da ' + (cont+1)+ " pessoa"))
        let altura = Number(prompt('Digite a altura da ' + (cont+1)+ " pessoa"))
        if(peso > 90 && altura < 150 ){
            acm++
        }
        if(altura>190){
            acm1=+1
        }
        if(idade>10 && idade<30){
            acm2=+1
        }
        cont++
    }
    calc = (acm2/acm1)*100
    media = acmIdade/10
    
    document.getElementById("calc09").innerHTML = `a media das idades = ${media}` 
    document.getElementById("calc09_1").innerHTML = `a qnt de pessoas com peso superior a 90kg e altura inferior a 1.50m = ${acm} pessoas`
    document.getElementById("calc09_2").innerHTML = `a porcentagem  = ${calc}%`

}

function calculaParesEImpares(){
    let cont = 0
    let acmP = 0
    let acmI = 0
    while(cont<4){
        let n = Number(prompt('Digite o ' + (cont+1)+ " número"))
        if(n%2==0){
            acmP = acmP+n
        }else if(n/1 == n && n/n == 1){
            acmI= acmI+n
        }
        cont++
    }
    document.getElementById("calc10").innerHTML = `soma dos pares = ${acmP}` 
    document.getElementById("calc10_1").innerHTML = `soma dos impares = ${acmI}`

}
function calculaCarros2(){
    let carro = Number(prompt("Digite o valor do carro"))
    let modoPagamento = prompt("Digite a letra ao lado que conrresponda ao método de pagamento || V - a vista,  P - Parcelado")
    let calc,calc1
    if(modoPagamento == "V"){
        calc = carro-(carro*0.2)
        document.getElementById("calc11").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 20% de desconto pelo pagamento a vista` 
    }
    else if(modoPagamento == "P"){
        let qnt = Number(prompt("Digite o número de parcelas que vc quer parcelar || 6,12,18,24,30,36,42,48,54,60"))
        if(qnt == 6){
            calc = carro+(carro*0.03)
            calc1 = calc/6
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 3% de acréscimo pelo pagamento em 6 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 12){
            calc = carro+(carro*0.06)
            calc1 = calc/12
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 6% de acréscimo pelo pagamento em 12 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 18){
            calc = carro+(carro*0.09)
            calc1 = calc/18
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 9% de acréscimo pelo pagamento em 18 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 24){
            calc = carro+(carro*0.12)
            calc1 = calc/24
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 12% de acréscimo pelo pagamento em 24 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 30){
            calc = carro+(carro*0.15)
            calc1 = calc/30
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 15% de acréscimo pelo pagamento em 30 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 36){
            calc = carro+(carro*0.18)
            calc1 = calc/36
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 18% de acréscimo pelo pagamento em 36 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 42){
            calc = carro+(carro*0.21)
            calc1 = calc/42
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 21% de acréscimo pelo pagamento em 42 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 48){
            calc = carro+(carro*0.24)
            calc1 = calc/48
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 24% de acréscimo pelo pagamento em 48 parcelas, sendo cada parcela no valor de ${calc1}` 
        }else if(qnt == 54){
            calc = carro+(carro*0.27)
            calc1 = calc/54
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 27% de acréscimo pelo pagamento em 54 parcelas, sendo cada parcela no valor de ${calc1}` 
        }
        else if(qnt == 60){
            calc = carro+(carro*0.3)
            calc1 = calc/60
            document.getElementById("calc11_1").innerHTML = `o preço do carro irá ficar = ${calc}, pois houve 30% de acréscimo pelo pagamento em 60 parcelas, sendo cada parcela no valor de ${calc1}` 
        }
    }

}

function exe20(){
    let opcao 
    do{
        opcao = Number(prompt("\n 1-media arit \n 2-média ponderada \n 3-sair"))
        switch(opcao){
            case 1 :
                break
            case 2 :
                break 
            case 3:
                alert('erro');
                break
            default: alert('opção inválida')
        }
    }
    while(opcao != 3){
        alert('opção inválida')
    }
}
//21 
function calculaUrna(){
    let escolha,calc,calc1
    let cand1 = 0
    let cand2 = 0
    let cand3 = 0
    let cand4 = 0
    let cand5 = 0
    let cand6 = 0
    do{
        escolha = Number(prompt("Digite o número do candidato\n 1- candidato A \n 2- candidato B \n 3- Candidato C \n 4- candidato D \n 5 - para votos nulos \n 6 - para votos brancos"))
        switch(escolha){
            case 1 :
                cand1++
                break
            case 2 :
                cand2++
                break 
            case 3:
                cand3++
                break
            case 4:
                cand4++
                break
            case 5:
                cand5++
                break
            case 6:
                cand6++
                break
            default: alert('opção inválida');
        }
        total = cand1+cand2+cand3+cand4+cand5+cand6
        calc = (cand5*100)/total
        calc1 = (cand5*100)/total
        alert(`Quantidade de votos do candidato 1 = ${cand1} \n Quantidade de votos do candidato 2 = ${cand2}\n Quantidade de votos do candidato 3 = ${cand3}\n Quantidade de votos do candidato 4 = ${cand4}\n Votos em Branco e Nulos ${cand5} ${cand6} \n a porcentagem de votos nulos ${calc} \n a porcentagem de votos nulos ${calc1}`);
    }
    while(escolha != 0){
        alert('finalizado.')
    }
}
//23
function calculaSituacaoDoFuncionario(){
    let escolha,calc,calc1,salario
    do{
        escolha = Number(prompt("Digite o número do lado da opção que vc deseja ter \n 1- Novo Salário  \n 2- Férias  \n 3- Décimo Terceiro \n 4- Sair \n "))
        switch(escolha){
            case 1:
                salario = Number(prompt("Digite o valor do salário atual"))
                if(salario > 0 && salario <= 210){
                    calc = (salario*0.15)+salario
                }else if(salario >210 && salario <= 600){
                    calc = (salario*0.15)+salario
                }else if(salario > 600){
                    calc = (salario*0.05)+salario
                }
                alert(`Novo salário = ${calc}`)
                break
            case 2:
                salario = Number(prompt("Digite o valor do salário atual"))
                calc = salario+(salario/3)
                alert(`Valor das Férias = ${calc}`)
                break
            case 3:
                salario = Number(prompt("Digite o valor do salário atual"))
                calc1 = Number(prompt("Digite a qnt de meses trabalhados no ano (máx 12)"))
                calc = (salario*calc1)/12
                alert(`Valor do Décimo Terceiro ${calc}`);
                break
            case 4:
                alert('sair');
                break
            default:
                alert('opção inválida');
        }
    }
    while(escolha != 4){
        alert('finalizado.')
    }
}