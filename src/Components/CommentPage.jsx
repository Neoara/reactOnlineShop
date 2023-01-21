import React from 'react'
import "../globalStyle.css"
import { useState } from 'react';
import { useEffect } from 'react';

const CommentPage = () => {
  const [products, setProducts] = useState([])
  let newArr = [];
  useEffect(() => {
      setProducts(JSON.parse(localStorage.getItem('itemsCart')))
  }, [])
  
  const deleteCart = (num) => {
    console.log(num)
    for(let item of products){
      if(item.num !== num){
        newArr.push({id: item.id, price: item.price, rate: item.rate, title: item.title, description: item.description, num: item.num, image: item.image})
        setProducts(newArr)
      }
    }
    localStorage.clear()
    localStorage.setItem("itemsCart", JSON.stringify(newArr));
  }
  // const [user] = useAuthState(auth);

  console.log(products)
  
  if(products != null){
    return (
      <div className='mainBlock'>
          <div className="cardBlock">
              {products.map(item => (
              <div className="cardBlocks" key={item.num}>
                  <div className="card">
                      <div className="cardImg">
                          <img width={350} height={400} src={item.image} alt="" />
                      </div>
                      <div className="cardTitle">
                          <p>{item.title}</p>
                      </div>
                      <div className="cardPriceBlock">
                          <div className="cardPrice">
                              <p>Price: <b className='cardPriceNum'>{item.price}$</b></p>
                          </div>
                          <div className="cardRaiting">  
                              <p>Rating: <b className='cardRaitingNum'>{item.rate}</b></p>
                          </div>
                      </div>
                      <div className="cardText">
                          <p>Description:</p>
                          <p>{item.description}</p>
                      </div>
                      <div className='cardBtn'>
                          <button onClick={() => deleteCart(item.num)}>Delete</button>
                      </div>
                  </div>
              </div>))}
          </div>
      </div>
      );
  } else if (products === null || products.lenght === 0){
    return  (<div className='mainBlock'>
              <div className="cardBlock">
                  <p>
                    в корзине пусто 
                  </p>
              </div>
            </div>)
  }
  
}

export default CommentPage