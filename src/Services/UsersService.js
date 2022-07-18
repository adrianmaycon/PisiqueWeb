import firebase from 'firebase'

export async function GetDataUser(id) {

    let patient = await firebase.firestore().collection('Users').doc(`${id}`);

    let getDoc = patient.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('Esse documento não existe!');
                return false
            } else {
                // console.log('Dados do documento:', doc.data());
                return doc.data();
            }
        })
        .catch(err => {
            console.log('Erro ao obter o documento', err);
        });

    return getDoc

}

export async function GetDataHuman(id) {

    let patient = await firebase.firestore().collection('Humanos').doc(`${id}`);

    let getDoc = patient.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('Esse documento não existe!');
                return false
            } else {
                // console.log('Dados do documento:', doc.data());
                return doc.data();
            }
        })
        .catch(err => {
            console.log('Erro ao obter o documento', err);
        });

    return getDoc

}

export async function RegisterUser(data) {

    try {
        firebase.firestore()
            .collection('Users').doc(data.email).set(data)

        return 'Sucesso ao cadastrar'
    } catch (error) {
        console.log("Error Register Usuario: ", error);
        throw error
    }
}

export async function RegisterUserPisique(data) {
    try {
        firebase.firestore()
            .collection('PisiqueUsers').doc(data.email).set(data)
            // .collection('PisiqueUsers').add(data)

        return 'Sucesso ao cadastrar'
    } catch (error) {
        console.log("Error Register Usuario Pisique: ", error);
        throw error
    }
}

export async function RegisterHuman(data) {
    try {
        firebase.firestore()
            .collection('Humanos').doc(data.cpf).set(data)

        return 'Sucesso ao cadastrar'
    } catch (error) {
        console.log("Error Register Humano Instituto Pisique: ", error);
        throw error
    }
}

export async function getAvatars() {
    let avatars = await firebase.firestore().collection('MidiaProjeto').get()

    let listAvatars = []

    avatars.forEach(book => {
        listAvatars.push({...book.data() })
    })

    return listAvatars[0]

}

export default { GetDataUser, RegisterUserPisique, RegisterHuman, RegisterUser, GetDataHuman, getAvatars }