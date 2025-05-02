export default class NoteService{
    base_uri="http://localhost:3000/api/notes"

    async GetNote(){
       const uri = this.base_uri
       const rawResponse = await fetch (uri,{
           method:'GET'
       })
       const response = await rawResponse.json()
       return response
    }
}