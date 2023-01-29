import React, { useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
    const [articles,setarticles]=useState([]);
    const [loading,setloading]=useState(true);
    const [page,setpage]=useState(1);
    const [totalResults,settotalResults]=useState(0);

    
    
    // constructor(props){
    //     super(props);
    //     //console.log("Hello i am a constructor from news component")
    //     this.state={
    //         articles:[],
    //         loading:true,
    //         page:1,
    //         totalResults:0
            
    //     }
    //     
    // }
    
    const updatenews=async()=>{
        props.setProgress(0)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=c6cbf15934ad4c269f4dead1aa7056da&page=${page}&pageSize=${props.pagesize}`;
        console.log(loading); 
        setloading(true)
        let data=await fetch(url);
        props.setProgress(50)
        let parsedData=await data.json();
        props.setProgress(70)
        
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);

        props.setProgress(100)
    }
    useEffect(()=>{
        updatenews();
        document.title=`NewsMonkey-${props.category}`;
        // eslint-disable-next-line
    },[])
    // const handlePrevClick =async() => {

        
    //         setpage(page - 1)
        
    //    updatenews();
    //         }
    // const handleNextClick = async () => {
        
        
    //         setpage(page +1)
        
    //     updatenews();
    // }
    
        const fetchMoreData = async () => {   
            
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c6cbf15934ad4c269f4dead1aa7056da&page=${page+1}&pageSize=${props.pageSize}`;
            setpage(page+1) 
            let data = await fetch(url);
            let parsedData = await data.json()
            setarticles(articles.concat(parsedData.articles))
            settotalResults(parsedData.totalResults)
          };
        
    
   

  
    
    
    return (
     <>
      <div className="container my-3">
        <h2 className="text-center " style={{marginTop:'90px'}}><u>NewsMonkey-Top Headlines </u> </h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {/* !this.state.loading  */}
        {articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
                <Newsitem  title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        
        
        </div>
        </>
       
       
      
    
    )
   
  }

News.defaultProps = {
    country: 'in',
    pagesize:20,
    category:'general'
  }
News.propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
}

export default News
