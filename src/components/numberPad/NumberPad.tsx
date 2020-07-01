import React from 'react'
import { Grid, Button } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

interface Props {
    addUserInput: (input: string) => void
}

const NumberPad = ({addUserInput}: Props) => {
    const StyledButton = (buttonValue: string, buttonColor: string) => {
        const StyledButton = withStyles({
            root: {
                borderRadius: 0,
                fontSize: 30,
                backgroundColor: buttonColor,
                border: '1px solid #1C1C1C',
                color: '#D4D4D2',
                width: '100%'
            }
        })(Button)

        return <StyledButton onClick={() => addUserInput(buttonValue)}>
                    {buttonValue}
                </StyledButton>
    }

    return (
        <div className='numberPad'>
            <Grid container spacing={0}>
                <Grid item xs={3}>{StyledButton('AC', '#333333')}</Grid>
                <Grid item xs={3}>{StyledButton('+/-', '#333333')}</Grid>
                <Grid item xs={3}>{StyledButton('%', '#333333')}</Grid>
                <Grid item xs={3}>{StyledButton('/', '#FF9500')}</Grid>
                <Grid item xs={3}>{StyledButton('7', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('8', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('9', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('*', '#FF9500')}</Grid>
                <Grid item xs={3}>{StyledButton('4', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('5', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('6', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('-', '#FF9500')}</Grid>
                <Grid item xs={3}>{StyledButton('1', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('2', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('3', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('+', '#FF9500')}</Grid>
                <Grid item xs={6}>{StyledButton('0', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('.', '#505050')}</Grid>
                <Grid item xs={3}>{StyledButton('=', '#FF9500')}</Grid>
            </Grid>
        </div>
    )
}

export default NumberPad