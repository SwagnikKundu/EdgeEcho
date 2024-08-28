import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  articles = []
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      pageSize: 9
    }
  }

  handlePrevClick= async()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2182da79254f4c61a74edf3b59809976&pageSize=${this.state.pageSize}&page=${this.state.page -1}`;
    let data= await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page -1,
      articles: parseData.articles
    })
  }

  handleNextClick= async()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2182da79254f4c61a74edf3b59809976&pageSize=${this.state.pageSize}&page=${this.state.page +1}`;
    let data= await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page +1,
      articles: parseData.articles
    })
  }

  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2182da79254f4c61a74edf3b59809976&pageSize=${this.state.pageSize}&page=${this.state.page}`;
    let data= await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles, totalArticles: parseData.totalResults})
  }
  render() {
      return (
        <>
          <div className="container my-3">
            <h2>Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
                  <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div> 
            })}
            </div>
          </div>
          <div className='container d-flex justify-content-between'>
            <button type="button" className={`btn btn-dark mx-3 my-3 ${this.state.page<=1?'disabled':''}`} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className={`btn btn-dark mx-3 my-3 ${(Math.ceil(this.state.totalArticles/this.state.pageSize))<(this.state.page+1)?'disabled':''}`} onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </>
      )
  }
}

export default News