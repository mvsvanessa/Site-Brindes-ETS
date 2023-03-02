import styles from '../styles/carrossel.module.css'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useState, useEffect, useRef } from 'react'


export default function Carrossel(){
    const carrossel = useRef();
    const [width, setWidth] = useState(0);
    const [data,setData] = useState([])
    const [view, setView] = useState(false)

    const getData=()=>{
        fetch('dados.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)

          });
    }

    useEffect (()=>{
        getData()
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    },[])

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <motion.div className={styles.carrossel} whileTap = {{cursor:"grabbing"}} ref = {carrossel}>{
                    <motion.div className={styles.inner} drag = "x" dragConstraints={{right:0, left:-2300}}>
                            {data.map(brinde=>(
                                <motion.div className={styles.card}key={brinde.id}>
                                    <div className={styles.conteudo}>
                                        <h1 className={styles.name}>
                                            {brinde.name}
                                            <p className={styles.details}>
                                                    {brinde.details}</p>
                                            <p className={styles.dimension}>
                                                    {brinde.dimension}</p>
                                            <p className={styles.material}>
                                                    {brinde.material}</p>
                                            <p className={styles.productionTime}>
                                                    {brinde.productionTime}</p>
                                            <p className={styles.price}>
                                                    {brinde.price}</p>
                                                <Image className={styles.images}
                                                    src={brinde.urlImg} 
                                                    width={150}
                                                    height={150}
                                                    alt={brinde.name}/>
                                        </h1>
                                    </div>
                                    <div className={styles.botao}>
                                    <button className={styles.button}onClick = {() => setView(!view)}>
                                        PURCHASE
                                    </button>
                                    </div>
                                </motion.div>
                            ))
                    }</motion.div>
                }</motion.div>
            </div>

        </div>
    )
}