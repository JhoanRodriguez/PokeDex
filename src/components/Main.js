import React from 'react'

var page = 0
var init = 39
var source = "https://6mja956dac.execute-api.us-east-1.amazonaws.com/dev/pokemon/details/list/"
var info = source + init + "/" + page



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        fetch(info, { method: "GET" }).then((response) => response.json()).then((response) => {
            this.setState({ data: response })
        })
    }
    render() {
        const { data } = this.state
        if (data) {
            return (
                < div className="" >
                    <div className="container">
                        <div className="row">
                            {
                                data.map((pokemon) => {
                                    return (
                                        <div key={data.id} className="col-xs-6 col-sm-4 col-md-3">
                                            <h5 className="text-capitalize">{pokemon.name}</h5>
                                            <p># {pokemon.id}</p>
                                            <img src={pokemon.image} alt={pokemon.name} width="150" height="150" className="img-responsive mx-auto d-block" />
                                            <p className="text-capitalize">weight : {pokemon.weight}</p>
                                            <p>
                                                <a className="btn btn-info" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Evolution :</a>
                                            </p>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                                        <div className="card card-body">
                                                            {
                                                                pokemon.evolution_chain.map((evolution) => {
                                                                    if (evolution !== pokemon.name) {
                                                                        return (
                                                                            <p className="text-capitalize">- {evolution}</p>
                                                                        )
                                                                    }
                                                                    return (null)
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Abilities : </button>
                                            </p>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                                                        <div className="card card-body">
                                                            {
                                                                pokemon.abilities.map((abilities) => {
                                                                    return (
                                                                        <p className="text-capitalize">- {abilities}</p>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                <button className="btn btn-info" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Types : </button>
                                            </p>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="collapse multi-collapse" id="multiCollapseExample3">
                                                        <div className="card card-body">
                                                            {
                                                                pokemon.types.map((types) => {
                                                                    return (
                                                                        <p className="text-capitalize">- {types}</p>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                {pokemon.descriptions[Math.floor(Math.random() * pokemon.descriptions.length)]}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div >
            )
        }
        else {
            return <p>Loading ...</p>
        }

    }
}

export default Main