'use client'
import { Box, Container, InputAdornment, SvgIcon, TextField, Typography } from '@mui/material'
import React from 'react'
import PorscheSVG from '../UI/PorscheSVG'


const SearchCar = () => {
  return (
    <Container
      sx={{
        padding: {xs: 1, sm: 2,},
        height: '50vh',
        
      }}
    >
      <Box sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'end',
        justifyContent: 'start',
        width: '60%',
        border: '2px solid',
        borderBottom: '0px',
        borderColor: theme.palette.primary.main,
        borderRadius: 7,
        borderBottomLeftRadius: 0,
      })}>
          <SvgIcon sx={(theme) => ({
            fontSize: {xs: 82, sm:104, md: 132},
            backgroundColor: theme.palette.primary.main,
            borderRadius: 6,
          })}>
            <PorscheSVG />
          </SvgIcon>
          <TextField variant='standard' size='medium' label='search your car here' id='searchedCar' 
          sx={{
            '& .MuiInputBase-input': {
              fontSize: {xs: 20, sm: 28, md: 36, lg: 42},
              padding: 2,
            },
            '& .MuiInputLabel-root': {
              fontSize: {xs: 14, sm: 18, md: 24, lg: 28},
               padding: 2,
            },
            flex: 1,
          }}
          />
      </Box>
    </Container>
  )
}

export default SearchCar