class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmId, name, farmer, phone, address) => {
    this.farms.push({farmId,name,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let specificItem = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specificItem);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let Farm = this.farms.find(item => item.farmId ===farmId)
    Farm.farmId =newFarmId;
    Farm.farmName =newFarmName;
    Farm.farmer =newFarmerName;
    Farm.phone =newPhone;
    Farm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.products.push({productId,productName,price})
   
    }
    this.removeProduct = (productId) => {
    let specific = this.products.find(item => item.productId ===productId);
    let productsIndex = this.products.indexOf(specific);
    this.products.splice(productsIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.products.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.products.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.products)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProducts = this.products.find(object=>object.productId===productId);
    console.log(`${quantity} for KES ${quantity*specificProducts.price}`);
    }
    }
    }
   
    let farm1 = new Mkulima();
    farm1.addFarm("6164","Machakos","Kanini","0748383345", "A0856");
    farm1.addFarm("8642","Kathonzweni","Violet","0790564782", "KY444");
    farm1.addFarm("6854","Kalama","Shaina","0746867980", "Yn246");
    console.log(farm1.farms);

    farm1.removeFarm("6164")
    console.log(farm1.farms)
   
    farm1.updateFarm("8642","6666","Macharia","Catherine","0748377845", "A1876");
    farm1.getFarm("6854");
    farm1.addProduct("100","beans",70);
    farm1.addProduct("400","sugar",100);
    farm1.addProduct("404","Rice",150);
    farm1.addProduct("600","Wheat",120);
    console.log(farm1.products);

    farm1.removeProduct("400");
    console.log(farm1.products);

    farm1.getProduct("100");
    farm1.printProducts();
    farm1.calculateOrderCost("400",100);

     
