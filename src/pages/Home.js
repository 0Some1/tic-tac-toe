import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/'+e);
    };

    return (
        <div className="home">
            <Container sx={{
                marginTop: '15%',
            }} >
                <Typography mt={3} color="danger" variant="h2" gutterBottom>Tic Tac Toe</Typography>
                <Button onClick={()=>handleClick("two-player-mode")} sx={
                    {
                        display: 'inline-block',
                        width: '100%',
                    }
                } color="primary">Two Player Mode</Button>
                <Button onClick={()=>handleClick("ai-mode")} sx={
                    {
                        display: 'inline-block',
                        width: '100%',
                    }
                } color="primary">AI Mode</Button>
                <Button onClick={()=>handleClick("about")} sx={
                    {
                        display: 'inline-block',
                        width: '100%',
                    }
                }color="primary"><NavLink to="/About">About</NavLink></Button>
            </Container>
        </div>
    );
}

export default Home;