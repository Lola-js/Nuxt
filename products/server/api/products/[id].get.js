export default defineEventHandler((event) => {
    const { id } = event.context.params  

    const products = {
        1: { title: 'Tomate', description: 'Origen España' },
        2: { title: 'Pimientos', description: 'Pimiento tricolor. Procedencia España' },
        3: { title: 'Zanahorias', description: 'Origen España, procedencia Jérez de la Frontera' },
        4: { title: 'Rúcula', description: 'Origen España' },

    
    }

    if (products[id]) {
        return products[id] 
    } else {
        return { title: 'Producto no disponible', description: 'Este producto no existe.' }  // Devuelve un mensaje de error si no se encuentra
    }
})
