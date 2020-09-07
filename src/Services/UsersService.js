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

export default { GetDataUser }