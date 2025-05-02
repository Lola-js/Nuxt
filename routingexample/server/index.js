import mongoose from 'mongoose'

export default async () => {
 const config = useRuntimeConfig()
 await mongoose.connect(config.mongodbUri)
 console.log("funciona")
}
