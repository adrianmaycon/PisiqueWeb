import firebase from 'firebase'

export async function getProfs() {
    let profs = await firebase.firestore().collection('Professional').get()

    let listProfs = []
    profs.forEach(prof => {
        listProfs.push({ id: prof.id, ...prof.data() })
    })

    return listProfs
}

// export async function Register(title, miniDescription, description, genero, image_url, pdf_url, writer) {
//     try {
//         let livro = { title, miniDescription, description, genero, image_url, pdf_url, writer }

//         firebase.firestore()
//             .collection('Livros').add(livro)

//         return 'Success'
//     } catch (error) {
//         console.warn("Error Register: ", error);
//         throw error
//     }
// }

// export async function UpdateBook(idBook, title, miniDescription, description, genero, image_url, pdf_url, writer) {
//     try {
//         await firebase.firestore().collection('Livros').doc(idBook).update({
//             title, miniDescription, description, genero, image_url, pdf_url, writer
//         })
//         return true
//     } catch (error) {
//         console.warn("Error UpdateBook: ", error);
//         throw error
//     }
// }

export default { getProfs }
// export default { getBooks, Register, UpdateBook }