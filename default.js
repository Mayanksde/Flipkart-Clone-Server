import { products } from "./constants/product.js"
import Product from "./models/productSchema.js"

const DefaultData = async()=>{
    try {
        await Product.insertMany(products);
        console.log('Data inserted successfully');
        
    } catch (error) {
        console.log('Error while inserting default data',error.message);
    }
}

export default DefaultData;