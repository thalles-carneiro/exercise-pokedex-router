import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {
      id,
      name,
      type,
      averageWeight: { value, measurementUnit},
      image
    } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            Average weight: {`${value} ${measurementUnit}`}
          </p>
          <Link to={ `/pokemons/${id}` }>More details</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
