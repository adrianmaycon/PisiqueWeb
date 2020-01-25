import firebase from 'firebase'

export function register(title, description, image_url, pdf_url, genero) {
    let livro = { title, description, image_url, pdf_url, genero }

    firebase.firestore()
        .collection('Livros').add(livro)
}

export async function getBooks() {
    let books = await firebase.firestore().collection('Livros').get()

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

export default { register, getBooks, Register, UpdateBook }