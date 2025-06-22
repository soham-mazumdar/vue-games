import { db } from '@firebase.js'
import {
  collection, addDoc, getDocs, updateDoc, doc, query, where
} from 'firebase/firestore'

const booksRef = collection(db, 'books')

// ADD NEW BOOK
export const addBook = async (book) => {
  const docRef = await addDoc(booksRef, book)
  return docRef.id
}

// GET USER'S BOOKS
export const getUserBooks = async (userId) => {
  const q = query(booksRef, where('userId', '==', userId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

// UPDATE PROGRESS / STATUS
export const updateBook = async (id, data) => {
  const bookDoc = doc(db, 'books', id)
  await updateDoc(bookDoc, data)
}
