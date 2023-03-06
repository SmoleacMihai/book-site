import { Inter } from 'next/font/google'
import { Button } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Button>Gay</Button>
      <br/>
      <br/>
      <Button size={"big"}>Gay</Button>
    </>
  )
}
