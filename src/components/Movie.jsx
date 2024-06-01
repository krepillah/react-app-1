import React from "react";

function Movie(props) {
    const{Title, Year, Poster} = props;
    return  (
        <div className="col s3">
            <div className="">
                <div className="card">
                    <div className="card-image">
                        <img src={Poster} alt={Title}></img>
                        <span className="card-title black">{Title}</span>
                    </div>
                    <div className="card-content">
                        <p>Дата выхода: {Year} год</p>
                    </div>
                    <div className="card-action indigo-text text-lighten-1">
                        <a href="#" className="deep-orange-text" >Купить</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Movie