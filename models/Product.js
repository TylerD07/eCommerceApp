const Sequelize = require("Sequelize");

module.exports = function(connection, Sequelize) {
    const Product = connection.define('Product', {
        productName: Sequelize.STRING,
        deptName: Sequelize.STRING,
        price: Sequelize.INTEGER,
        availibleStock: Sequelize.INTEGER
    });
  
    return Product;
  }





// class Product {
//     consructor(productName, deptName, price, quantity){
//         this.name: productName,
//         this.department = deptName,
//         this.price = price,
//         this.numberStock = quantity
//     }
// }

// const BomberJacket = new Product();
//   
//

// const Blazer = new Product();

// const Cardigan = new Product();

// const PresidentialRolex = new Product();

// const CartierShades = new Product

// const VersaceCubanLink = new Product()

// class  extends Product{
//     constructor(){
//         super(productName, deptName, price, quantity)
//     }
// }