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
      }  else {
        this.props.addCard("narrow");
      }
    } else {
      if (this.props.cards.length > "1" ) {
        this.props.removeCard();
      } else {
        return true;
      }
    }
  };


  render() {
    return(
      <div>
        {
          this.props.cards.map( (card, id, array) => {
            return (
              <StyledCard
                onClick={this.handleClick}
                key={id}
                type={( id + 1 < array.length ) ? null : card.type}
                number={id}
              />
            )
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
