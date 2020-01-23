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

export default { register, getBooks }