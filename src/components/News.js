import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
    apiKey: '2182da79254f4c61a74edf3b59809976',
  }

  static propTypes = {
    country: PropTypes.string ,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  }
  
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    }
  }

  handlePrevClick= async()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page -1}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page -1,
      articles: parseData.articles,
      loading: false
    })
  }

  handleNextClick= async()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page +1}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page +1,
      articles: parseData.articles,
      loading: false
    })
  }

  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles, 
      totalArticles: parseData.totalResults,
      loading: false
    })
  }
  render() {
      return (
        <>
          <div className="container my-3">
            <h1 className='text-center'>EdgeEcho Insights</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
                  <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:'Unknown'} date={new Date(element.publishedAt).toUTCString()} source={element.source.name}/>
                </div> 
            })}
            </div>
          </div>
          <div className='container d-flex justify-content-between'>
            <button type="button" className={`btn btn-dark mx-3 my-3 ${this.state.page<=1?'disabled':''}`} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className={`btn btn-dark mx-3 my-3 ${(Math.ceil(this.state.totalArticles/this.props.pageSize))<(this.state.page+1)?'disabled':''}`} onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </>
      )
  }
}

export default News