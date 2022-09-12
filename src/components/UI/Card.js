import './Card.css'

export default function Card ({children, className}) {
    const classes = className  //This allws us to dynamically access props
    return (
        <div className={classes}>
            {children}
        </div>
    )
}