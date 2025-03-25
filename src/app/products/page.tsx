// components/Products/Products.js
import React from 'react';
import styles from '@/styles//Products.module.css';
import Image from 'next/image';
import BlueTooth from '../../../public/bluetooth.jpg'
import TV from '../../../public/0cb57586-e0e1-42f7-9049-4df50dd4afdb.jpg'
import Camera from '../../../public/dslr.jpg'
import Chair from '../../../public/chair.jpeg'
import Watch from '../../../public/watcg.jpeg'
import Charger from '../../../public/wireless charging pad.jpeg'
import Speaker from '../../../public/portable speaker.jpeg'
import Laptop from '../../../public/laptop.jpeg'
import AirPurifier from '../../../public/purifier.jpeg'
import Hub from '../../../public/smart home hub.jpeg'

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      description: 'Noise-cancelling with 30-hour battery life',
      rating: 4.8,
      image: BlueTooth,
      isNew: true,
      discount: 15
    },
    {
      id: 2,
      name: 'Ultra HD Smart TV',
      price: 899.99,
      description: '65" 4K HDR with smart features',
      rating: 4.6,
      image: TV,
      isNew: false,
      discount: 10
    },
    {
      id: 3,
      name: 'Professional DSLR Camera',
      price: 1299.99,
      description: '24.2MP sensor with 4K video',
      rating: 4.9,
      image: Camera,
      isNew: true,
      discount: 0
    },
    {
      id: 4,
      name: 'Ergonomic Office Chair',
      price: 249.99,
      description: 'Lumbar support and adjustable arms',
      rating: 4.7,
      image: Chair,
      isNew: false,
      discount: 20
    },
    {
      id: 5,
      name: 'Smart Fitness Watch',
      price: 179.99,
      description: 'Heart rate monitor and GPS tracking',
      rating: 4.5,
      image: Watch,
      isNew: true,
      discount: 5
    },
    {
      id: 6,
      name: 'Wireless Charging Pad',
      price: 39.99,
      description: 'Fast charging for all Qi-enabled devices',
      rating: 4.3,
      image: Charger,
      isNew: false,
      discount: 0
    },
    {
      id: 7,
      name: 'Bluetooth Portable Speaker',
      price: 129.99,
      description: '360° sound with 20-hour playback',
      rating: 4.4,
      image: Speaker,
      isNew: false,
      discount: 25
    },
    {
      id: 8,
      name: 'Gaming Laptop',
      price: 1499.99,
      description: 'RTX 3070, 16GB RAM, 1TB SSD',
      rating: 4.8,
      image: Laptop,
      isNew: true,
      discount: 12
    },
    {
      id: 9,
      name: 'Air Purifier',
      price: 199.99,
      description: 'HEPA filter for 500 sq. ft. rooms',
      rating: 4.6,
      image: AirPurifier,
      isNew: false,
      discount: 0
    },
    {
      id: 10,
      name: 'Smart Home Hub',
      price: 149.99,
      description: 'Control all your smart devices in one place',
      rating: 4.7,
      image: Hub,
      isNew: true,
      discount: 8
    }
  ];

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.sectionTitle}>Featured Products</h2>
      <p className={styles.sectionSubtitle}>Discover our premium collection</p>
      
      <div className={styles.productGrid}>
        {productList.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImageContainer}>
              <Image 
                src={product?.image} 
                alt={product.name} 

                className={styles.productImage}
              />
              {product.isNew && <span className={styles.newBadge}>New</span>}
              {product.discount > 0 && (
                <span className={styles.discountBadge}>-{product.discount}%</span>
              )}
            </div>
            
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}
                  >
                    ★
                  </span>
                ))}
                <span className={styles.ratingCount}>({product.rating})</span>
              </div>
              
              <div className={styles.priceContainer}>
                {product.discount > 0 ? (
                  <>
                    <span className={styles.originalPrice}>
                      ${product.price.toFixed(2)}
                    </span>
                    <span className={styles.discountedPrice}>
                      ${(product.price * (1 - product.discount/100)).toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className={styles.currentPrice}>
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              
              <button className={styles.addToCartButton}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;