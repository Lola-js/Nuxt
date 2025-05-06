import Note from '../../models/Note'

export default defineEventHandler(async () => {
  const notes = await Note.find()
  return { notes }
})
