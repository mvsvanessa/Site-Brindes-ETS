import styles from '../styles/carrossel.module.css'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Popup from '../components/popup';
import 'reactjs-popup/dist/index.css';

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
                    <motion.div className={styles.inner} drag = "x" dragConstraints={{right:0, left:-2450}}>
                            {data.map(brinde=>(
                                <motion.div className={styles.card}key={brinde.id}>
                                    <h1 className={styles.name}>
                                        {brinde.name}
                                        <p className={styles.description}>
                                            {brinde.description}</p>
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
                                    </h1>
                                    <button className={styles.button}onClick = {() => setView(!view)}>
                                        VIEW
                                    </button>
                                </motion.div>
                            ))
                    }</motion.div>
                }</motion.div>
            </div>
            <Popup trigger={view}setTrigger={setView}/>
        </div>
    )
}