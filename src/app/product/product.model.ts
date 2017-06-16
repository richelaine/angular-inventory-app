// Provides a 'Product' object

export class Product  // We're creating a new 'Product class' and the 'Constructor takes 5 arguments'.
                      // This product class doesn't have any dependencies on Angular, it's just a model that we'll use in our app.
{
    constructor
    (
        public sku: string, // a 'public' variable on instances of this class called 'sku'
                            // sku is a type of string
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number
    ) 

    {
        
    }
}