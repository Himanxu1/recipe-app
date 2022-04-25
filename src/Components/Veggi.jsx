import styled from 'styled-components';
import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
margin: 4rem 0rem `;

const Card = styled.div`
min-height: 13rem;
height: 30px;
border-radius: 2rem;
overflow: hidden;
position: relative;


img{
    border-radius: 2rem;
    position: absolute;
    left : 0;
    width: 100%:
    height: 30%;
    object-fit: cover;

}
p{
    position: absolute;
    z-index: 10;
    left : 10%:
    bottom: 0%;
    transform: translate(2%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 100%;
    width: 100px
    display: flex;
    justify-content: center;
    align-item: center;
}
`
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0).rgba(0,0,0,0.5
    ));
`

const Veggi = () => {

  const [veggi, setVeggi] = useState([]);

  const getVeggi = async () =>{

      const check = localStorage.getItem('veggi');

      if(check){
          setVeggi(JSON.parse(check))

      }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
          const data = await api.json();
          localStorage.setItem('veggi',JSON.stringify(data.recipes));
         setVeggi(data.recipes);
      }

  }
  useEffect(()=>{
      getVeggi();
  },[])
  return (
    <div>
            <Wrapper>
                <h3>Vegetarian Picks</h3>
                <Splide  options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
                }}>
                {veggi.map((recipe) =>{
                    return(
                        <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={"/recipe/"+recipe.id}>
                            <p>{recipe.title}</p>
                           <img src={recipe.image} alt={recipe.title} />
                           <Gradient/>
                           </Link>
                        </Card>
                        </SplideSlide>
                    )
                })}
                 </Splide>
            </Wrapper>
      </div>
  )
}

export default Veggi;