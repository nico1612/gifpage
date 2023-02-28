import PropTypes from 'prop-types'

export const GiftItem=({title,url,id})=>{
    return(
        <div className="card">
            <img src={url} alt={url}/>
            <p>{title}</p>
        </div>
    )
}

CounterApp.propTypes={
    title:PropTypes.isRequired,
    url:PropTypes.isRequired
}