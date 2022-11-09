import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Profile() {
    const [profile, setProfile] = useState({}) //useState เป็นการเรียกใช้งาน state และ การเปลี่ยนแปลงค่า state
    let liff
    useEffect(() => {
        liff = require('@line/liff')
        const lineliff = async () => {
            try {
                await liff.init({ liffId: `${process.env.NEXT_PUBLIC_LIFF_ID}` }); //
            } catch (error) {
                console.error('liff init error', error.message)
            }
            if (!liff.isLoggedIn()) {
                liff.login();
            }
            const profile = await liff.getProfile()
            setProfile(profile)
        }
        lineliff()
    })


  

  return (
        <section>
            <div style={{ textAlign: "center" }} >
            <Head>
                <title>My Profile</title>
            </Head>
            <h1>Profile</h1>
                {profile.pictureUrl && <Image
                    src={profile.pictureUrl}
                    alt={profile.displayName}
                    width={400}
                    height={400}
                />}
                <div>Name: {profile.displayName}</div>
            </div>
        </section>
    )
}