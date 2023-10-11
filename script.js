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


//lista02
function calculaSub(){
    let n = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let resultado = n-n2
    document.getElementById("calc01").innerHTML = `a subtração do primeiro número pelo segundo é ${resultado}`

}

function calculaMult(){
    let n = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    let resultado = n*n2*n3
    document.getElementById("calc01").innerHTML = `a multiplicação dos números é ${resultado}`

}
function calculaDiv(){
    let n = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    if(n2 == 0){
        document.getElementById("calc01").innerHTML = `divisão por 0 é impossível`
    }else{
        document.getElementById("calc01").innerHTML = `divisão do primeiro pelo segundo número é ${n/n2}`
    }
}
function calculaPonderada(){
    let n = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let resultado = ((n*2)+(n2*3))/(n+n2)
    document.getElementById("calc01").innerHTML = `a media ponderada dos números é ${resultado},contando que o primeiro número tem peso 2 e o segundo peso 3`
}

function calcula10Desc(){
    let n = Number(document.getElementById("valor").value);
    document.getElementById("calc01").innerHTML = `o novo valor com 10% de desconto é ${n-(n*0.1)}`

}
function calculaComissao(){
    let salario = Number(document.getElementById("n1").value);
    let vendas = Number(document.getElementById("n2").value);
    let total = salario+(vendas*0.04)
    document.getElementById("calc01").innerHTML = `o salário total do funcionário é ${total}`


}

function calculaPeso(){
    let peso = Number(document.getElementById("n1").value);
    document.getElementById("calc01").innerHTML = `se a pessoa engordar 15% sobre o seu peso, o novo peso será ${peso+(peso*0.15)}`
    document.getElementById("calc02").innerHTML = `se a pessoa engordar 20% sobre o seu peso, o novo peso será ${peso+(peso*0.2)}`

}
function calculaGrama(){
    let kg = Number(document.getElementById("n1").value);
    document.getElementById("calc01").innerHTML = `o peso em gramas é ${kg*1000}`

}
function calculaTrapezio(){
    let AM = Number(document.getElementById("n1").value);
    let Am = Number(document.getElementById("n2").value);
    let A = Number(document.getElementById("n3").value);
    let calc = ((AM+Am)*A)/2
    document.getElementById("calc01").innerHTML = `área do trapézio = ${calc}`

}
function calculaQuadrado(){
    let A = Number(document.getElementById("n1").value);
    document.getElementById("calc01").innerHTML = `área do quadrado = ${A*A}`
}
function calculaLosango(){
    let DM = Number(document.getElementById("n1").value);
    let Dm = Number(document.getElementById("n2").value);
    let calc = (DM*Dm)/2
    document.getElementById("calc01").innerHTML = `área do losango = ${calc}`

}
function calculaMinimo(){
    let Min = Number(document.getElementById("n1").value);
    let Salario = Number(document.getElementById("n2").value);
    let qnt = Salario/Min
    document.getElementById("calc01").innerHTML = `o salário do funcionário contém ${qnt} de salários minimos`
}

function calculaTabuada(){
    let num = Number(document.getElementById("n1").value);
    for(let i = 0;i<11;i++){
        document.write(num, " x "+i+" = " + (num*i) + "<br />");
    }
}
function calculaIdade(){
    let ano = Number(document.getElementById("n1").value);
    let atual = Number(document.getElementById("n2").value);
    let idade = atual-ano
    document.getElementById("calc01").innerHTML = `a idade da pessoa em anos é ${idade}`
    document.getElementById("calc02").innerHTML = `a idade da pessoa em meses é ${idade*12}`
    document.getElementById("calc03").innerHTML = `a idade da pessoa em dias é ${idade*365}`
    document.getElementById("calc04").innerHTML = `a idade da pessoa em semanas é ${idade*52}`
}
function calculaMulta(){
    let salario = Number(document.getElementById("n1").value);
    let conta1 = Number(document.getElementById("n2").value);
    let conta2 = Number(document.getElementById("n3").value);
    let valor = salario - (conta1+(conta1*0.02) + conta2+(conta2*0.02))
    document.getElementById("calc01").innerHTML = `o valor do salário do João ficou ${valor}`
}
function calculaHipo(){
    let cA = Number(document.getElementById("n1").value);
    let cO = Number(document.getElementById("n2").value);
    let hipo = (cA*cA)+(cO*cO)
    document.getElementById("calc01").innerHTML = `a hipotenusa é ${Math.sqrt(hipo)}`
}
function calculaEsfera(){
    let raio = Number(document.getElementById("n1").value);
    let com = 2*3.14*raio
    let area = 3.14*(raio*raio)
    let vol = 3/4*3.14*(raio*raio*raio)
    document.getElementById("calc01").innerHTML = `comprimento da esfera ${com}`
    document.getElementById("calc02").innerHTML = `area da esfera ${area}`
    document.getElementById("calc03").innerHTML = `vol da esfera ${vol}`
}

function conversaoFahrenheit(){
    let C = Number(document.getElementById("n1").value);
    let calc = (180*(C+32))/100
    document.getElementById("calc01").innerHTML = `a temperatura digitada em Celsius é  ${calc} em Fahrenheit`
}
function calcularPotencia(){
    let m1 = Number(document.getElementById("n1").value);
    let m2 = Number(document.getElementById("n2").value);
    let m22= m1*m2
    document.getElementById("calc01").innerHTML = `a dimensão da área possui ${m22} metros quadrados e precisa de ${m22*18}W de potência de energia.`
}
function calculaEscada(){
    let ang = Number(document.getElementById("n1").value);
    let dist = Number(document.getElementById("n2").value);
    let hip = dist/Math.cos(ang)
    document.getElementById("calc01").innerHTML = `a medida da escada é ${hip} metros`

}
function calculaSalarioRegras(){
    let NumHR = Number(document.getElementById("n1").value);
    let SM = Number(document.getElementById("n2").value);
    let NumHREx = Number(document.getElementById("n3").value);
    let HT = (SM*(1/8))
    let HE = (SM*(1/4))
    let salarioBruto = NumHR*HT
    let salarioExtra = NumHREx*HE
    let salario = salarioBruto+salarioExtra
    document.getElementById("calc01").innerHTML = `o salário a receber é ${salario} `
}
function calculaDiagonais(){
    let NumLados = Number(document.getElementById("n1").value);
    let NumDia = (NumLados*(NumLados-3))/2
    document.getElementById("calc01").innerHTML = `o número de diagonais do polígono é ${NumDia} `
}
function calculaAngulo(){
    let ang1 = Number(document.getElementById("n1").value);
    let ang2 = Number(document.getElementById("n2").value);
    if (ang1+ang2<180){
        document.getElementById("calc01").innerHTML = `o terceiro angulo é ${180-(ang1+ang2)} `
    }else{
        document.getElementById("calc01").innerHTML = `Não é um triangulo`
    }
}
function calculaMoeda(){
    let real = Number(document.getElementById("n1").value);
    document.getElementById("calc01").innerHTML = `O valor em R$${real} é $${real*1.80} dolares, $${real*2} marco alemão e $${real*3.57} libra esterlina `
}
function calculaHorasMinutos(){
    let hr = Number(document.getElementById("n1").value);
    let min = Number(document.getElementById("n2").value);
    document.getElementById("calc01").innerHTML = `${hr} horas são $${hr*60} minutos`
    document.getElementById("calc02").innerHTML = `o total de minutos = ${hr*60+min}`
    document.getElementById("calc03").innerHTML = `o total de segundos = ${(hr*60+min)*60} `
}

//lista03-vetores

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


function calculaEstoque(){
    let codigos = []
    let estoque = []
   
    for(let i=0;i<10;i++){
        codigos[i] = Number(prompt(`Informe o código`))
        estoque[i] = Number(prompt(`Informe a quantidade do produto`))
    }

    let cliente = Number(prompt("Informe o código do cliente. Digite 0 para finalizar"))
    while(cliente != 0){
    cliente = Number(prompt("Informe o código do cliente. Digite 0 para finalizar"))
    let codigo = Number(prompt("Informe o código do produto para compra"))
    let qnt = Number(prompt("Informe a quantidade para compra"))
    let achou = false
    for(let i=0;i<10;i++){
        if(codigo === codigos[i]){
            achou = true 
            if(estoque[i]>= qnt){
            estoque[i] = estoque[i]-qnt
            alert("Pedido Atendido. Obrigada e Volte Sempre!")
            document.getElementById("calc01").innerHTML =(`Estoque atualizado ${estoque}, Pedido Atendido. Obrigada e Volte Sempre!`)
            }
            else{
                    alert("Não temos estoque o suficiente dessa mercadoria")
        }
    }
    }
    if(!achou){
        alert("Produto não encontrado")
    }
}
    console.log(`Estoque atualizado ${estoque}`)
}


function calcula30(){
    let vet = []
    let cont = 0
    for(let i=0;i<15;i++){
        vet[i] = Number(prompt(`Informe ${i+1} numero de um vetor de tamanho 15`))
    }
    for(let i=0;i<15;i++){
        if(vet[i] == 30){
            cont++
            alert(`O número 30 foi digitado na posição ${i}`)
        }
    }
    if(cont==0){
        alert(`O número 30 não foi digitado `)
    }else{
        alert(`o número 30 foi digitado ${cont} vezes`)
    }
    
}
function calculaLogicaLinguagem(){
    let ling = []
    let log = []
    let igual = []
    for(let i=0;i<15;i++){
        ling[i] = Number(prompt(`Informe a ${i+1} matricula do aluno que cursa Linguagem de Programação`))
    }
    for(let i=0;i<10;i++){
        log[i] = Number(prompt(`Informe a ${i+1} matricula do aluno que cursa Lógica de Programação`))
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<2;j++){
            if(ling[j]==log[i]){
                igual.push(ling[j])
            }
        }
    }
    alert(`Os alunos matriculados em ambas possuem os respectivos códigos: ${igual}`)
    
}
function calculaComissaoVendedores(){
    let nomes = [],totalVendas = [],percentual = [],receber=[],total=0, maior=0
    for(let i=0;i<10;i++){
        nomes[i] = prompt(`Digite o nome do ${i+1}º vendedor: `);
        totalVendas[i] = Number(prompt(`Digite o total de vendas do ${i+1}º vendedor: `));
        percentual[i] = Number(prompt(`Digite o percentual do vendedor do ${i+1}º vendedor: `));
        receber[i] = totalVendas[i] * percentual[i] / 100;
        alert(`Nome do vendedor ${nomes[i]} e sua comissão ${percentual[i]}%`)
        total = total + totalVendas[i]
    }
    alert(`Total de venda de todos os vendedores ${total}`)
    let menor = receber[1]
    let nomeMaior 
    let nomeMenor
    for(let i =0;i<10;i++){
        if(receber[i]>maior){
            maior=receber[i]
            nomeMaior = nomes[i]
        }
        if(receber[i]<menor){
            menor = receber[i]
            nomeMenor  = nomes[i]
        }
        document.getElementById("calc01").innerHTML =`o vendedor ${nomeMaior} é o que receberá o maior valor sendo ele de ${maior} reais`
        document.getElementById("calc02").innerHTML =`o vendedor ${nomeMenor} é o que receberá o menor valor sendo ele de ${menor} reais`
    }
    
    

}

function calculaNegPos(){
    let num = [], qtdeNegativos = 0, somaPositivos = 0;

      for(let i = 0; i < 10; i++) {
        num[i] = Number(prompt(`Digite o ${i+1}º número: `));

        if(num[i] < 0) {
            qtdeNegativos++;
        } else {
            somaPositivos += num[i];
        }
      }
      document.getElementById("calc01").innerHTML =`Quantidade de números negativos: ${qtdeNegativos} \n Soma dos números positivos: ${somaPositivos}`    

}
function calculaMediaFinal(){
    let nomes = [], medias = [], maiorMedia = 0,nomeMaior=0

    for(let i = 0; i < 7; i++) {
      nomes[i] = prompt(`Digite o nome do ${i+1}º aluno: `);
      medias[i] = Number(prompt(`Digite a média final do ${i+1}º aluno: `));
      if(maiorMedia < medias[i]){
         maiorMedia = medias[i]
         nomeMaior=nomes[i]
      }
    }
    document.getElementById("calc01").innerHTML = `maior média: ${maiorMedia} do aluno ${nomeMaior}`;
}
function calculaRelatorio(){
    let nomeProdutos = [], codProdutos = [], precoProdutos = [], novoPrecoProdutos = []
    for(let i = 0; i < 10; i++) {
      nomeProdutos[i] = prompt(`Digite o nome do ${i+1}º produto: `);
      alert(`O ${i+1}º produto se chama: ${nomeProdutos[i]}`)
      codProdutos[i] = Number(prompt(`Digite o código do ${i+1}º produto: `));
      alert(`O ${i+1}º código é: ${codProdutos[i]}`)
      precoProdutos[i] = Number(prompt(`Digite o preço do ${i+1}º produto: `));
      alert(`O ${i+1}º preço é: ${precoProdutos[i]}`)
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

    for(let i = 0; i < 10; i++) {
        alert(`Produto: ${nomeProdutos[i]} | Cód: ${codProdutos[i]} | Preço: R$${precoProdutos[i]} | Novo preço: R$${novoPrecoProdutos[i]}`)
    }
    
}
function calculaVetResultantes(){
    let vet10= []
    let vet5 =[]
    let somaPares =0, somaVetor5=0,qnt=0
    for(let i=0;i<10;i++){
        vet10[i] = Number(prompt(`Digite o ${i+1} número do vetor de 10`))
    }
    for(let i=0;i<5;i++){
        vet5[i] = Number(prompt(`Digite o ${i+1} número do vetor de 5`))
        somaVetor5 = somaVetor5+ vet5[i]
    }
    for(let i=0;i<10;i++){
       if(vet10[i]%2==0){
            somaPares = somaPares + vet10[i]
       }
    }
    for(let i=0;i<10;i++){
        if(vet10[i]%2==1){
            for(let i=0;i<5;i++){
                if(vet10[i]%vet5[i]==0){
                    qnt++
                }
            }
        }
     }
    document.getElementById("calc01").innerHTML =`Soma de todos os elementos pares do primeiro vetor junto com todos os elemntos do segundo vetor ${somaVetor5+somaPares} `    
    document.getElementById("calc02").innerHTML =`Quantidade de elementos do primeiro vetor que são ímpares e multiplos dos elementos do segundo vetor é ${qnt}`    

}
function calculaPI(){
    let num = []
    let par=[]
    let imp=[]
    for(let i=0;i<10;i++){
        num[i] = Number(prompt(`Digite o ${i+1} número do vetor de 10`))
    }
    for(let i=0;i<10;i++){
        if(num[i]%2==0){
            par.push(num[i])
        }else{
            imp.push(num[i])
        }
    }
    document.getElementById("calc01").innerHTML =`os pares ${par} `    
    document.getElementById("calc02").innerHTML =`os ímpares ${imp}`     
}
function calculaSaida(){
    let num = []
    let soma = 0
    for(let i=0;i<5;i++){
        num[i] = Number(prompt(`Digite o ${i+1} número do vetor de 10`))
        soma = soma+num[i]
    }
    document.getElementById("calc01").innerHTML =`os números digitados foram ${num[0]} + ${num[1]}+${num[2]}+${num[3]}+${num[4]} = ${soma} ` 
}
function calculaNotas(){
    let nome = [], notas = []
    let media = 0
    for(let i = 0; i < 8; i++) {
      nome[i] = prompt(`Digite o nome do ${i+1}º aluno: `);
      alert(`O ${i+1}º aluno se chama: ${nome[i]}`)
      notas[i] = Number(prompt(`Digite a nota do ${i+1}º aluno: `));
      alert(`O ${i+1}º nota é: ${notas[i]}`)
      media = media+notas[i]
    }
    alert(`Relatório de Notas`)
    for(let i = 0; i < 8; i++) {
        alert(`${nome[i]} ${notas[i]} \n`)
      }
    alert(`Média da Classe ${media/8}`)
}

function calculaNotasRelatorios(){
    let nome = []
    let media = []
    let matriz = []
    let soma = 0
    let qntA=0
    let qntR =0
    for(let i = 0; i < 6; i++) {
        nome.push(prompt(`Digite o nome do ${i+1}º aluno: `))
        matriz[i]= []
        for(let j = 0;j<2;j++){
            matriz[i][j]=Number(prompt(`Digite a ${j+1} nota do ${i+1}º aluno: `));
            soma = soma + matriz[i][j]
            if((matriz[i][0]+matriz[i][1])>5){
                media[i]="Aprovado"
                qntA++
            }else{
                media[i]= "Reprovado"
                qntR++
            }
        }
        
    }
    for(let i = 0; i < 6; i++){
        for(let j = 0;j<2;j++){
            alert(`${nome[i]}| ${matriz[i][0]}| ${matriz[i][1]}| média = ${(matriz[i][0]+matriz[i][1])/2}| ${media[i]}`)
        }
    }
    document.getElementById("calc01").innerHTML =`Média da Turma ${soma/6}` 
    document.getElementById("calc02").innerHTML =`percentual dos alunos aprovados ${(100*qntA)/6}% ` 
    document.getElementById("calc03").innerHTML =`percentual dos alunos reprovados ${(100*qntR)/6}% ` 
}
function calculaDVD(){
    let nome = []
    let dvd = []
    for(let i = 0; i < 8; i++) {
        nome.push(prompt(`Digite o nome do ${i+1}º cliente: `))
        dvd.push(Number(prompt(`Digite a quantidade de DVDs locados do ${i+1}º cliente: `)))
    }
    for(let i=0;i<8;i++){
        if(dvd[i]>10){
            let qnt = dvd[i]/10
            alert(`o cliente ${nome[i]} possui ${qnt} locações grátis`)
        }else{
            alert(`o cliente ${nome[i]} não possui locações grátis`)
        }
        
    }
}
function calcula5Produtos(){
    let preco = []
    let nome = []
    let qnt=0
    let qnt2=0
    let soma = 0
    let nomes = []
    for(let i = 0; i < 5; i++) {
        nome.push(prompt(`Digite o nome do ${i+1}º produto: `))
        preco.push(Number(prompt(`Digite o preço do ${i+1}º produto: `)))
        if(preco<50){
            qnt++
        }
        if(preco>=50 && preco<100){
            nomes.push(nome[i])
        }
        if(preco>100){
            soma = soma+preco[i]
            qnt2++
        }
    }
    document.getElementById("calc01").innerHTML =`Quantidade de Produtos com preço inferiores a R$50,00 ${qnt}` 
    document.getElementById("calc02").innerHTML =`Nome dos produtos que possuem preço entre R$50,00 a R$100,00 - ${nomes}% ` 
    document.getElementById("calc03").innerHTML =`Media de preços dos produtos que possuem valores maiores que R$100,00 ${soma/qnt2}% ` 
}

function calculaOrdenados(){
    let vet1 = []
    let vet2 = []
    for(let i = 0; i < 10; i++) {
        vet1.push(prompt(`Digite o ${i+1}º elemento do primeiro vetor: `))
    }
    for(let i = 0; i < 10; i++) {
        vet2.push(prompt(`Digite o ${i+1}º elemento do segundo vetor: `))
    }
    const vet3 = vet1.concat(vet2)
    document.getElementById("calc01").innerHTML =`Elementos descrescentes dos vetores: ${vet3.sort()}` 


}
function calculaMaiorMenorPosicao(){
    let numero = []
    let maior =0
    for(let i = 0; i < 15; i++) {
        numero.push(prompt(`Digite o ${i+1}º número de 15: `))
    }
    for(let i = 0; i < 15; i++) {
       if(numero[i]> maior){
        document.getElementById("calc01").innerHTML =`o maior número do vetor é ${numero[i]} e ocupa a posição ${i}` 
       }
    }
    let menor = vetor[i]
    for(let i = 0; i < 15; i++) {
        if(numero[i]< menor){
         document.getElementById("calc02").innerHTML =`o menor número do vetor é ${numero[i]} e ocupa a posição ${i}` 
        }
     }
}
function calculaIndicesIguais(){
    let vet1 = []
    let vet2 = []
    let vet3=[]
    for(let i = 0; i < 10; i++) {
        vet1.push(prompt(`Digite o ${i+1}º elemento do primeiro vetor: `))
    }
    for(let i = 0; i < 10; i++) {
        vet2.push(prompt(`Digite o ${i+1}º elemento do segundo vetor: `))
    }
    for(let i = 0; i < 10; i++) {
        vet3.push(vet1[i]*vet2[i])
    }
    document.getElementById("calc01").innerHTML =`os elementos dos dois vetores que possuem indices iguais mulltiplicados um pelo outro são ${vet3}` 
}
function calculaPositivos(){
    let vet1 = []
    let vet3 = []
    for(let i = 0; i < 10; i++) {
        vet1.push(prompt(`Digite o ${i+1}º elemento do primeiro vetor: `))
    }for(let i = 0; i < 10; i++) {
        if(vet1[i]>0){
            vet3.push(vet1[i])
        }
    }
    document.getElementById("calc01").innerHTML =`os elementos positivos do vetor são ${vet3}` 
}
function calculaNulosPor1(){
    let vet1 = []
    let vet3 = []
    for(let i = 0; i < 10; i++) {
        vet1.push(prompt(`Digite o ${i+1}º elemento do primeiro vetor: `))
    }for(let i = 0; i < 10; i++) {
        vet3.push(vet1[i])
    }
    for(let i = 0; i < 10; i++) {
        if(vet3[i]<0){
            vet3[i] = 1
        }
    }
    document.getElementById("calc01").innerHTML =`os elementos do vetor digitados são ${vet1}` 
    document.getElementById("calc02").innerHTML =`os nulos foram substituídos por 1 -  ${vet3}` 

}
function calculaCompactar(){
    let vetA = []
    let vetB = []
    for(let i = 0; i < 10; i++) {
        vetA.push(prompt(`Digite o ${i+1}º elemento do primeiro vetor: `))
    }
    for(let i = 0; i < 10; i++) {
        if(vetA[i]>0){
            vetB.push(vetA[i])
        }
    }
    document.getElementById("calc01").innerHTML =`os elementos do vetor A foram retirados caso fossem nulos ou negativos, então foram armazanados no vetor B - ${vetB}` 


}
function calculaBrincando(){
    let vetA = []
    let vetB = []
    let sub = 0
    for(let i = 0; i < 5; i++) {
        vetA.push(prompt(`Digite o ${i+1}º elemento do vetor A: `))
    }for(let i = 0; i < 5; i++) {
        vetB.push(prompt(`Digite o ${i+1}º elemento do vetor B: `))
    }
    for(let i = 0; i < 5; i++) {
        sub = sub - (vetA[i] - vetB[1-i])
    }
    document.getElementById("calc01").innerHTML =`a subtração dos elementos diante da regra, subtrair o primeiro elemento do vetor A do último elemento do vetor B, e consequentemente é ${sub}` 


}
//arrumar
function calculaPrimoVetor(){
    let vet = []
    let vetPrimo = []
    let sub = 0
    for(let i = 0; i < 5; i++) {
        vet.push(prompt(`Digite o ${i+1}º elemento do vetor de 15: `))
    }
    for(let i = 0; i < 5; i++) {
        
    }
}
//arrumar
function calculaDivMaior(){
    let vet = []
    let maior = 0
    let soma = 0
    let calc
    for(let i = 0; i < 5; i++) {
        vet.push(prompt(`Digite o ${i+1}º elemento do vetor de 15: `))
        soma = soma + vet[i]
    }
    for(let i = 0; i < 5; i++) {
        if(vet[i]>maior){
            maior = vet[i]
        }
    }
    calc = soma/maior
    document.getElementById("calc01").innerHTML =`a divisão de todos os elementos divididos pelo elemento maior do vetor é ${calc}` 

}
//lista04
function Qnt15a20(){
    let qnt = 0
    let matriz = []
    for(let i = 0;i<3;i++){
        matriz[i] = [] //cria um vetor vazio
        for(let j = 0;j<5;j++){
            matriz[i][j] = Number(prompt(`Digite o elemento da ${i+1} linha e o elemento da ${j+1} coluna`))
        }
    }
    for(let i = 0;i<2;i++){
        for(let j = 0;j<2;j++){
            if(matriz[i][j]>15 && matriz[i][j]<20){
                qnt++
            }
        }
    }
    document.getElementById("calc01").innerHTML =`a quantidade de elementos dentro da matriz que estão entre 15 a 20 são ${qnt}`
}

function calculaMediaPares(){
    let qnt = 0
    let qnt2=0
    let matriz = []
    let soma = 0
    for(let i = 0;i<2;i++){
        matriz[i] = [] //cria um vetor vazio
        for(let j = 0;j<4;j++){
            matriz[i][j] = Number(prompt(`Digite o elemento da ${i+1} linha e o elemento da ${j+1} coluna`))
        }
    }
    for(let i = 0;i<2;i++){
        for(let j = 0;j<4;j++){
            if(matriz[i][j]>12 && matriz[i][j]<20){
                qnt++
            }
        }
        alert(`a quantidade de elementos entre 12 a 20 da linha ${i+1} é ${qnt}`)
    }
    for(let i = 0;i<2;i++){
        for(let j = 0;j<4;j++){
            if(matriz[i][j]%2==0){
              soma = soma+matriz[i][j]
              qnt2++
            }
        }
    }
    alert(`a média dos elementos pares da matriz é ${soma/qnt2}`)
}

function calculaMm(){
    let matriz = []
    let maior = 0
    let k,l
    let a,b
    let menor
    for(let i = 0;i<6;i++){
        matriz[i] = [] //cria um vetor vazio
        for(let j = 0;j<3;j++){
            matriz[i][j] = Number(prompt(`Digite o elemento da ${i+1} linha e o elemento da ${j+1} coluna`))
        }
    }
    for(let i = 0;i<6;i++){
        for(let j = 0;j<3;j++){
            if(matriz[i][j]>maior){
                maior = matriz[i][j]
                k=i
                l=j
            }
        }
    }
    for(let i = 0;i<6;i++){
        for(let j = 0;j<3;j++){
            menor = matriz[0][0]
            if(matriz[i][j]<menor){
                menor = matriz[i][j]
                a=i
                b=j
            }
        }
    }
    alert(`o maior elemento da matriz é ${maior} e está localizado na linha ${k+1} e na coluna ${l+1}`)
    alert(`o menor elemento da matriz é ${menor} e está localizado na linha ${a+1} e na coluna ${b+1}`)

}
function calcula15alunos(){
    let matriz = []
    let soma = 0
    let sit = []
    let nome = []
    let media
    let somaN = 0
    for(let i = 0;i<15;i++){
        matriz[i] = [] //cria um vetor vazio
        for(let j = 0;j<5;j++){
            matriz[i][j] = Number(prompt(`Digite a ${j+1} nota do ${i+1} aluno`))
        }
    }
    for(let i = 0;i<15;i++){
        nome[i]= prompt(`Digite o nome do ${i+1} aluno`)
    }
    for(let i = 0;i<15;i++){
        soma = 0
        for(let j = 0;j<5;j++){
            soma = soma + matriz[i][j]
            media = soma/5
            if(media>5){
                sit[i] = "Aprovado"
            }else{
                sit[i] = "Reprovado"
            }
            somaN = somaN+soma
        }
        alert(`o aluno ${nome[i]} possui média das provas de ${media} e a situação é ${sit[i]}`)
    }
    alert(`a média da turma é ${somaN/15}`)
}

function calculaLoja(){
    let matriz = []
    let soma = 0
    let somaA=0
    let nomeMes = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
    for(let i = 0;i<12;i++){
        matriz[i] = [] //cria um vetor vazio
        for(let j = 0;j<4;j++){
            matriz[i][j] = Number(prompt(`Digite o que foi vendido na ${j+1} semana do ${i+1} mês`))
        }
    }
    for(let i = 0;i<12;i++){
        soma = 0
        for(let j = 0;j<4;j++){
           soma = soma +matriz[i][j]
        }
        alert(`o total de vendas no mês de ${nomeMes[i]} foi de ${soma}`)
    }
    for(let i = 0;i<12;i++){
        for(let j = 0;j<4;j++){
            alert(`o total de vendas na ${j+1} semana do ${i+1} mês foi de ${matriz[i][j]}`)
        }
    }
    for(let i = 0;i<12;i++){
        for(let j = 0;j<4;j++){
           somaA = somaA +matriz[i][j]
        }
    }
    alert(`o total de vendas no ano foi de ${somaA} `)

}

//lista05
function entradaDadosBike(bikes, marcas){
    // entrada de dados
   let bike = {
            marca: prompt(`Informe marca da bike`).toUpperCase(),
            modelo: prompt(`Informe modelo da bike`),
            aro: Number(prompt(`Informe aro da bike`)),
            quadro: Number(prompt(`Informe quadro da bike`)),
            ano: Number(prompt(`Informe ano da bike`)),
            preco: Number(prompt(`Informe preco da bike`))
        }
        while (!marcas.includes(bike.marca)){
            bike.marca = prompt(`Informe nova marca da bike`).toUpperCase()
        }
        bikes.push(bike)
        alert('Bike cadastrada com sucesso')
}
function calcularMediaPrecos(bikes){
    let soma = 0
    for(let i=0;i<bikes.length;i++){
        soma = soma + bikes[i].preco
    }
    if (bikes.length == 0){
        console.log(`Não há bikes cadastradas`)
    }
    else {
        console.log(`Média de preço das bikes: ${soma/bikes.length}`)
    }
}

function calculaBikeMaisAntiga(bikes){
    // bikes mais antigas, considerando empate
    if (bikes.length == 0){
        return (`Não há bikes cadastradas`)
    }
    let maisAntiga = [] 
    maisAntiga.push(bikes[0])
    for(let i=1;i<bikes.length;i++){
       if (bikes[i].ano < maisAntiga[0].ano){
           maisAntiga = [] // zera o vetor
           maisAntiga.push(bikes[i])
       }
       else if (bikes[i].ano == maisAntiga[0].ano){
                maisAntiga.push(bikes[i])
            }
    }
    return maisAntiga
}

function calculaBikesCaloi(bikes){
    // bikes da marca CALOI
    if (bikes.length == 0){
        console.log(`Não há bikes cadastradas`)
    }
    else {
        let caloi = []
        for(let i=0;i<bikes.length;i++){
            if (bikes[i].marca == "CALOI"){
                caloi.push(bikes[i])
            }
        }
        console.log(caloi)
    }
}

function calculaQtde29(bikes){
    // quantas bikes possuem aro 29
    if (bikes.length == 0){
        return (`Não há bikes cadastradas`)
    }
    let aro29 = 0
    for(let i=0;i<bikes.length;i++){
        if (bikes[i].aro == 29){
            aro29++
        }
    }
    return (`Quantidade de bikes com aro 29: ${aro29}`)
}
function calculaBikeMaiorQuadro(bikes){
     //  bike com maior quadro, pode-se desconsiderar empates
    if  (bikes.length == 0){
        console.log(`Não há bikes cadastradas`)
    }
    else {
        let maiorQuadro = bikes[0]
        for(let i=1;i<bikes.length;i++){
            if (bikes[i].quadro > maiorQuadro.quadro){
                maiorQuadro = bikes[i]
            }
        }
        console.log(maiorQuadro)
    }
}
function principal(){
    let bikes = []
    let marcas = ["CALOI", "SCOTT", "CANNONDALE"]
    let opcao // opção escolhida pelo usuário
    do {
        opcao = Number(prompt("Digite \n 1. Cadastra uma bike \n 2. Calcula média de preços \n 3. Calcula bikes mais antigas \n 4. Calcula bikes da marca CALOI \n 5. Calcula quantidade de bikes com aro 29 \n 6. Calcula bike com maior quadro \n 7. Finaliza"))
        switch(opcao){
            case 1: entradaDados(bikes, marcas) 
                    break
            case 2: calcularMediaPrecos(bikes)
                    break
            case 3: console.log(calculaBikeMaisAntiga(bikes))
                    break
            case 4: calculaBikesCaloi(bikes)
                    break
            case 5: console.log(calculaQtde29(bikes))
                    break
            case 6: calculaBikeMaiorQuadro(bikes)
                    break
            case 7: alert('Programa será finalizado')
                    break
            default: alert(`Opção inválida`) 
        }
    }
    while (opcao != 7)
}



let principalFarm = () =>{
    let vetFarmacias = []
    let vetRemedios = []
    let opcao 
    do{
        opcao = Number(prompt(`Digite a opção: \n 
        1 - Cadastrar uma farmácia\n
        2- Cadastrar um remédio\n
        3- Fazer uma compra de um remédio\n
        4- Sair`))
        switch(opcao){
            case 1: cadastraFarmacias(vetFarmacias)
                    break
            case 2: cadastraRemedios(vetRemedios, vetFarmacias)
                    break
            case 3: vendeRemedios(vetRemedios)
                    break
            case 4: alert(`O programa será finalizado`)
                    break
            default:alert(`Opção inválida`)
        }
    }
    while(opcao!=4)
}

let cadastraFarmacias = (vetFarmacias) =>{
        let objFarmacia = {
            codigo: Number(prompt(`Digite o código da  farmácia `)),
            nome: prompt(`Digite o nome da  farmácia `),
            endereco: prompt(`Digite o endereço da  farmácia `)
        }
        while(vetFarmacias.some((farm) => farm.codigo == objFarmacia.codigo)){
            alert(`código existente`)
            objFarmacia.codigo = Number(prompt(`Informe novo código da farmácia`))
        }
        vetFarmacias.push(objFarmacia)
        alert('farmacia cadastrada com sucesso')
}
let cadastraRemedios = (vetRemedios, vetFarmacias) => {
    if(vetFarmacias.length === 0){
        alert(`Não há farmácias cadastradas`)
    }else{
        let objRemedio = {
            codigoFarm: Number(prompt(`Digite o código da  farmácia `)),
            nome: prompt(`Digite o nome do  remédio `),
            qnt: Number(prompt(`Digite a quantidade de estoque do  remédio `)),
            preco: Number(prompt(`Digite o preço do  remédio `))
        } 
        while(!vetFarmacias.some( (percorre) => percorre.codigo === objRemedio.codigoFarm)){
            alert(`Farmácia inexistente`)
            objRemedio.codigoFarm = Number(prompt(`Informe novo código da farmácia`))
        }
    
        vetRemedios.push(objRemedio)
        alert('remedio cadastrado com sucesso')
    }
   

}
let vendeRemedios = (vetRemedios) => {
    if(vetRemedios === 0){
        alert(`Não há remédios cadastrados`)
    }else{
            let codFarmacia = Number(prompt(`informe o código da farmacia do remedio`))
            let nomeRemedio = prompt(`informe o nome do remedio`)
            let qntVendida = Number(prompt(`informe a quantidade de remédios para a compra`))
            let achou = false//assume que n encontrou
            // vamos procurar o remedio na lisra
            for(let i = 0;i<vetRemedios.length;i++){
                if(vetRemedios[i].codigoFarm == codFarmacia && vetRemedios[i].nome == nomeRemedio){
                    achou = true
                    if(vetRemedios[i].qnt> qntVendida){
                        vetRemedios[i].qnt = vetRemedios[i].qnt - qntVendida
                        alert(`Venda efetuada com sucesso`)
                    }
                    else {
                        alert('Estoque insuficiente')
                    }
                }
            }
            //nesse caso o achou n entrou no for, por isso pergunta se ele é false e assim declarar que n achou remedio 
            if (!achou){
                alert(`Remédio/farmácia não existe ou vc está digitando o código errado da farmácia que o remédio está incluso`)
            }
            alert(`Compra efetuada`)
        }
}

let cadastraPP = (vetorPP) => {
    // solicita dados ao usuário e guarda em um objeto
    let objPP = {
        codigo: Number(prompt(`Informe o código do partido`)),
        nome: prompt(`Informe o nome do partido`),
        sigla: prompt(`Informe a sigla do partido`),
        presidente: prompt(`Informe o nome do presidente do partido`),
        nroCand: Number(prompt(`Informe o número de candidatos do partido`))   
    }
    // verifica se o código já existe
    while (vetorPP.some( (pp) => pp.codigo == objPP.codigo)) {
        alert(`Código já existente`)
        objPP.codigo = Number(prompt(`Informe um novo código do partido`))
    }
    // adiciona o objeto no vetor
    vetorPP.push(objPP)
    alert('Partido adicionado')
}
let cadastraPolitico = (vetorPolitico, vetorPP) => {
    let objPolitico = {
        codPartido:  Number(prompt(`Informe o código do partido`)),
        nome: prompt(`Informe o nome do político`),
        qtde: 0,
        cargo: prompt(`Informe o cargo do político`)
    }
    // verifica se o código do partido existe
    while (!vetorPP.some( (partido) => partido.codigo == objPolitico.codPartido)) {
        alert(`Partido não encontrado`)
        objPolitico.codPartido = Number(prompt(`Informe um código de partido que exista`))
    }
    vetorPolitico.push(objPolitico)
    alert('Político adicionado')
}
let votar = (vetorPolitico) => {
    let codigoPartido = Number(prompt(`Informe o código do partido`))
    let nomePolitico = prompt(`Informe o nome do político`)
    // percorre o vetor
    let achou = false
    for(let i=0; i<vetorPolitico.length; i++) {
        if (codigoPartido == vetorPolitico[i].codPartido && nomePolitico == vetorPolitico[i].nome) {
            vetorPolitico[i].qtde++
            alert(`Voto registrado com sucesso`)
            achou = true
        }
    }
    if (!achou){
        alert('Político não encontrado')
    }
}
// função principal
let votacao = () => {
    let vetorPP = []
    let vetorPolitico = []
    let opcao
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar partido \n 2. Cadastrar político \n 3. Votar \n4. Sair`))
        switch(opcao) {
            case 1: cadastraPP(vetorPP)
                    break
            case 2: cadastraPolitico(vetorPolitico, vetorPP)
                    break        
            case 3: votar(vetorPolitico)
                    break
            case 4: alert('Obrigado por utilizar nosso programa')
                    break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 4)
    console.log(vetorPP)
}
