import React from "react";
import Movies from "../components/Movies"

class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?s=sex&apikey=36391301&page=1-3')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;
        return (
            <main className="container content">
                {movies.length ? (<Movies movies={movies}/>) : (<div class="progress"><div class="indeterminate"></div>
  </div>)}
            </main>
        )
    }
}

export default Main;