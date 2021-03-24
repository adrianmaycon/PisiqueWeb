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

export async function RegisterUser(data) {
    try {
        firebase.firestore()
            .collection('PisiqueUsers').add(data)

        return 'Sucesso ao cadastrar'
    } catch (error) {
        console.log("Error Register Usuario: ", error);
        throw error
    }
}

export default { GetDataUser, RegisterUser }