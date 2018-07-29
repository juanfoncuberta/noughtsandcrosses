import  React from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { 
    gameSet,
    gameSetSet as gameSetSetACT,
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

    onRestartGame = e => {
        const {
            initialPlayerActive,
            initialBoardValue,
            initialGameFinished,
    
        } = this.props;

        initialBoardValue.map(
            row=>row.map(
                cell=> cell.val=0 

                
        ));
         /*
            Se que reinciar asi el tablero es una "cochinada" pero después
            de horas intentando reinicializarlo la manera mas elegante, no lo he conseguido.
            He visto donde esta el problema, cuando  modifico uno los de los boardValues,
            se modifica el otro también, asi que no puedo devolver el tablero a su estado
            inicial, si no es con esto.

        */
        console.log({
            playerActive:initialPlayerActive,
            boardValue:initialBoardValue,
            gameFinished:initialGameFinished
        });
        this.props.gameSetSet({
            playerActive:initialPlayerActive,
            boardValue:initialBoardValue,
            gameFinished:initialGameFinished
        });

    }
    onClickCell = (i,e) => {
        
        
        var cellValueChanged = false;
        var gameFinished = false;
        var playerActive = this.props.playerActive;
  
        /*
            AQUI es donde no entiendo porque me modifica el valor tambien de initialBoardValue.
            Antes del map ambos tienen el estado anterior, y después del map, ambos han modificado su estado.
        */
        this.props.boardValue.map(
            row=>row.map(function(cell){
                var originalCellValue = cell.val;
                cell.val = (cell.id === i && cell.val === 0? playerActive:cell.val);
                if(originalCellValue != cell.val){
                     cellValueChanged = true;
                }
            }
        ));

        var boardValue = this.props.boardValue;
       
        if(cellValueChanged){
            var newPlayerActive = (this.props.playerActive==1 ? 2:1);
            
            var gameFinished = false;
            this.props.winnerCombination.map(function(combination){
                    var firstPositionValue =    boardValue[combination[0].row][combination[0].col].val;
                    var secondPositionValue=    boardValue[combination[1].row][combination[1].col].val;
                    var thirdPositionValue =    boardValue[combination[2].row][combination[2].col].val;
             
                   if(firstPositionValue != 0 &&
                       firstPositionValue === secondPositionValue &&
                       firstPositionValue === thirdPositionValue)
                            gameFinished = true;
            })
       
            
            this.props.gameSetSet({
                boardValue:     boardValue,
                playerActive:   newPlayerActive,
                gameFinished:   gameFinished
            });
        
         
            // this.props.gameSetGameFinished(gameFinished);
         
        }

   
    }
    render(){
            const { playerActive, boardValue, gameFinished} = this.props;
        return (
            <Game
                playerActive={playerActive} 
                boardValue={boardValue} 
                gameFinished={gameFinished}
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
    gameSetSet:gameSetSetACT,
    gameSetPlayerActive:gameSetPlayerActiveACT,
    gameSetBoardValue:gameSetBoardValueACT,
    gameSetGameFinished:gameSetGameFinishedACT
}



export default connect(mapStateToProps,mapDispatchToProps)(GameContainer);

