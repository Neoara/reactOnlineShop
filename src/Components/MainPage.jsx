import React from 'react'
import "../globalStyle.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const MainPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    let num = 0;

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setProducts(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }

            
        )
    }, [])
    

    const [user] = useAuthState(auth);
    
    let newItem = JSON.parse(localStorage.getItem('itemsCart')) || [];

    const addCart = (id) => {
        for(let item of products){
            if(item.id === id){
                newItem.push({id: item.id, price: item.price, rate: item.rating.rate, title: item.title, description: item.description, num: num++, image: item.image})
                console.log(num)
            }
        }
        
        localStorage.setItem("itemsCart", JSON.stringify(newItem));
    }

    if (error) {
        return <p className='loading'>Ошибка: {error.message}</p>;
      } else if (!isLoaded) {
            <p className='loading'>Загрузка...</p>
      } else {
        return (
        <div className='mainBlock'>
            <div className="cardBlock">
                {products.map(item => (
                <div className="cardBlocks" key={item.id}>
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
                                <p>Rating: <b className='cardRaitingNum'>{item.rating.rate}</b></p>
                            </div>
                        </div>
                        <div className="cardText">
                            <p>Description:</p>
                            <p>{item.description}</p>
                        </div>
                        { user ? <div onClick={() => addCart(item.id)} className='cardBtn'>
                            <button>Add to card</button>
                        </div> : null }
                    </div>
                </div>))}
            </div>
        </div>
        );
      }
}

export default MainPage