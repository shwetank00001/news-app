import React from 'react'
import axios from 'axios'

const Main = () => {
 
    const [ news, setNews ] = React.useState()

var value = axios.get("https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=054cf83c023b4c7a839f18b537536a90");
    
    function getNews(){
        console.log("Test")
        console.log(value);
        setNews(value);
    }

    // const ele = data.articles.map(function(item){
    //     return(
    //         <div key={item.id}>
    //             <h3>{item}</h3>
    //         </div>
    //     )
    // })

  return (
    <div>
        <button onClick={getNews}>Show news</button>

    </div>
  )
}

export default Main