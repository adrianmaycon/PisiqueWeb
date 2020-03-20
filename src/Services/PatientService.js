import firebase from 'firebase'

export async function GetPatients() {
    let patient = await firebase.firestore().collection('Pacientes').get()

    let listPstients = []
    patient.forEach(patient => {
        listPstients.push({ id: patient.id, ...patient.data() })
    })

    return listPstients
}

export async function GetDataPatient(id) {

    let patient = await firebase.firestore().collection('Pacientes').doc(`${id}`);

    let getDoc = patient.get()
        .then(doc => {
            if (!doc.exists) {
                return console.log('Esse documento não existe!');
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

export async function Register(address, cpf, dataNasc, dateRegister, email, maritalStatos, name, rg, tel01, tel02) {
    try {
        let paciente = { address, cpf, dataNasc, dateRegister, email, maritalStatos, name, rg, tel01, tel02 }
        console.log('Paciente: ', paciente)

        firebase.firestore()
            .collection('Pacientes').add(paciente)

        return 'Success'
    } catch (error) {
        console.warn("Error Register: ", error);
        throw error
    }
}

export default { GetPatients, Register, GetDataPatient }