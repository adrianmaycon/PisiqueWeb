import axios from 'axios';

export async function receiveCep(cep) {
    try {
        let result = await axios.get(`https://api.pagar.me/1/zipcodes/${cep}`)

        return result
    } catch (error) {
        console.log("Error ReceiveCep: ", error.response);

        throw error
    }
}

export async function validateCpf(cpf) {
    let cpfValue = cpf.replace(".", "").replace(".", "").replace("-", "");

    const digitos = cpfValue.split('').map(digito => digito.toString())

    switch (cpfValue) {
        case '00000000000':
            return false
        case '11111111111':
            return false
        case '22222222222':
            return false
        case '33333333333':
            return false
        case '44444444444':
            return false
        case '55555555555':
            return false
        case '66666666666':
            return false
        case '77777777777':
            return false
        case '88888888888':
            return false
        case '99999999999':
            return false
        default:
            let a = digitos.slice(0, 9).reduce((acumulador, valorAtual, indice) => parseInt(acumulador) + parseInt(valorAtual * (10 - indice)), digitos[0]) - parseInt(cpfValue.split('')[0])
            let b = digitos.slice(0, 10).reduce((acumulador, valorAtual, indice) => parseInt(acumulador) + parseInt(valorAtual * (11 - indice)), digitos[0]) - parseInt(cpfValue.split('')[0])

            let valorA = a % 11 < 2 ? 0 : 11 - (a % 11)
            let valorB = b % 11 >= 2 ? 11 - (b % 11) : 0

            let v1 = parseInt(cpfValue.split('')[9])
            let v2 = parseInt(cpfValue.split('')[10])

            let status = valorA === v1 && valorB === v2 ? true : false

            return status
    }
}

export async function mTel(tel) {
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    tel = tel.replace(/(.{3})(\d)/, "$1 $2")
    if (tel.length === 9) {
        tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length === 10) {
        tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length === 11) {
        tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length === 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
        tel = tel.replace(/(.{4})$/, "-$1")
    }
    return tel;
}

export async function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    return cpf
}

export async function mData(data) {
    console.log(data)

    return data
}

export async function mNcc(num) {
    num = num.replace(/\D/g, "");
    num = num.replace(/^(\d{4})(\d)/g, "$1 $2");
    num = num.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
    num = num.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
    return num;

    // num = num.replace(/\D/g, ""); 
    // num = num.replace(/(\d{4})/g, "$1 $2",); 
    // num = num.replace(/\.$/, ""); 
    // num = num.substring(0, 19)

    // return num;
}

// const fMasc = (objeto, mascara) => {
//     obj = objeto
//     masc = mascara
//     setTimeout("fMascEx()", 1)
// }

// const fMascEx = () => {
//     obj.value = masc(obj.value)
// }

// const mCNPJ = (cnpj) => {
//     cnpj = cnpj.replace(/\D/g, "")
//     cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
//     cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
//     cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2")
//     cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2")
//     return cnpj
// }

export async function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2")
    return cep
}

// const mNum = (num) => {
//     num = num.replace(/\D/g, "")
//     return num
// }

// function removeAcento (text)
// {       
//     text = text.toLowerCase();                                                         
//     text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
//     text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
//     text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
//     text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
//     text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
//     text = text.replace(new RegExp('[Ç]','gi'), 'c');
//     return text;                 
// }

export default { receiveCep, validateCpf, mTel, mCPF, mData, mCEP, mNcc }