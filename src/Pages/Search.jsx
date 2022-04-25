import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import  { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Search = () => {


    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        navigate("/searched/"+input);
        e.preventDefault();
    }


  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
        <input  type="text"  value={input}  onChange={(e) =>{
            setInput(e.target.value);
        }}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
margin: 2rem 2rem;

div{
    position: relative;
    width: 100%;
}

input{
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border:none;
    border-radius: 1rem;
    outline: none;
    width: 60%;


}

svg{
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(100%, -50%);
    color: white;
}


`

export default Search;