import bcrypt from 'bcryptjs';
const data = {
    users: [{
            name: 'admin',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [{


            name: 'Summer Tunic Dress',
            category: 'Dress',
            image: '/images/product1.jpg',
            price: 30,
            countInStock: 0,
            brand: 'FabNetStudio',
            rating: 4.5,
            numReviews: 10,
            description: 'Black dress with print'


        },
        {

            name: 'Shorts and Shirts Set',
            category: 'Sets',
            image: '/images/product2.jpg',
            price: 44,
            brand: 'FabNetStudio',
            rating: 4.7,
            numReviews: 8,
            description: 'Black and oil green modern set short and shirts',
            countInStock: 20,
        },
        {

            name: 'Top and Pants Set',
            category: 'Sets',
            image: '/images/product3.jpg',
            price: 47,
            brand: 'FabNetStudio',
            rating: 4.0,
            numReviews: 10,
            description: 'Oversized top an pants set',
            countInStock: 20,
        },
        {

            name: 'Pants and Boat Nackline Shirt Set',
            category: 'Sets',
            image: '/images/product4.jpg',
            price: 44,
            brand: 'FabNetStudio',
            rating: 4.3,
            numReviews: 15,
            description: 'Wrap pants and boat neckline set',
            countInStock: 20,
        },
        {

            name: 'Maxi Black Skirt',
            category: 'Skirt',
            image: '/images/product5.jpg',
            price: 40,
            brand: 'FabNetStudio',
            rating: 4.1,
            numReviews: 10,
            description: 'Maxi black skirt',
            countInStock: 20,
        },
        {

            name: 'Tumic Dress',
            category: 'Dress',
            image: '/images/product6.jpg',
            price: 33,
            brand: 'FabNetStudio',
            rating: 4.0,
            numReviews: 6,
            description: 'Tunic dress, free style, asymetrical',
            countInStock: 20,
        },
        {

            name: 'Black and Oil Green Set',
            category: 'Sets',
            image: '/images/product7.jpg',
            price: 44,
            brand: 'FabNetStudio',
            rating: 4.5,
            numReviews: 10,
            description: 'Black and oil green modern set shorts and top with short sleeves',
            countInStock: 20,
        },
        {

            name: 'Tutu and Top Set',
            category: 'Sets',
            image: '/images/product8.jpg',
            price: 39,
            brand: 'FabNetStudio',
            rating: 4.8,
            numReviews: 8,
            description: 'White tutu and white top set',
            countInStock: 20,
        },
        {

            name: 'Pants and Bout Neckline Top Set',
            category: 'Sets',
            image: '/images/product9.jpg',
            price: 44,
            brand: 'FabNetStudio',
            rating: 4.2,
            numReviews: 10,
            description: 'Wrap pants and boat neckline top set',
            countInStock: 20,
        },
        {

            name: 'Mini Dress Mickey Mouse',
            category: 'Dress',
            image: '/images/product10.jpg',
            price: 27,
            brand: 'FabNetStudio',
            rating: 4.0,
            numReviews: 12,
            description: 'Top mini dress Micky Mouse',
            countInStock: 20,
        },
        {

            name: 'Shorts and Shirt Set',
            category: 'Sets',
            image: '/images/product11.jpg',
            price: 35,
            brand: 'FabNetStudio',
            rating: 4.1,
            numReviews: 17,
            description: 'White short and shirt set',
            countInStock: 20,
        },
        {

            name: 'Jacket and Pants Set',
            category: 'Sets',
            image: '/images/product12.jpg',
            price: 47,
            brand: 'FabNetStudio',
            rating: 4.2,
            numReviews: 15,
            description: 'Long jacket and black pants set',
            countInStock: 0,
        },
    ],
};
export default data;