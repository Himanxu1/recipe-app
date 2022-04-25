import { useEffect, useState } from "react";
import styled from 'styled-components';
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';



const Wrapper = styled.div`
margin: 6rem 0rem `;

const Card = styled.div`
min-height: 15rem;
height: 30px;
border-radius: 2rem;
overflow: hidden;
position: relative;


img{
    border-radius: 2rem;
    position: absolute;
    left : 0;
    width: 100%:
    height: 60%;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-item: center;

}
p{
    position: absolute;
    z-index: 10;
    left : 10%:
    bottom: 10px;
    transform: translate(0%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    height: 100%;
    width: 200px
 
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

const Popular = () => {
    const [popular, setPopular] = useState([]);

    const getPopular = async () =>{

        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check))

        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes));
           setPopular(data.recipes);
        }

        

    }
    useEffect(()=>{
        getPopular();
    },[])


  return (
      <div>
      
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide  options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '4rem',
                }}>
                {popular.map((recipe) =>{
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


export default Popular;