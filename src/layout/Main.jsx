import React from "react";
import Movies from "../components/Movies"
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?s=sex&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {console.error(err); this.setState({loading: false})})
    }

    filmSearch = (data, type = "all") => {
        let str = ''
        if(data ===''){
            data = "sex"
        }
        if(type === "all"){
            str = `https://www.omdbapi.com/?s=${data}&apikey=${API_KEY}`
        } else{
            str = `https://www.omdbapi.com/?s=${data}&apikey=${API_KEY}&type=${type}`
        }
        fetch(str)
        .then((response) => response.json())
        .then((data) => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {console.error(err); this.setState({loading: false})})
    }

    render() {
        const {movies, loading} = this.state;
        return (
            <main className="container content">
                <Search filmSearch={this.filmSearch}/>
                {!loading ? (<Movies movies={movies}/>) : (<div className="progress"><div className="indeterminate"></div>
  </div>)}
            </main>
        )
    }
}

export default Main;