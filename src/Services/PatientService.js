import firebase from 'firebase'

export async function getPatients() {
    let books = await firebase.firestore().collection('Pacientes').get()

    let listBooks = []
    books.forEach(book => {
        listBooks.push({ id: book.id, ...book.data() })
    })

    return listBooks
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

export async function UpdateBook(idBook, title, miniDescription, description, genero, image_url, pdf_url, writer) {
    try {
        await firebase.firestore().collection('Livros').doc(idBook).update({
            title, miniDescription, description, genero, image_url, pdf_url, writer
        })
        return true
    } catch (error) {
        console.warn("Error UpdateBook: ", error);
        throw error
    }
}

export default { getPatients, Register, UpdateBook }