import product1 from "../ecommerce-product-page-main/images/image-product-1.jpg";
import product2 from "../ecommerce-product-page-main/images/image-product-2.jpg";
import product3 from "../ecommerce-product-page-main/images/image-product-3.jpg";
import product4 from "../ecommerce-product-page-main/images/image-product-4.jpg";


import productSecond1 from '../ecommerce-product-page-main/images/image-product-1-thumbnail.jpg'
import productSecond2 from '../ecommerce-product-page-main/images/image-product-2-thumbnail.jpg'
import productSecond3 from '../ecommerce-product-page-main/images/image-product-3-thumbnail.jpg'
import productSecond4 from '../ecommerce-product-page-main/images/image-product-4-thumbnail.jpg'

 export const products = [
  { product: product1 , id: 1 },
  { product: product2, id: 2 },
  { product: product3, id: 3 },
  { product: product4 , id: 4 },
];


export const productsSecond =[
  {productSecond:productSecond1, id:1},
  {productSecond:productSecond2, id:2},
  {productSecond:productSecond3, id:3},
  {productSecond:productSecond4, id:4},
]

export const InfoProduct = {
  brange:'SNEAKERS COMPANY',
  title: 'Fall Limited Edition Sneakers',
  content:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubble outer sole, they'll withstand everything the weather can offer",
  midPrice:125.00,
  price:250.00,
  descont: '50%'
}