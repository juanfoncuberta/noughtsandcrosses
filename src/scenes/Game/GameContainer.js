import  React,{ Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { 
    gameSet,
    gameSetSet,
    gameSetPlayerActive as gameSetPlayerActiveACT,
    gameSetBoardValue as gameSetBoardValueACT,
    gameSetGameFinished as gameSetGameFinishedACT 
} from '../../Store/';

class GameContainer extends React.Component{
    // state = {
    //     // hola:"adios",
    //     // props:this.props,
    //     initialPlayerActive: this.props.state.game.playerActive,
    //     boardValue: this.props.state.game.boardValue,
    //     gameFinished: this.props.state.game.gameFinished
    // }
    // static getDerivedStateFromProps({playerActive,boardValue,gameFinished}){
    //     return {
    //         playerActive,
    //         boardValue,
    //         gameFinished
    //     };
    // }
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
        console.log('Restarting game...');
        const { initialPlayerActive, initialBoardValue, initialGameFinished} = this.props;
        gameSet({
            initialPlayerActive,
            initialBoardValue,
            initialGameFinished
        })

    }
    onClickCell = (i,e) => {
        var cellValueChanged = false;
        var playerActive = this.props.playerActive;
        this.props.boardValue.map(
            (row)=>row.map(function(cell){
                var originalCellValue = cell.value;
                cell.value = (cell.id === i && cell.value === 0? playerActive:cell.value);
                if(originalCellValue != cell.value){
                     cellValueChanged = true;
                }
                return cell;
            }
        ));
        if(cellValueChanged){
            var newPlayerActive = (this.props.playerActive==1 ? 2:1);
            this.props.gameSetBoardValue(this.props.boardValue);
            this.props.gameSetPlayerActive(newPlayerActive);
        }
        console.log(JSON.stringify(this.props.boardValue));
    }
    render(){
            const { initialPlayerActive, initialBoardValue, initialGameFinished} = this.props;
        return (
            <Game
                playerActive={initialPlayerActive} 
                boardValue={initialBoardValue} 
                gameFinished={initialGameFinished}  
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
    initialPlayerActive: state.game.playerActive,
    initialBoardValue: state.game.boardValue,
    initialGameFinished: state.game.gameFinished,
    playerActive: state.gameSet.playerActive,
    boardValue: state.gameSet.boardValue,
    gameFinished: state.gameSet.gameFinished,
    state:state
});

const mapDispatchToProps = {
    gameSet,
    gameSetSet,
    gameSetPlayerActive:gameSetPlayerActiveACT,
    gameSetBoardValue:gameSetBoardValueACT,
    gameSetGameFinished:gameSetGameFinishedACT
}



export default connect(mapStateToProps,mapDispatchToProps)(GameContainer);

