import React from 'react'
import { Grid, Button } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

interface Props {
    addUserInput: (input: string) => void
}

const NumberPad = (props: Props) => {
    const StyledButton = (buttonValue: string, buttonColor: string) => {
        const StyledButton = withStyles({
            root: {
                borderRadius: 0,
                fontSize: 30,
                backgroundColor: buttonColor,
                border: '1px solid #1C1C1C',
                color: '#D4D4D2'
            }
        })(Button)

        return <StyledButton onClick={() => props.addUserInput(buttonValue)}>
                    {buttonValue}
                </StyledButton>
    }

    return (
        <Grid container spacing={3}>
            <Grid container item xs={12} spacing={3}>
                {StyledButton('AC', '#333333')}
                {StyledButton('+/-', '#333333')}
                {StyledButton('%', '#333333')}
                {StyledButton('/', '#FF9500')}
            </Grid>
            <Grid container item xs={12} spacing={3}>
                {StyledButton('7', '#505050')}
                {StyledButton('8', '#505050')}
                {StyledButton('9', '#505050')}
                {StyledButton('*', '#FF9500')}
            </Grid>
            <Grid container item xs={12} spacing={3}>
                {StyledButton('4', '#505050')}
                {StyledButton('5', '#505050')}
                {StyledButton('6', '#505050')}
                {StyledButton('-', '#FF9500')}
            </Grid>
            <Grid container item xs={12} spacing={3}>
                {StyledButton('1', '#505050')}
                {StyledButton('2', '#505050')}
                {StyledButton('3', '#505050')}
                {StyledButton('+', '#FF9500')}
            </Grid>
            <Grid container xs={12} spacing={3}>
                <Grid item xs={12} sm={3} spacing={3}>
                    {StyledButton('0', '#505050')}
                </Grid>
                <Grid item xs={3} spacing={3}>
                    {StyledButton('.', '#505050')}
                </Grid>
                <Grid item xs={3} spacing={3}>
                    {StyledButton('=', '#FF9500')}
                </Grid>    
            </Grid>
        </Grid>
    )
}

export default NumberPad