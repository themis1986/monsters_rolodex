import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    
    return (
      <div className="">
        {monsters.map((monster) => {
          return <h1 key={monster.name}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
