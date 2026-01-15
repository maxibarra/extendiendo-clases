import products from "./products.json";

class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;

  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {

  constructor(n:string){
    super(n);

    products.forEach(product => this.addProduct(product));
  }

  addProduct(product: Product): void{
    //verificamos si ya existe el producto
    const existe = this.cosas.some(p=> p.id === product.id);
    if(!existe){
      //sino existe lo agregamos
      this.cosas.push(product)
    }else{
      console.log(`El producto con id ${product.id} ya existe`);
    }
  }
  getProduct(id:number): Product{
   return this.cosas.find(p => p.id === id);   
  }

  removeProduct(id:number): void{
    //crea un nuevo array sin el producto que queremos eliminar
    this.cosas = this.cosas.filter(p => p.id !== id);
  }

  getSortedByPrice(order: string): Product[]{
    return this.cosas.sort((a,b) => {
      if(order === "desc"){
        return b.price - a.price; // orden descendente
      }else{
        return a.price - b.price; //orden ascendente
      }
    });
  }
}

export { ListaDeProductos, Product };
