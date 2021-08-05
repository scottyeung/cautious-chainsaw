import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import AddCard from '../components/AddCard'

import apiUrl from "next-api-url";
// import { server } from '../config';

export default function Home({data}) {
  const [user, setUser] = useState(data)
  const [sort, setSort] = useState(false)
  const [newUser, setNewUser] = useState(null)

  useEffect(() => {
    if(sort){
      const newUsers = user.sort((a, b) => a.first_name.localeCompare(b.first_name));
      setUser(newUsers);
      setSort(sort => !sort);  
    }
  }, [sort, user])
  
  const handleRemoveItem = (first_name, last_name) => {
    setUser(user.filter(item => `${item.first_name} ${item.last_name}` !== `${first_name} ${last_name}`))
  }

  const handleUpdateItem = (item, i) => {
    let newItems = {...user};
    newItems[i] = item;
    setUser(Object.values(newItems))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact List</title>
        <meta name="description" content="Contact List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.header}>
      <div className={styles.nav}>
        <a>Contact List</a>
        <button onClick={() => setNewUser(prev => !prev)}>Add Contact</button> 
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.contact_title}>
        <h1>Contacts</h1>
      </div>

      <div className={styles.contact_title_icon} onClick={() => setSort(true)}>
          <Image src="/sort.svg" height={30} width={30} alt="Sort icon" />
      </div>

      <div className={styles.card_box}>
        {
          user.map((person, i) => (
            <Card key={person.id} person={person} index={i} handleRemoveItem={handleRemoveItem} handleUpdateItem={handleUpdateItem} />
          ))
        }
        {
          newUser && <AddCard user={user} setUser={setUser} setNewUser={setNewUser} />
        }
      </div>
    </div>
      

    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/contacts`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}