import React, { useEffect, useState } from 'react';
import FetchData from '../API/FetchData';
import classes from './NewProducts.module.css';

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    FetchData('https://api.manoapp.com/api/v1/users/products/whats_new').then((data) => {
      setProducts(data.items);
    });
  }, []);

  return (
    <div className={classes.container}>
      {products.map((product) => (
        <div className={classes.card} key={product.id}>
          <img
          className={classes.image}
            variant="top"
            src={product.images[0].small}
            alt={product.title}
            onClick={() => setOpen(true)}
          />
          <div className={classes.body}>
            <h3 className={classes.title}>{product.title}</h3>
            <p className={classes.price}>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
