import React, { useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css'
function Home() {

  const [data, setData] = React.useState([])
  
  useEffect(()=>{
    async function getData(){
      try{
        const res = await axios.get('http://localhost:3000/')
        console.log(res.data[0].inmage)
        setData(res.data[0].inmage)
      }catch(err){
        console.log(err)
      }
    }
    getData()
  },[])

  
  return (
    <>
    <div className={styles.main}>
      <div className={styles.reelss}>
        <div className={styles.cont} >
          {
            data.map((item) => (
              <div className={styles.reel}>
                <div className={styles.reelimg}>
                  <img src={item.imagelink} alt="" />
                </div>
                <div className={styles.butts}>
                  <button className={styles.like}>Like</button>
                  <button className={styles.dislike}>Dislike</button>
                </div>
              </div>
            ))   
          }

        </div>
      </div>
    </div>
    </>
  )
}

export default Home



