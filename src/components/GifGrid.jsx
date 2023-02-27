import { useEffect, useState } from 'react'

import {getGifs} from '../helpers/getGifts' 
import {GiftItem} from './GifItem'

export const GifGrid=({category})=>{

    const [images,setImages]=useState([])

    const getImiges=async()=>{
        const newImages= await getGifs(category);
        setImages(newImages)
    }
    useEffect(()=>{
        getImiges()
    },[])

    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GiftItem 
                        key={ image.id } 
                        { ...image }
                    />
                ))
            }
            </div>
        </>
    )
}