import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import axios from 'axios';

//map을 통해서 만든 movie 현 사이클의 현재 엘리먼트를 의미한다.
//index는 우리가 현재 제공하는 리스트의 숫자를 의미, 그래서 key prop으롤 index를 작성하도록 한다. index는 0부터 3
class App extends Component {

  // componentWillMount(){
  //   console.log('will mount');
  // }
  // componentDidMount(){
  //   console.log('did mount');
  // }

  state = {
  }

  componentDidMount(){
    //이는 컴포넌트가 mount 할때마다 greeting을 헬로->헬로,어겐으로 변경한다는 뜻이다.
    //시간 설정을 하여 그 시간 후에 작업을 수행시킨다는 것
    //fn(function),0000초라고 작성하면 0000초 후엥 페이지가 로드하고 작업이 시작하는 것
    //function() :: ()=>
    //컴포넌트가 mount하면 페이지 로드 후 1 초 후에, 작업이 보여진다.
    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       {
    //         title:"spiderman1",
    //         poster:"http://esquirekorea.co.kr/wp-content/uploads/2018/11/esq-201811-132-002.jpg"
    //       },
    //       {
    //         title:"avengers2",
    //         poster:"http://ticketimage.interpark.com/Movie/still_image/V14/V1400753p_01.gif"
    //       },
    //       {
    //         title:"avengers3",
    //         poster:"http://img.movist.com/?img=/x00/05/01/14_p1.jpg"
    //       },
    //       {
    //         title:"avengers4",
    //         poster:"http://img.movist.com/?img=/x00/05/12/35_p1.jpg"
    //       }
    //     ]
    //  })
    // },5000)
    //페이스북이나 인스타그램처럼 로딩 후에 뜨는 추가 컨텐츠를 밑으로 땡기고 로딩후에 뜨게 만드는 작업 같은 것들
    //const req = new Request('https://yts.ag/api/v2/list_movies.json');
    //,{
    //   method : 'GET',
    //   headers: {'Content-Type' : 'application/json',
    // 'Access-Control-Allow-Origin':'*'},
    //}
    this._getMovies();
  }


  // movies: [
  //   //...this.state.movies, //이전 영화 리스트를 그대로 두고 그 후에 영화를 추가하라는 것
  //
  //   {
  //     title: "spiderman2",
  //     poster:"https://dvdprime.com/g2/data/cheditor5/1801/mania-done-20180121001956_xcplpifp.jpg"
  //   }
  // ]

  //리액트는 자체 기능이 많기 때문에 그 기능과 나의 기능에 차이를 두기 위해서
  //함수이름 지을때 보통 _를 시작으로 지음
    //movies 라는 variable에 데이터를 저장했다.
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })
    return movies;
  }

//이전 작업이 끝나는 것을 기다리지 않고 사용할 때
   _getMovies = async () => {
    //await 하는 것은 call api 기능이 끝나는 것을 기다리고
    const movies = await this._callApi()
    //이 컴포넌트의 set state를 movies로 하는 것은 call api의 return value 값이 된다.
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return axios.get('https://yts.ag/api/v2/list_movies.json?sort_by=rating',{
      params:{
        id:1
      }
    })
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
    //return fetch('https://yts.ag/api/v2/list_movies.json')
  }

  //데이터가 없을때 로딩을 띄우고, 있을때 영화정보가 보이도록
  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
//
// var express = require('express');
// var cors = require('cors');
// var app = express();
// app.use(cors());

export default App;
