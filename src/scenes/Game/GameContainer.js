import  React,{ Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { gameSet } from '../../Store/';

class GameContainer extends Component{
    state = {
        playerActive: this.props.playerActive,
        boardValue: this.props.boardValue,
        gameFinished: this.props.gameFinished
    }
    static getDerivedStateFromProps({playerActive,boardValue,gameFinished}){
        return {
            playerActive,
            boardValue,
            gameFinished
        };
    }
    onChangePlayerActive = e => {
        this.setState({
            playerActive: e.target.value
        });
    }
    onChangeBoardValue = e => {
        this.setState({
            boardValue: e.target.value
        });
    }
    onChangeGamedFinished = e => {
        this.setState({
            gameFinished: e.target.value
        });
    }
    onRestartGame = e => {
        //this.props.gameSet(this.state);
        console.log('Restarting game...');
        this.props.gameSet(this.state);
    }
    onClickCell = e => {
        console.log('cell clicked');
        console.log(e.target);
        console.log(e);
        this.setState({
            ...this.state,
            playerActive:2
        })
        console.log(this.state);

    }
    render(){
        return (
            <Game 
                playerActive={this.state.playerActive} 
                boardValue={this.state.boardValue} 
                gameFinished={this.state.gameFinished} 
                onChangeGamedFinished={this.onChangeGamedFinished} 
                onChangeBoardValue={this.onChangeBoardValue}
                onChangePlayerActive={this.onChangePlayerActive}
                onRestartGame={this.onRestartGame}
                onClickCell={this.onClickCell}
            />
        );
    }

}


const mapStateToProps = state => ({
    playerActive: state.game.playerActive,
    boardValue: state.game.boardValue,
    gameFinished: state.game.gameFinished,
    state: state
});

const mapDispatchToProps = {
    gameSet
}



export default connect(mapStateToProps,mapDispatchToProps)(GameContainer);

