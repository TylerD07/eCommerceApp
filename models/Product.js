module.exports = function(connection, Sequelize) {
    const Product = connection.define('Product', {
        productName: Sequelize.STRING,
        deptName: Sequelize.STRING,
        price: Sequelize.INTEGER,
        availibleStock: Sequelize.INTEGER
    });
    return Product;
}





