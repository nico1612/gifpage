import { useState } from "react"

import { AddCategory,GifGrid } from "./components"

export const GiftExpertApp=()=>{

    const [categories,setCategories]=useState(['One Punch'])

    const onAddCategory=(newCategory)=>{
        
        if(categories.includes(newCategory)){
            return;
        }

        setCategories(cat=>[newCategory,...cat])
    }

    return(
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
            onNewCategory={event=>onAddCategory(event)}
            />

            {
                categories.map( category=>(
                    <GifGrid key={category} category={category}/>
                )
            )}

        </>
    )
}