import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelRobotLoader from '../voxel-robot-loader'

const LazyVoxelRobot = dynamic(() => import('../voxel-robot'), {
  ssr: false,
  loading: () => <VoxelRobotLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nanpipat Klinpratoom - Website</title>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelRobot />
       
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main