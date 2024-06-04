import React from "react";

class Search extends React.Component { 
    state = {
        name: 'matrix',
        type: 'all',
    }

    keyEnter = (event) => {
        if(event.key === "Enter"){
            event.target.blur()
            this.props.filmSearch(this.state.name, this.state.type)
        }
    }

    selectType = (event) => {
        this.setState(() => ({type: event.target.value}), () => (this.props.filmSearch(this.state.name, this.state.type)))
        
    }

    render() {
        const {type} = this.state;
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        placeholder='Искать в библиотеке фильмов' 
                        id="email" 
                        type="email" 
                        className="validate"
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        onKeyDown={this.keyEnter}
                    />
                </div>
                <div className="radio-block">
                <label>
                    <input 
                        name="filter" 
                        type="radio"
                        value="all"
                        className="with-gap"
                        onChange={this.selectType} 
                        checked={type === "all"} 
                    />
                    <span>Все</span>
                </label>
                <label>
                    <input 
                        name="filter" 
                        type="radio"
                        value="movie"
                        className="with-gap"
                        onChange={this.selectType} 
                        checked={type === "movie"} 
                    />
                    <span>Фильмы</span>
                </label>
                <label>
                    <input 
                        name="filter" 
                        type="radio"
                        value="series"
                        className="with-gap"
                        onChange={this.selectType} 
                        checked={type === "series"} 
                    />
                    <span>Сериалы</span>
                </label>
            </div>
            </div>
        )
        
    }
}

export default Search;