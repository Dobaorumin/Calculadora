export default function calculando(numero){
    const gastosBasicos = (numero * 50) / 100;
    const ahorro = (numero * 20) / 100;
    const gastosPersonales = (numero * 30) / 100;
    const ahorradoAño = ahorro * 12;


    if(numero.length <= 2){
        return null
    } else if(numero.length >= 3){
        return {gastosBasicos,ahorro,gastosPersonales,ahorradoAño}
    }

}