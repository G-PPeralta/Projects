import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  constructor() {
    super();
    this.getRankingFromLocalStore = this.getRankingFromLocalStore.bind(this);
  }

  getRankingFromLocalStore() {
    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
    if (ranking.length > 0) {
      ranking.sort((a, b) => b.score - a.score);
    }
    return ranking;
  }

  render() {
    const ranking = this.getRankingFromLocalStore();
    console.log(ranking);

    const orderedRanking = ranking.map((player, index) => (
      <ul key={ index }>
        <img
          src={ player.picture }
          alt={ player.name }
          data-testid={ `player-image-${index}` }
        />
        <li data-testid={ `player-name-${index}` }>{player.name}</li>
        <li data-testid={ `player-score-${index}` }>{player.score}</li>
      </ul>
    ));

    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        { orderedRanking }
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Home</button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
