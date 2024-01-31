import React from 'react'
import axios from 'axios'

const Main = () => {
 
    const [ news, setNews ] = React.useState()

    const data = axios.get(
        "https://newsapi.org/v2/everything?" +
            "q=Apple&" +
            "from=2024-01-31&" +
            "sortBy=popularity&" +
            "apiKey=054cf83c023b4c7a839f18b537536a90"
    );

    function getNews(){
        console.log("Test")
        setNews(data)
    }

    const ele = data.articles.map(function(item){
        return(
            <div key={item.id}>
                <h3>{item}</h3>
            </div>
        )
    })

  return (
    <div>
        <button onClick={getNews}>Show news</button>
        {ele}
    </div>
  )
}

export default Main