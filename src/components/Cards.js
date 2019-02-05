import React from 'react'
import StyledCard from "../layout/Cards"
import {addCard, removeCard} from "./actions"
import { connect } from 'react-redux'
import { history } from '../configureStore'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  addCard: (type) => dispatch(addCard(type)),
  removeCard: () => dispatch(removeCard()),
  onUndo: () => dispatch(UndoActionCreators.undo()),
  onRedo: () => dispatch(UndoActionCreators.redo()),
});

class Cards extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      futureKeys: [],
    };

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
      if (this.props.cards.present.length > "1" ) {
        this.props.removeCard();
      } else {
        console.log("last card");
      }
    }

  };

  componentDidMount() {

    history.listen((location, action) => {

      let key = location.key;

      if ( action === "PUSH" ) {

        this.setState({ futureKeys: [key], })

      } else if ( action === "POP" ) {

        if ( this.state.futureKeys.includes(location.key) ) {

          this.setState({ futureKeys: this.state.futureKeys.slice( 0, -1 ), });
          this.props.onRedo();

        } else {

          this.setState({ futureKeys: this.state.futureKeys.concat(key), });
          this.props.onUndo();
        }
      }
    });
  }

  render() {
    return(
      <div>
        {
          this.props.cards.present.map( (card, id, array) => {
            if ( id + 1 < array.length ) {
              return (
                <StyledCard
                  onClick={(e) => {this.handleClick(e);
                    history.push("/?");}}
                  key={id}
                  number={id}
                />
              )
            } else {
              return (
                <StyledCard
                  onClick={(e) => {this.handleClick(e);
                    history.push("/?");}}
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
