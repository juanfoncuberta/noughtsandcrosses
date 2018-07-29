import  React from 'react';
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

    componentDidMount(){
        
        const {
            initialPlayerActive,
            initialBoardValue,
            initialGameFinished,
        } = this.props;
        this.props.gameSetSet({
            playerActive:initialPlayerActive,
            boardValue:initialBoardValue,
            gameFinished:initialGameFinished
        });
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
        const { initialPlayerActive, initialBoardValue, initialGameFinished} = this.props;
        gameSet({
            initialPlayerActive,
            initialBoardValue,
            initialGameFinished
        })

    }
    onClickCell = (i,e) => {
        
        var cellValueChanged = false;
        var gameFinished = false;
        var cellVal = 0;
        var playerActive = this.props.playerActive;
        this.props.boardValue.map(
            row=>row.map(function(cell){
                var originalCellValue = cell.val;
                cell.val = (cell.id === i && cell.val === 0? playerActive:cell.val);
                if(originalCellValue != cell.val){
                     cellValueChanged = true;
                }
                return cell;
            }
        ));
        if(cellValueChanged){
            var newPlayerActive = (this.props.playerActive==1 ? 2:1);
            this.props.gameSetBoardValue(this.props.boardValue);
            this.props.gameSetPlayerActive(newPlayerActive);
            var boardValue = this.props.boardValue;
            console.log(JSON.stringify(this.props.winnerCombination));
            this.props.winnerCombination.map(function(combination){
                    var firstPositionValue =    boardValue[combination[0].row][combination[0].col].val;
                    var secondPositionValue=    boardValue[combination[1].row][combination[1].col].val;
                    var thirdPositionValue =    boardValue[combination[2].row][combination[2].col].val;
             
                   if(firstPositionValue != 0 &&
                       firstPositionValue === secondPositionValue &&
                       firstPositionValue === thirdPositionValue){
                       
                       console.log('WINNER');
                   } 
            })
            // this.props.boardValue.map(
            //     row => row.map(
            //         function(cell){
            //             if(cell.val != 0 && cellVal == 0)
            //                 cellVal = cell.val;
            //             console.log(cellVal);
            //         } 
            //     ));
        }

   
    }
    render(){
            const { playerActive, boardValue, gameFinished} = this.props;
        return (
            <Game
                playerActive={playerActive} 
                boardValue={boardValue} 
                gameFinished={gameFinished}  
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
    winnerCombination: state.gameSet.winnerCombination,
});

const mapDispatchToProps = {
    gameSet,
    gameSetSet,
    gameSetPlayerActive:gameSetPlayerActiveACT,
    gameSetBoardValue:gameSetBoardValueACT,
    gameSetGameFinished:gameSetGameFinishedACT
}



export default connect(mapStateToProps,mapDispatchToProps)(GameContainer);

