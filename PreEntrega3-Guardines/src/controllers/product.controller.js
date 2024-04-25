const ProductRepository = require("../repositories/product.repository.js");
const productRepository = new ProductRepository();

class ProductController {
    async addProduct(request, response) {
        const newProduct = request.body;
    
        try{
            await productRepository.addProduct(newProduct);
            response.status(201).json({message: "Product add successfully"});
        }catch (error){
            console.log("Error add product", error);
            response.status(500).json({error: "Server error"});
        }
    };
    
    async getProducts(request, response) {   
        try{
            let {limit = 10, page = 1, sort, query} = request.query;
    
            const products = await productRepository.getProducts(limit, page, sort, query);
            response.json(products);
            
        }catch (error){
            console.log("Error getting products", error);
            response.status(500).json({error: "Server error"});
        }
    };

    async getProductById(request, response) {
        const id = request.params.pid;
        try{
            const product = await productRepository.getProductById(id);
    
            if(!product){
                return response.json({error: "Product not found"});
            }
            response.json(product);
        }catch (error){
            console.log("Error getting product", error);
            response.status(500).json({error: "Server error"});
        }
    };
    
    async updateProduct(request, response) {
        const id = request.params.pid;
        const productUpdate = request.body;
        try{
            await productRepository.updateProduct(id, productUpdate);
            response.json({message: "Product update successfully"});
        }catch (error){
            console.log("Error update product", error);
            response.status(500).json({error: "Server error"});
        }
    };
    
    async deleteProduct(request, response) {
        const id = request.params.pid;
    
        try{
            await productRepository.deleteProduct(id);
            response.json({message: "Product deleted successfully"});
        }catch (error){
            console.log("Error deleted product", error);
            response.status(500).json({error: "Server error"});
        }
    };
}

module.exports = ProductController;