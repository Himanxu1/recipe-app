import React , {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const Recipe = () => {

    let params = useParams();
    const [details,setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");



    const fetchDetail = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(()=>{
      fetchDetail();
    },[params.name]);

  return (
    <DetailWrapper>
      <div>
      <h2>{details.title}</h2>
      <img  src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? "active" : ''}  onClick={() => setActiveTab("instructions")}>instructions</Button>
        <Button className={activeTab === 'ingredients' ? "active" : ''} onClick={() => setActiveTab("ingredients")}>ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
          <h4 dangerouslySetInnerHTML={{__html: details.summary}}></h4>
          <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
          {console.log(details)}
        </div>
        )}
        
        {activeTab === 'ingredients' &&(
            <ul>
            {details.extendedIngredients.map((ingredient)=>{
              
              return(
              <li key={ingredient.id}>{ingredient.original}</li>
              )
            })}
          </ul>
        )}
      
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
margin-top: 5rem;
margin-bottom: 5rem;
display: flex;
.active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}

h2{
  margin-bottom: 2rem;

}

li{
  font-size: 1rem;
  line-height: 2rem;


}

img{
  height: 300px;
}
ul{
  margin-top: 2rem;
}
`

const Button = styled.button`
 padding: 0.5rem 1rem;
 color: #313131;
 background: white;
 border : 2px solid black;
margin-right: 2rem;
font-weight: 600;

`
const Info = styled.div`
margin-left: 10rem;
h4{
  margin-top: 50px;
  width: 500px;
}


`

export default Recipe;