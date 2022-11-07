import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Profile() {
    const [profile, setProfile] = useState({})
    let liff
    useEffect(() => {
        liff = require('@line/liff')
        const lineliff = async () => {
            try {
                await liff.init({ liffId: `${process.env.NEXT_PUBLIC_LIFF_ID}` });
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
            <Head>
                <title style={{ textAlign: "center" }} >My Profile</title>
            </Head>
            <h1>Profile</h1>
            <div style={{ textAlign: "center" }} >
                {profile.pictureUrl && <Image
                    src={profile.pictureUrl}
                    alt={profile.displayName}
                    width={500}
                    height={500}
                />}
                <div>Name: {profile.displayName}</div>
            </div>
        </section>
    )
}