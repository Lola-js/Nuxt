export default class ProductService{
    base_uri='http://localhost:3000/api/products'

    async getProductById(id){
        const raw =await fetch (`${this.base_uri}/${id}`, 
            { method: 'GET' }
        )
        return await raw.json()

    }
}