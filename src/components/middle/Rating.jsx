import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const RatingComponent = ({ Rating: rating }) => {

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <p className='font-Montserrat font-bold  text-black'>   Rating product</p>
            <Rating name="read-only" value={rating ? rating : 1} readOnly />

        </Box>
    )
}

export default RatingComponent
