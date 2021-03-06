import React, { useState } from 'react';
import Card from './components/shared/card/Card';
import Button from '@mui/material/Button';

function WorkScheduleApp() {
    const [cards, setCards] = useState(0);

    const addToCardCount = (): void => {
        setCards(cards + 1);
    }

    return (
        <React.Fragment key='main'>
            <div className='main'>
                <h1>Work Schedule</h1>
                <div className='cards'>
                    There are {cards} cards
                    <Card 
                        cardNumber={1} 
                        cardTitle='Card 1'/>
                </div>
                <div className='button'>
                    <Button 
                        variant='contained'
                        onClick={addToCardCount}>
                        Add to card count
                    </Button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default WorkScheduleApp
