import {GiftItem} from './GifItem'
import {useFetchGif} from '../hooks/useFetchGif'
import PropTypes from 'prop-types'

export const GifGrid=({category})=>{

    const { images, isLoading } = useFetchGif( category );

    return(
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>cagando...</h2>)
            }
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

GifGrid.propTypes={
    category:PropTypes.string.isRequired
}