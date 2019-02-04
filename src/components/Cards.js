import React from 'react'
import { StyledCard } from "../layout/Cards"
import {addCard, removeCard} from "./actions"
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  cards: state
});

const mapDispatchToProps = dispatch => ({
  addCard: (type) => dispatch(addCard(type)),
  removeCard: () => dispatch(removeCard())
});

class Cards extends React.Component {
  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick = (event) => {
    if (event.shiftKey) {
      if (event.altKey) {
        this.props.addCard("wide");
        console.log("added wide card");
      }  else {
        this.props.addCard("narrow");
        console.log("added narrow card");
      }
    } else {
      if (this.props.cards.length > "1" ) {
        this.props.removeCard();
      } else {
        console.log("last card");
      }
    }
  };


  render() {
    return(
      <div>
        { //может стоить мапить прежде чем рендерить?
          this.props.cards.map( (card, id, array) => {
            if ( id + 1 < array.length ) {
              return (
                <StyledCard
                  onClick={this.handleClick}
                  key={id}
                  number={id}
                />
              )
            } else {
              return (
                <StyledCard
                  onClick={this.handleClick}
                  key={id}
                  type={card.type}
                  number={id}
                />
              )
            }
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
