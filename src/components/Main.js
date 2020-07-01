import React from 'react'
import data from "../mockdata.json"


class Main extends React.Component {
    render() {
        return (
            <div className="" >
                <div className="container">
                    <div className="row">
                        {
                            data.map((pokemon, index) => {
                                return (
                                    <div key={index} className="col-xs-6 col-sm-4 col-md-3">
                                        <h5 className="text-capitalize">{pokemon.name}</h5>
                                        <p># {pokemon.id}</p>
                                        <img src={pokemon.image} alt={pokemon.name} width="150" height="150" className="img-responsive mx-auto d-block" />
                                        <p className="text-capitalize">weight : {pokemon.weight}</p>
                                        <p>Evolution :</p>
                                        <div>
                                            {
                                                pokemon.evolution_chain.map((evolution) => {
                                                    return (
                                                        <p className="text-capitalize">- {evolution}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <p>Abilities :</p>
                                        <div>
                                            {
                                                pokemon.abilities.map((abilities) => {
                                                    return (
                                                        <p className="text-capitalize">- {abilities}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <p>Types :</p>
                                        <div>
                                            {
                                                pokemon.types.map((types) => {
                                                    return (
                                                        <p className="text-capitalize">- {types}</p>
                                                    )
                                                })
                                            }
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
}

export default Main