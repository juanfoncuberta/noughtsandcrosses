import React ,{ Component } from 'React';
import { connect } from 'react-redux';
import Game from './Game';
import { gameSet } from '../../Store/';

class GameContainer extends Component{
    state = {
        playerActive: this.props.playerActive,
        boardValue: this.props.boardValue,
        gameFinished: this.props.gameFinished
    }
    static getDerivedStateFromProps({playerActive,boardValue,gameFinished},state={}){
        return {
            ...state,
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
        console('Restarting game...');
        return console('Restarting game...');
    }
    onClickCell = e => {
        console.log('cell clicked');
        console(e);
    }
    render(){
        return (
            <Game 
                playerActive={this.state.playerActive} 
                boardValue={this.state.boardValue} 
                gameFinished={this.state.gameFinished} 
                onChangeGamedFinished={this.state.onChangeGamedFinished} 
                onChangeBoardValue={this.state.onChangeBoardValue}
                onChangePlayerActive={this.state.onChangePlayerActive}
                onRestartGame={this.state.onRestartGame}
                onClickCell={this.state.onClickCell}
            />
        );
    }

}


const mapStateToProps = state => ({
    playerActive: state.game.playerActive,
    boardValue: state.game.boardValue,
    gameFinished: state.game.gameFinished
});

/*const mapDispatchToProps = {
    gameSet
}*/


export default connect(mapStateToProps)(GameContainer);
//export default connect(mapStateToProps,mapDispatchToProps)(GameContainer);

