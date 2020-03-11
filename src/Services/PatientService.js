import firebase from 'firebase'

export async function getPatients() {
    let patient = await firebase.firestore().collection('Pacientes').get()

    let listPstients = []
    patient.forEach(patient => {
        listPstients.push({ id: patient.id, ...patient.data() })
    })

    return listPstients
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

export default { getPatients, Register }