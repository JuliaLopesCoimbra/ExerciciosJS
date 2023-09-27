//lista01
function calculaMedia(){
    let soma = 0
    for(let i=0;i<4;i++){
        let notas = Number(prompt(`Informe a ${i+1} nota`))
        soma += notas
    }
    Number(document.getElementById('calc01').innerHTML = `A média do aluno é ${soma/4} ` )
    if(soma/4>=7){
        Number(document.getElementById('calc02').innerHTML = ` E ele foi aprovado ` )
    }else{
        Number(document.getElementById('calc02').innerHTML = `E ele não foi aprovado ` )
    }
}
function calculaTabNota(){
    let n1 = Number(document.getElementById('nota1tab').value);
    let n2 = Number(document.getElementById('nota2tab').value);
    let calc = (n1+n2)/2
    Number(document.getElementById('calc02').innerHTML = "Média da notas mencionadas acima = " + calc )
}
function calculamairoumenor(){
    let n1 = Number(document.getElementById('n1M').value);
    let n2 = Number(document.getElementById('n2M').value);
    if(n1<n2){
        Number(document.getElementById('calc03').innerHTML = "maior = " + n2 + " e menor = "+n1 )
    }else{
        Number(document.getElementById('calc03').innerHTML = "maior = " + n1 + " e menor = "+n2 )
    }
    if(n1==n2){
        Number(document.getElementById('calc03').innerHTML = "iguais = " + n1 )
    }
}
function calculamairoumenor2(){
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    if(n1 > n2 && n2 > n3){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n1+" depois " +n2+" e por ultimo " +n3 )
    }else if (n1>n3 && n3>n2){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n1+" depois " +n3+" e por ultimo " +n2 )
    }else if (n2>n3 && n3>n1){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n2+" depois " +n3+" e por ultimo " +n1 )
    }else if (n2>n1 && n1>n3){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n2+" depois " +n1+" e por ultimo " +n3 )
    }else if (n3>n2 && n2>n1){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n3+" depois " +n2+" e por ultimo " +n1 )
    }else if (n3>n1 && n1>n2){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n3+" depois " +n1+" e por ultimo " +n2 )
    }else if(n1==n2==n3){
        Number(document.getElementById('calc04').innerHTML = "todos os números são iguais" )
    }
}
function calculaEscolha(){
    // recuperar valores nro1 e nro2 do usuário
    let n1 = Number(document.getElementById("n1E").value);
    let n2 = Number(document.getElementById("n2E").value);
    // recupera o valor da opção escolhida
    let opcao = Number(document.getElementById("n3E").value);
    // operar nos números de acordo com escolha do usuário
    let resultado
    switch(opcao) {
        case 1: resultado = (n1 + n2) / 2
                break // não entra nos cases abaixo
        case 2: if (n1 >= n2){
                    resultado = n1 - n2 // nro1 é maior
                }
                else {
                    resultado = n2 - n1 // nro2 é maior
                }
                break
        case 3: resultado = n1 * n2
                break
        case 4: if (n2 != 0){
                    resultado = n1 / n2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break
        default: resultado = "Opção inválida"
    }
    // saída dos dados
    document.getElementById("calc05").innerHTML = resultado
}
function calculaLosango(){
    let dM = Number(document.getElementById('dM').value);
    let dm = Number(document.getElementById('dm').value);
    let calc = (dM*dm)/2
    Number(document.getElementById('calc11').innerHTML = "valor da area é" + calc )

}
function calculaSalario(){
    let sM = Number(document.getElementById('sM').value);
    let sF = Number(document.getElementById('sF').value);
    let calc = (sF/sM)
    Number(document.getElementById('calc12').innerHTML = "o salario do funcionário possui " + calc + " salários minímos")
}
function calculaTabuada(){
    let tab = Number(document.getElementById('tab').value);
    let calcA = tab*1
    let calcB = tab*2
    let calcC = tab*3
    let calcD = tab*4
    let calcE = tab*5
    let calcF = tab*6
    let calcG = tab*7
    let calcH = tab*8
    let calcI = tab*9
    let calcJ = tab*10
    Number(document.getElementById('calc13a').innerHTML = tab + " x 1 = " + calcA )
    Number(document.getElementById('calc13b').innerHTML = tab + " x 2 = " + calcB )
    Number(document.getElementById('calc13c').innerHTML = tab + " x 3 = " + calcC )
    Number(document.getElementById('calc13d').innerHTML = tab + " x 4 = " + calcD )
    Number(document.getElementById('calc13e').innerHTML = tab + " x 5 = " + calcE )
    Number(document.getElementById('calc13f').innerHTML = tab + " x 6 = " + calcF )
    Number(document.getElementById('calc13g').innerHTML = tab + " x 7 = " + calcG )
    Number(document.getElementById('calc13h').innerHTML = tab + " x 8 = " + calcH )
    Number(document.getElementById('calc13i').innerHTML = tab + " x 9 = " + calcI )
    Number(document.getElementById('calc13j').innerHTML = tab + " x 10 = " + calcJ )

}
function calculaIdade(){
    let idade = new Date(document.getElementById('DataNasci').value);
    let calc = Math.floor((Date.now() - idade) / (31557600000));
    Date(document.getElementById('calc14').innerHTML = "idade em anos = " + calc + " anos")
    Date(document.getElementById('calc14a').innerHTML = "idade em meses = " + calc + " anos")
    Date(document.getElementById('calc14b').innerHTML = "idade em dias = " + calc + " anos")
    Date(document.getElementById('calc14c').innerHTML = "idade em semanas = " + calc + " anos")
}


//lista02
function calculaNota(){
    let n1 = Number(document.getElementById('nota1').value);
    let n2 = Number(document.getElementById('nota2').value);
    let n3 = Number(document.getElementById('nota3').value);
    let n4 = Number(document.getElementById('nota4').value);
    let calc = (n1+n2+n3+n4)/4
    if(calc < 7 && calc > 0){
        Number(document.getElementById('calc01').innerHTML = "reprovado" )
    }else if (calc >= 7){
        Number(document.getElementById('calc01').innerHTML = "aprovado" )   
    }
}
function calculaTabNota(){
    let n1 = Number(document.getElementById('nota1tab').value);
    let n2 = Number(document.getElementById('nota2tab').value);
    let calc = (n1+n2)/2
    Number(document.getElementById('calc02').innerHTML = "média aritmética da nota = " + calc )
}

function calculaEscolha2(){
    let n1 = Number(document.getElementById("n1E2").value);
    let n2 = Number(document.getElementById("n2E2").value);
    let opcao = Number(document.getElementById("n3E2").value);
    let resultado
    let resultado2
    switch(opcao){
        case 1: resultado = Math.pow(n1,n2)
            break
        case 2:
            resultado = Math.sqrt(n1)
            resultado2 = Math.sqrt(n2)
            break
        case 3:
            resultado = Math.cbrt(n1)
            resultado2 = Math.cbrt(n2)
        default: resultado = "Opção inválida"
    }
    document.getElementById("calc06").innerHTML = resultado 
    document.getElementById("calc06_2").innerHTML = resultado2
}
function calculaAumento(){
    let sal = Number(document.getElementById("sal").value);
    let calc
    if(sal <= 500 && sal>0){
        calc = sal+(sal*0.3)
        document.getElementById("calc07").innerHTML = "Valor do Salário com aumento = "+calc 
    }else{
        calc = sal
        document.getElementById("calc07").innerHTML = "Não há aumento | Valor do Salário = "+calc
    }
}
function calculaAumento2(){
    let sal = Number(document.getElementById("sal2").value);
    let calc
    if(sal <= 300 && sal>0){
        calc = sal+(sal*0.35)
        document.getElementById("calc08").innerHTML = "Valor do Salário com aumento de 35% = "+calc 
    }else if(sal > 300){
        calc = sal+(sal*0.15)
        document.getElementById("calc08").innerHTML = "Valor do Salário com aumento de 15% = "+calc
    }
}
function calculaSM(){
    let sal = Number(document.getElementById("SM").value);
    let calc
    if(sal > 400){
        calc = sal+(sal*0.3)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 30% = "+calc + " reais"
    }else if(sal <= 400 && sal>300){
        calc = sal+(sal*0.25)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 25% = "+calc +" reais"
    }else if(sal <= 300 && sal>200){
        calc = sal+(sal*0.2)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 20% = "+calc +" reais"
    }else if(sal <= 200 && sal>0){
        calc = sal+(sal*0.1)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 10% = "+calc +" reais"
    }
}
function calculaCarro(){
    let car = Number(document.getElementById("carro").value);
    let calc
    if(car < 12000){
        calc = car+(car*0.05) 
        document.getElementById("calc10").innerHTML = "O valor do carro juntando com a porcentagem do distribuidor é R$ = "+calc
    }else if(car >=12000 && car <=25000){
        calc = car+(car*0.10)+(car*0.15)
        document.getElementById("calc10").innerHTML = "O valor do carro juntando com a porcentagem do distribuidor e dos impostos é R$ = "+calc
    }else if(car > 25000){
        calc = car+(car*0.20)+(car*0.15)
        document.getElementById("calc10").innerHTML = "O valor do carro juntando com a porcentagem do distribuidor e dos impostos é R$ = "+calc
    }
}
function calculaSalarioNovo(){
    let s = Number(document.getElementById("SalarioNovo").value);
    let calc 
    if(s<=300){
        calc = s+(s*0.15)
        document.getElementById("calc11").innerHTML = "O novo salário será = R$" + calc
    }else if(s>300 && s<600){
        calc = s+(s*0.1)
        document.getElementById("calc11").innerHTML = "O novo salário será = R$" + calc
    }else if(s >= 600 && s<=900){
        calc = s+(s*0.05)
        document.getElementById("calc11").innerHTML = "O novo salário será = R$" + calc
    }else if(s>900){
        document.getElementById("calc11").innerHTML = "O salário permanecerá com o mesmo valor de = R$" + s + " devido ao percentual que o funcionario já ganha"

    }
}
function calculaSalarioGratidao(){
    let s = Number(document.getElementById("SalarioGratidao").value);
    let calc 
    if(s<=350){
        calc = s-(s*0.07)+100
        document.getElementById("calc12").innerHTML = "Tendo o valor da gratificação o novo salário será = R$" + calc
    }else if(s>350 && s<600){
        calc = s-(s*0.07)+75
        document.getElementById("calc12").innerHTML = "Tendo o valor da gratificação o novo salário será = R$" + calc
    }else if(s >= 600 && s<=900){
        calc = s-(s*0.07)+50
        document.getElementById("calc12").innerHTML = "Tendo o valor da gratificação o novo salário será = R$" + calc
    }else if(s>900){
        calc = s-(s*0.07)+35
        document.getElementById("calc12").innerHTML = "Tendo o valor da gratificação o novo salário será = R$" + calc

    }
}
function calculaNovoPreco(){
    let n = Number(document.getElementById("NovoPreco").value);
    let calc 
    if(n<=50){
        calc = n+(n*0.05)
    }else if(n>50 && n<=100){
        calc = n+(n*0.1)
    }else if(n > 100 ){
        calc = n+(n*0.15)
        
    }
    if(calc <=80){
        document.getElementById("calc13").innerHTML = "O novo preço do produto será = R$" + calc + " e é classificado como BARATO"
    }else if(calc>80 && calc<=120){
        document.getElementById("calc13").innerHTML = "O novo preço do produto será = R$" + calc + " e é classificado como NORMAL"
    }else if(calc>120 && calc<=200){
        document.getElementById("calc13").innerHTML = "O novo preço do produto será = R$" + calc + " e é classificado como CARO"
    }else if(calc>200){
        document.getElementById("calc13").innerHTML = "O novo preço do produto será = R$" + calc + " e é classificado como MUITO CARO"
    }
}

function calculaNovoSalario(){
    let s = Number(document.getElementById("NovoSalario").value);
    let calc 
    if(s<=300){
        calc = s+(s*0.5)
        document.getElementById("calc14").innerHTML = "O novo salário será = R$" + calc + " com 50% de aumento"
    }else if(s>300 && s<=500){
        calc = s+(s*0.4)
        document.getElementById("calc14").innerHTML = "O novo salário será = R$" + calc+ " com 40% de aumento"
    }else if(s > 500 && s<=700){
        calc = s+(s*0.3)
        document.getElementById("calc14").innerHTML = "O novo salário será = R$" + calc+ " com 30% de aumento"
    }else if(s>700 && s<=800){
        calc = s+(s*0.2)
        document.getElementById("calc14").innerHTML = "O novo salário será = R$" + calc+ " com 20% de aumento"
    }else if(s>800 && s<=1000){
        calc = s+(s*0.1)
        document.getElementById("calc14").innerHTML = "O novo salário será = R$" + calc+ " com 10% de aumento"
    }else if(s>1000){
        calc = s+(s*0.05)
        document.getElementById("calc14").innerHTML = "O novo salário será = R$" + calc+ " com 5% de aumento"
    }
}
function calculaInvestimento(){
    let inv = Number(document.getElementById("Investimento").value);
    let inv2 = Number(document.getElementById("Investimento2").value);
    let calc
    switch(inv){
        case 1:
            calc = (inv2*0.03)
            document.getElementById("calc15").innerHTML = "O valor do investimento R$" + inv2 + " irá subir R$" +calc+ " ao mês"
            break;
        case 2:
            calc = (inv2*0.04)
            document.getElementById("calc15").innerHTML = "O valor do investimento R$" + inv2 + " irá subir R$" +calc+ " ao mês"
            break;
        default:
            document.getElementById("calc15").innerHTML = "Opção Inválida"

    }
}
function calculaCodigo(){
    let valor = Number(document.getElementById("preco").value);
    let cod = Number(document.getElementById("codigo").value);
    let calc 
    let calc1
    if(valor <=30){
        document.getElementById("calc16").innerHTML = "O produto com o código " + cod + " não possui desconto, permanecendo no valor de R$" + valor
    }else if(valor>30 && valor<=100){
        calc = (valor*0.1)
        calc1 = valor-(valor*0.1)
        document.getElementById("calc16").innerHTML = "O produto com o código " + cod + " possui desconto de R$"+ calc+", permanecendo no valor de R$" + calc1
    }else if(valor>100){
        calc = (valor*0.15)
        calc1 = valor-(valor*0.15)
        document.getElementById("calc16").innerHTML = "O produto com o código " + cod + " possui desconto de R$"+ calc+", permanecendo no valor de R$" + calc1
    }
}
function calculaSenha(){
    let senha = Number(document.getElementById("senha").value);
    if(senha == 4531){
        document.getElementById("calc17").innerHTML = "Acessado!"
       } else {
        document.getElementById("calc17").innerHTML = "Não foi acessado!"
       }
}

function calculaMaioridade(){
    let i = Number(document.getElementById("idade").value);
    if(i >=18){
        document.getElementById("calc18").innerHTML = "Você é de Maioridade"
       } else {
        document.getElementById("calc18").innerHTML = "Você não é de Maioridade"
       }
}
function calculaPesoIdeal(){
    let sexo = (document.getElementById("sexo").value);
    let altura = Number(document.getElementById("h").value);
    let calc
    if(sexo == "Masculino" || sexo == "masculino"){
        calc = (72.7*altura)-58
        document.getElementById("calc19").innerHTML = "O peso masculino ideal é " + calc
    }else if(sexo == "Feminino" || sexo == "feminino" ){
        calc = (62.1*altura)-44.7
        document.getElementById("calc19").innerHTML = "O peso feminino ideal é " + calc
    }else{
        document.getElementById("calc19").innerHTML = "Opção Inválida"
    }
}
function calculaNadador(){
    let idade = (document.getElementById("nadador").value);
    if(idade>=5 && idade<=7){
        document.getElementById("calc20").innerHTML = "Nadador Infantil"
    }else if(idade>=8 && idade<=10){
        document.getElementById("calc20").innerHTML = "Nadador Juvenil"
    }else if(idade>=11 && idade<=15){
        document.getElementById("calc20").innerHTML = "Nadador Adolescente"
    }else if(idade>=16 && idade<=30){
        document.getElementById("calc20").innerHTML = "Nadador Adulto"
    }else if(idade>30){
        document.getElementById("calc20").innerHTML = "Nadador Senior"
    }else{
        document.getElementById("calc20").innerHTML = "Ainda não se encaixa nas classificações"
    }
}
function calculaProcedencia(){
    let codigo = Number(document.getElementById("cod").value);
    let preco = Number(document.getElementById("preco2").value);
    switch(codigo){
        case 1:
            document.getElementById("calc21").innerHTML = "Procedência = Sul - Valor  R$" + preco
            break;
        case 2:
            document.getElementById("calc21").innerHTML = "Procedência = Norte - Valor  R$" + preco
            break;
        case 3:
            document.getElementById("calc21").innerHTML = "Procedência = Leste - Valor R$" + preco
            break;
        case 4:
            document.getElementById("calc21").innerHTML = "Procedência = Oeste - Valor  R$" + preco
            break;
        default:
            if(codigo == 5 || codigo == 6){
                document.getElementById("calc21").innerHTML = "Procedência = Nordeste - Valor  R$" + preco 
            }else if(codigo == 7 || codigo == 8 || codigo == 9){
                document.getElementById("calc21").innerHTML = "Procedência = Sudeste - Valor  R$" + preco
            }else if(codigo >=10 && codigo<=20){
                document.getElementById("calc21").innerHTML = "Procedência = Centro-Oeste - Valor  R$" + preco
            }else if(codigo >=21 && codigo<=30){
                document.getElementById("calc21").innerHTML = "Procedência = Noroeste - Valor  R$" + preco
            }
    }
}
function calculaRisco(){
    let idade = Number(document.getElementById("idadeRisco").value);
    let peso = Number(document.getElementById("peso").value);
    if(idade<20){
        if(peso<60){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 9 " 
        }else if(peso >= 60 && peso <90){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 8 "
        }else if(peso >= 90 ){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 7 "
        }
    }else if(idade >=20 && idade<50){
        if(peso<60){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 6 " 
        }else if(peso >= 60 && peso <90){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 5 "
        }else if(peso >= 90 ){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 4 "
        }
    }else if(idade >= 50){
        if(peso<60){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 3 " 
        }else if(peso >= 60 && peso <90){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 2 "
        }else if(peso >= 90 ){
            document.getElementById("calc22").innerHTML = "O grupo de risco dessa pessoa é 1 "
        }
    }
}
function calculaTabela(){
    let qnt = Number(document.getElementById("qnt").value);
    let cod = Number(document.getElementById("codigo").value);
    let preco, unitario, nota, calc
    if(cod>=1 && cod<=10){
        preco = 10
        nota = preco*qnt
        unitario = nota/qnt
        document.getElementById("calc23").innerHTML = "O preço total da nota ficou R$" +nota+",  cada produto no valor de R$" +unitario
    }else if(cod>=11 && cod<=20){
        preco = 15
        nota = preco*qnt
        unitario = nota/qnt
        document.getElementById("calc23").innerHTML = "O preço total da nota ficou R$" +nota+",  cada produto no valor de R$" +unitario
    }else if(cod>=21 && cod<=30){
        preco = 20
        nota = preco*qnt
        unitario = nota/qnt
        document.getElementById("calc23").innerHTML = "O preço total da nota ficou R$" +nota+",  cada produto no valor de R$" +unitario
    }else if(cod>=31 && cod<=40){
        preco = 30
        nota = preco*qnt
        unitario = nota/qnt
        document.getElementById("calc23").innerHTML = "O preço total da nota ficou R$" +nota+",  cada produto no valor de R$" +unitario
    }else{
        document.getElementById("calc23").innerHTML = "não existe esse código de produto" 
    }
    
    if(nota<250){
        calc = nota-(nota*0.05)
        desconto = (nota*0.05)
        document.getElementById("calc23_2").innerHTML = "Recebendo o desconto de R$" + desconto + ", no valor da nota de R$"+nota+" , descontando com o desconto fica no valor de " + calc
    }else if(nota>=250 && nota<500){
        calc = nota-(nota*0.1)
        desconto = (nota*0.1)
        document.getElementById("calc23_2").innerHTML = "Recebendo o desconto de R$" + desconto + ", no valor da nota de R$"+nota+" , descontando com o desconto fica no valor de " + calc
    }else if(nota>=500){
        calc = nota-(nota*0.15)
        desconto = (nota*0.15)
        document.getElementById("calc23_2").innerHTML = "Recebendo o desconto de R$" + desconto + ", no valor da nota de R$"+nota+" , descontando com o desconto fica no valor de " + calc
    }
}
function calculaCategoria(){
    let preco = Number(document.getElementById("preco3").value);
    let categoria = Number(document.getElementById("categoria").value);
    let situacao = document.getElementById("situacao").value;
    let valorProd, valorImposto,aumento,cla
    //aumento
    if(categoria == 1){
        if(preco <=25 && preco>0){
            valorProd = preco+(preco*0.05)
            aumento =preco*0.05
            document.getElementById("calc24").innerHTML = "O produto de valor R$"+preco+", sofreu aumento de R$"+aumento+" , ficando no valor total de R$"+valorProd
        }else if(preco>25){
            valorProd = preco+(preco*0.12)
            aumento =preco*0.12
            document.getElementById("calc24").innerHTML = "O produto de valor R$"+preco+", sofreu aumento de R$"+aumento+" , ficando no valor total de R$"+valorProd
        }
    }else if(categoria == 2){
        if(preco <=25&& preco>0){
            valorProd = preco+(preco*0.08)
            aumento =preco*0.08
            document.getElementById("calc24").innerHTML = "O produto de valor R$"+preco+", sofreu aumento de R$"+aumento+" , ficando no valor total de R$"+valorProd
        }else if(preco>25){
            valorProd = preco+(preco*0.15)
            aumento =preco*0.15
            document.getElementById("calc24").innerHTML = "O produto de valor R$"+preco+", sofreu aumento de R$"+aumento+" , ficando no valor total de R$"+valorProd
        }
    }else if(categoria == 3){
        if(preco <=25&& preco>0){
            valorProd = preco+(preco*0.1)
            aumento =preco*0.1
            document.getElementById("calc24").innerHTML = "O produto de valor R$"+preco+", sofreu aumento de R$"+aumento+" , ficando no valor total de R$"+valorProd
        }else if(preco>25){
            valorProd = preco+(preco*0.18)
            aumento =preco*0.18
            document.getElementById("calc24").innerHTML = "O produto de valor R$"+preco+", sofreu aumento de R$"+aumento+" , ficando no valor total de R$"+valorProd
        }
    }else{
        document.getElementById("calc24").innerHTML = "Categoria Inválida"
    }



    //imposto
    if(categoria == 2 && situacao == "R"){
        valorImposto = preco*0.05
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(categoria == 2 && situacao == "r"){
        valorImposto = preco*0.05
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "R"&& categoria == 1){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "r" && categoria == 1){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "R" && categoria ==3){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "r" && categoria ==3){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "N" && categoria == 1){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "n" && categoria == 1 ){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "N" && categoria == 3){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else if(situacao == "n" && categoria == 3 ){
        valorImposto = preco*0.08
        document.getElementById("calc24_2").innerHTML = "Esse produto possui o valor R$"+valorImposto+" de imposto"
    }else{
        document.getElementById("calc24_2").innerHTML = "Imposto Inválido"
    }




    //classificação
    if(valorProd<=50){
        cla = "Barato"
    }else if(valorProd>50 && valorProd<120){
        cla = "Normal"
    }else if(valorProd>=120){
        cla = "Caro"
    }else{
        cla = "O programa não conseguiu entender os seus dados"
    }
    document.getElementById("calc24_3").innerHTML = "Esse produto possui a classificação como "+cla+", devido ao seu preço"

}
function calculaGrati(){
    let faltou = Number(document.getElementById("faltou").value);
    let extra = Number(document.getElementById("extra").value);
    let calc, calc1
    calc = extra-((2/3)*(faltou))
    calc1 = calc*60
    if(calc1>=2400){
        document.getElementById("calc25").innerHTML = "Gratificação de R$500"
    }else if(calc1>1800 && calc1<2400){
        document.getElementById("calc25").innerHTML = "Gratificação de R$400"
    }else if(calc1>=1200 && calc1<1800){
        document.getElementById("calc25").innerHTML = "Gratificação de R$300"
    }else if(calc1>=600 && calc1<1200){
        document.getElementById("calc25").innerHTML = "Gratificação de R$200"
    }else if(calc1<600){
        document.getElementById("calc25").innerHTML = "Gratificação de R$100"
    }
}




//repeticaoExemplo
function calculaMediaIdades(){
    let conta = 1
    let total = 0
     
    while (conta <= 10){
        let idade = Number(prompt('Informe a idade'))
        conta = conta +1
        total = total + idade
    }
    
    console.log('a media é ' +total/10)
}
//repeticaoExemplo
function calculaMediaIdades(){
    let i = Number(prompt('Informe a qnt de idades'))
    let conta = 1
    let total = 0
     
    while (conta <= i){
        let idade = Number(prompt('Informe a idade'))
        conta = conta +1
        total = total + idade
    }
    
    console.log('a media é ' +total/10)
}
//vetor para soma de pares
function VetorSomarPares(){
    let vet = [];
    let soma = 0;
    for(let i = 0;i<10;i++){
        vet[i] = Number(prompt("Escreva 10 notas"))
    }
    for(let i = 0;i<10;i++){
        if(vet[i]%2 == 0){
            soma = soma + vet[i]
        }
    }
    alert("a soma dos elementos pares "+soma)

}



//vetores

function calculaParesEImpares(){
    let vetor = []
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o ${i+1} elemento`))
    }
    let pares = []; let iPares = 0;
    let impares = []; let iImpares = 0
    for(let i = 0;i<6;i++){
    if(vetor[i] % 2 == 0){
        pares[iPares] = vetor[i]
        iPares++
    }else{
        impares[iImpares] = vetor[i]
        iImpares++
    }
}
    document.getElementById("calc01").innerHTML = `Pares ${pares} | qnt: ${pares.length}`
    document.getElementById("calc02").innerHTML =`Impares ${impares} | qnt: ${impares.length}`
}
function calculaMultiplos(){
    let vetor = []
    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Informe o ${i+1} elemento`))
    }
    let pares = []; 
    let impares = []; 
    let IMPpar = []; 
    let sem = []
    for(let i = 0;i<7;i++){
    if(vetor[i] % 2 == 0 && vetor[i]%3==0){
        IMPpar.push(vetor[i])
    }else if(vetor[i] % 2 == 0){
        pares.push(vetor[i])
    }else if(vetor[i]%3==0){
        impares.push(vetor[i])
    }else{
        sem.push(vetor[i])
    }
}
    document.getElementById("calc01").innerHTML =`Pares  = ${pares} | qnt: ${pares.length}`
    document.getElementById("calc02").innerHTML =`Multiplo de 3 = ${impares} | qnt: ${impares.length}`
    document.getElementById("calc03").innerHTML =`Multiplo de 3 e 2 = ${IMPpar} | qnt: ${impares.length}`
    document.getElementById("calc04").innerHTML =`Sem multiplos = ${sem} | qnt: ${sem.length}`
}
function ex03(){
    let codigos = []
    let estoque = []
   
    for(let i=0;i<10;i++){
        codigos[i] = Number(prompt(`Informe o código`))
        estoque[i] = Number(prompt(`Informe a quantidade do produto`))
    }

    let cliente = Number(prompt("Informe o código do cliente"))
    while(cliente != 0){
    let codigo = Number(prompt("Informe o código do produto para compra"))
    let qnt = Number(prompt("Informe a qnt para compra"))
    let achou = false
    for(let i=0;i<5;i++){
        if(codigo === codigos[i]){
            achou = true 
            if(estoque[i]>= qnt){
            estoque[i] = estoque[i]-qnt
            }
            else{
                    alert("Falta do produto")
        }
    }
    }
    if(!achou){
        alert("Produto n encontrado")
    }
}
    console.log(`Estoque atualizado ${estoque}`)
}
function calculaEstoque(){
    let codigos = []
    let estoque = []
   
    for(let i=0;i<2;i++){
        codigos[i] = Number(prompt(`Informe o código`))
        estoque[i] = Number(prompt(`Informe a quantidade do produto`))
    }

    let cliente = Number(prompt("Informe o código do cliente"))
    while(cliente != 0){
    let codigo = Number(prompt("Informe o código do produto para compra"))
    let qnt = Number(prompt("Informe a qnt para compra"))
    let achou = false
    
        if(codigos.includes(codigo)){
                achou = true 
                if(estoque[i]>= qnt){
                estoque[i] = estoque[i]-qnt
                }
                else{
                    alert("Falta do produto")
            }
        }
    }
    if(!achou){
        alert("Produto n encontrado")
}
document.getElementById("calc01").innerHTML =(`Estoque atualizado ${estoque}`)
}
function ex04(){
    let vet = []
    let cont = 0
    for(let i=0;i<3;i++){
        vet[i] = Number(prompt(`Informe ${i+1} numero`))
    }
    for(let i=0;i<3;i++){
        if(vet[i] == 30){
            cont++
            console.log(`O número 30 foi digitado na posição ${i}`)
        }
    }
    if(cont===0){
        console.log(`O número 30 não foi digitado `)
    }
    
}
function ex05(){
    let ling = []
    let log = []
    let igual = []
    let cont = 0
    for(let i=0;i<3;i++){
        ling[i] = Number(prompt(`Informe a ${i+1} matricula do aluno que cursa Linguagem de Programação`))
    }
    for(let i=0;i<2;i++){
        log[i] = Number(prompt(`Informe a ${i+1} matricula do aluno que cursa Lógica de Programação`))
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<2;j++){
            if(ling[j]==log[i]){
                igual.push(ling[j])
            }
        }
    }
    console.log(`Os alunos matriculados em ambas possuem os respectivos códigos: ${igual}`)
    
}
function ex06(){
    let nomes = [],totalVendas = [],percentual = [],receber=[],total=0
    for(let i=0;i<2;i++){
        nomes[i] = prompt(`Digite o nome do ${i+1}º vendedor: `);
        totalVendas[i] = Number(prompt(`Digite o total de vendas do ${i+1}º vendedor: `));
        percentual[i] = Number(prompt(`Digite o percentual do vendedor do ${i+1}º vendedor: `));
        receber[i] = totalVendas[i] * percentual[i] / 100;
        console.log(`Nome do vendedor ${nomes[i]} e sua comissão ${receber[i]}`)
        total = total + totalVendas[i]
    }
    console.log(`Total de venda de todos os vendedores${total}`)
    

}

function ex07(){
    let num = [], qtdeNegativos = 0, somaPositivos = 0;

      for(let i = 0; i < 10; i++) {
        num[i] = Number(prompt(`Digite o ${i+1}º número: `));

        if(num[i] < 0) {
            qtdeNegativos++;
        } else {
            somaPositivos += num[i];
        }
      }

      alert(`Quantidade de números negativos: ${qtdeNegativos}\nSoma dos números positivos: ${somaPositivos}`);
    

}
function ex08(){
    let nomes = [], medias = [], maiorMedia = 0, MenorMedia = 999;

    for(let i = 0; i < 7; i++) {
      nomes[i] = prompt(`Digite o nome do ${i+1}º aluno: `);
      medias[i] = Number(prompt(`Digite a média do ${i+1}º aluno: `));

      if(MenorMedia > medias[i]) {
          MenorMedia = medias[i]
      }
      if(maiorMedia < medias[i]){
         maiorMedia = medias[i]
      }
    }

    alert(`maior média: ${maiorMedia} do aluno ${medias[i]}`);
}
function ex09(){
    let nomeProdutos = [], codProdutos = [], precoProdutos = [], novoPrecoProdutos = []
    for(let i = 0; i < 3; i++) {
      nomeProdutos[i] = prompt(`Digite o nome do ${i+1}º produto: `);
      console.log(`O ${i+1}º produto se chama: ${nomeProdutos[i]}`)
      codProdutos[i] = Number(prompt(`Digite o código do ${i+1}º produto: `));
      console.log(`O ${i+1}º código é: ${codProdutos[i]}`)
      precoProdutos[i] = Number(prompt(`Digite o preço do ${i+1}º produto: `));
      console.log(`O ${i+1}º preço é: ${precoProdutos[i]}`)
        if(precoProdutos[i] > 1000) {
            if(codProdutos[i] % 2 === 0) {
                    novoPrecoProdutos[i] = precoProdutos[i] * 1.2;
                } else {
                    novoPrecoProdutos[i] = precoProdutos[i] * 1.1;
                }
        }else if(codProdutos[i] % 2 === 0) {
                novoPrecoProdutos[i] = precoProdutos[i] * 1.15;
            }
        }

    for(let i = 0; i < 3; i++) {
        console.log(`Produto: ${nomeProdutos[i]} | Cód: ${codProdutos[i]} | Preço: R$${precoProdutos[i]} | Novo preço: R$${novoPrecoProdutos[i]}<br />`)
    }
    
}
function ex10(){
    
}

