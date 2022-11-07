import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import liff from '@line/liff';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './index.css';

export default function Home() {
  return (
    <div>
      <h1 >Angular with LINE Login</h1>
      <h1 >Angular with LINE Login</h1>
      <b>id token: </b>
      <b>display name: </b>
      <b>status message: </b>
      <b>user id: </b>
      <Button type="primary">Logout</Button>

    </div>
  )
}
