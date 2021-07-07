import React from 'react';
// import { Link } from 'react-router-dom';
import './pokemon.css';

class PokemonDetails extends React.Component {
  render() {
    const { match: { params: { id } }, pokemons } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === +id);
    const {
      name,
      type,
      averageWeight: { value, measurementUnit},
      image,
      foundAt,
      summary,
    } = pokemon;

    return (
      <main>
        <div className="pokemon">
          <div>
            <p>{ name }</p>
            <p>{ type }</p>
            <p>
              Average weight: {`${value} ${measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <div>
          <h4>Summary</h4>
          { summary }
        </div>
        <div>
          <h4>Game Locations of { name }</h4>
          {foundAt.map(({ location, map }) => {
            return (
              <div>
                <img src={ map } alt={ location } />
                <p>{ location }</p>
              </div>
            );
          })}
        </div>
        <label>
          Favorite pokemon?
          <input type="checkbox" name="poke-fav-checkbox"/>
        </label>
      </main>
    );
  }
}

export default PokemonDetails;
