// bookModel.js
export const ReadingStatus = ['To Read', 'Reading', 'Completed']

export default function createBook({ title, author, totalPages, userId }) {
  return {
    title,
    author,
    totalPages,
    currentPage: 0,
    status: 'To Read',
    createdAt: new Date(),
    userId
  }
}
