import { Grid, TextField } from '@material-ui/core'
import React from 'react'

function DisplayData(props) {
    const data=props.data;   
    
   
    
    return (
        <div>
        <Grid container>
            {Object.keys(data).map(function(key) {
            return <div>
                <Grid item  >
                <TextField
                id="outlined-basic"
                variant="standard"
                label={key}
                value={data[key]}
                margin="dense"
                size="small"
                />
        </Grid>
        </div>;
        })}


    




        </Grid>

<p> All data has been stored in local storage....</p>
        </div>
    )
}

export default DisplayData
