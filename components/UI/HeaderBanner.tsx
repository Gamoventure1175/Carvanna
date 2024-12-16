'use client'
import React from 'react'
import Image from 'next/image'
import Porsche from '@/public/porsche.png'
import { Box, Container, Typography } from '@mui/material'

const HeaderBanner = () => {
  const getObjectPosition = (isMobile: boolean) => (isMobile ? 'center center' : '10% center');
  return (
    <Container
      sx={(theme) => ({
        height: '50vh',
        bgcolor: theme.palette.primary.main,
        p: {xs: 1, sm: 2},
        overflow: 'hidden',
        display: 'flex',
        flexDirection: {xs: 'column-reverse', md: 'row'},
        alignItems: {xs: 'start', md: 'end'},
        justifyContent: 'space-between',
      })}
    >
      <Box sx={{
        flex: {xs: 0, md: 1},
      }}>
        <Typography variant='h2'>
          Get Your Car Today
        </Typography>
        <Typography variant='body1'>
          Choose from a number of exotics and daily drives
        </Typography>
      </Box>
      <Box sx={{
        position: 'relative',
        flex: 1,
        height: '100%',
        width: '100%',

      }}>
        <Image alt='car' src={Porsche} fill={true} style={{
          objectFit: 'cover',
          objectPosition: getObjectPosition(window.innerWidth < 600),
        }}
         />
      </Box>
    </Container>
  )
}

export default HeaderBanner