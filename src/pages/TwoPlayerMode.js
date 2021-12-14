import React, {useEffect} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import {CircleOutlined, CloseOutlined} from "@mui/icons-material";

const gameBoardInit = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function TwoPlayerMode(props) {
    const [gameBoard, setGameBoard] = React.useState(gameBoardInit);
    const [player, setPlayer] = React.useState("X");
    const [winner, setWinner] = React.useState("");
    const [endGame, setEndGame] = React.useState(false);
    const [Draw, setDraw] = React.useState(false);
    const handleClick = (row, col) => {
        const newGameBoard = [...gameBoard];
        newGameBoard[row][col] = player;
        setGameBoard(newGameBoard);
        if (player === "X") {
            setPlayer("O");
        } else {
            setPlayer("X");
        }
    };



    useEffect(() => {
        const checkWinner = () => {
            let winner = "";
            for (let i = 0; i < 3; i++) {
                if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
                    winner = gameBoard[i][0];
                }
            }
            for (let i = 0; i < 3; i++) {
                if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
                    winner = gameBoard[0][i];
                }
            }
            if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
                winner = gameBoard[0][0];
            }
            if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
                winner = gameBoard[0][2];
            }
            console.log(winner);
            if (winner !== null || winner !== '') {
                return winner;
            }
            return null;
        };
        let winner = checkWinner();
        if (winner) {
            setWinner(winner)
            setEndGame(true);
        }
        if (gameBoard.flat().every(x => x !== "")) {
            setDraw(true);
            setEndGame(true);
        }
    }, [gameBoard]);

    const resetGame = () => {
        console.log("reset");
        setGameBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
        setPlayer("X");
        setWinner("");
        setEndGame(false);
        setDraw(false);
    };

    const renderGameBoard = () => {
        let items = [];
        let k = 0
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard[i].length; j++) {
                if (gameBoard[i][j] === "") {
                    items.push(<Box onClick={() => handleClick(i, j)} sx={{
                        width: "100px",
                        height: "100px",
                    }} key={i + " " + j}> </Box>);
                } else if (gameBoard[i][j] === "X") {
                    items.push(<CloseOutlined sx={{
                        width: "100px",
                        height: "100px",
                        color: "#f50057"
                    }} key={i + " " + j}> </CloseOutlined>);
                } else if (gameBoard[i][j] === "O") {
                    items.push(<CircleOutlined sx={{
                        width: "100px",
                        height: "100px",
                        color: "#0085d5"
                    }} key={i + " " + j}> </CircleOutlined>);
                }
                if (j < 2) {
                    items.push(<Box key={k++} sx={{
                        backgroundColor: "#000000",
                        width: "5px",
                        height: "100px"
                    }}/>);
                }

            }
            if (i < 2) {
                items.push(<Box key={k++} sx={{
                    backgroundColor: "#000000",
                    height: "5px",
                    width: "100%"
                }}/>);
            }
        }
        return items
    }

    return (
        <div>
            <Typography marginTop={5} variant="h3" gutterBottom>Two Player Mode</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                maxWidth: "315px",
                maxHeight: "315px",
                margin: "auto",
                marginTop: "100px"
            }}>
                {renderGameBoard()}
            </Box>

            <Modal open={endGame} onClose={resetGame}>
                <Box sx={modalStyle}>
                    <Typography variant="h3">Player {winner} wins!</Typography>
                    <Button onClick={() => resetGame()}>Play Again</Button>
                </Box>
            </Modal>

            <Modal open={Draw} onClose={resetGame}>
                <Box sx={modalStyle}>
                    <Typography variant="h3">Draw!</Typography>
                    <Button onClick={() => resetGame()}>Play Again</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default TwoPlayerMode;