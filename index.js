var prompt = require('prompt-sync')();

// variavel com os dados do heroi
const hero = {
    name: '',
    experience: 0,
}

// captura a entrada de valores e alimenta a variavel hero
function inputValues() {
    hero['name'] = prompt("Qual o nome do seu herói? ");
    const experience = prompt("Quantos pontos de experiencia seu herói tem? ");
    hero['experience'] = parseInt(experience) || 0;
}

// verifica o nivel do usuario baseado em sua quantidade de experience
function verifyNivel(experience) {
    if (experience <= 1000) {
        return "Ferro";
    } else if (experience <= 2000) {
        return "Bronze";
    } else if (experience <= 5000) {
        return "Prata";
    } else if (experience <= 7000) {
        return "Ouro";
    } else if (experience <= 8000) {
        return "Platina";
    } else if (experience <= 9000) {
        return "Ascendente";
    } else if (experience <= 10000) {
        return "Imortal";
    } 
    return "Radiante";
}

function outputMessage() {
    const nivel = verifyNivel(hero['experience']);
    console.log(`O Herói de nome ${hero['name']} está no nível de ${nivel}`);
}

function main(){
    console.log('Seja bem vindo ao classificador de heróis');
    let process = true;
    while(process === true) {
        console.log('');
        inputValues();
        outputMessage();
        console.log('');
        const verifyProcess = prompt("Deseja classificar um novo heroi? Digite sim ou não: ");
        if (verifyProcess.toLowerCase() !== 'sim') {
            process = false;
        }
    }
    console.log('');
    console.log('Até logo');
}

main();