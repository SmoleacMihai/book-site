import { Inter } from 'next/font/google'
import { Button } from '@mui/material'
import DefaultLayout from '../layouts/Default'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DefaultLayout>
      <Button>Gay</Button>
      <br/>
      <br/>
      <Button size={"big"}>Gay</Button>
    </DefaultLayout>
  )
}
