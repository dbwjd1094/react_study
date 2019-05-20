import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//컴포넌트는 항상 render를 해야함
//항상 return을 해야한다


// class Movie extends Component{
//     //이렇게하면 title과 poster 값은 string 값만 올수 있다.
//     //부모 컴포넌트가 string을 보내면, PropTypes로 string이라는 것을 체크할 수 있다.
//   static propTypes = {
//     title: PropTypes.string.isRequired, //isRequired은 이 값은 무조건 있어야 한다. 없으면 에러가뜸
//     poster: PropTypes.string.isRequired
//   }
//
//   render(){
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component{
//
//   static propTypes={
//     poster : PropTypes.string.isRequired
//   }
//
//   render(){
//     return(
//       <img src={this.props.poster} alt="Movie Poster"/>
//     );
//   }
// }

function Movie({title, poster}){
  return(
    <div>
      <MoviePoster poster={poster}/>
      <h1>{title}</h1>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

function MoviePoster({poster}){
  return(
    <img src={poster} alt="Movie Poster"/>
  );
}

MoviePoster.propTypes = {
  poster : PropTypes.string.isRequired
}

export default Movie;
