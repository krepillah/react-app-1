import React from "react";
import Movies from "../components/Movies"
import Search from "../components/Search"

class Main extends React.Component {
    state = {
        movies: [],
        name: '',
        filter: '',
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?s=matrix&apikey=36391301")
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    filmSearch = (data, type = "all") => {
        let str = ''
        if(data ===''){
            data = "matrix"
        }
        if(type === "all"){
            str = `http://www.omdbapi.com/?s=${data}&apikey=36391301`
        } else{
            str = `http://www.omdbapi.com/?s=${data}&apikey=36391301&type=${type}`
        }
        fetch(str)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;
        return (
            <main className="container content">
                <Search filmSearch={this.filmSearch}/>
                {movies.length ? (<Movies movies={movies}/>) : (<div className="progress"><div className="indeterminate"></div>
  </div>)}
            </main>
        )
    }
}

export default Main;