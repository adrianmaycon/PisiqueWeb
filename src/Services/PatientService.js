import firebase from 'firebase'

export async function getPatients() {
    let books = await firebase.firestore().collection('Pacientes').get()

    let listBooks = []
    books.forEach(book => {
        listBooks.push({ id: book.id, ...book.data() })
    })

    return listBooks
}

export async function Register(title, miniDescription, description, genero, image_url, pdf_url, writer) {
    try {
        let livro = { title, miniDescription, description, genero, image_url, pdf_url, writer }

        firebase.firestore()
            .collection('Livros').add(livro)

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