import './FindCandy.css'

export const FindCandy = ({setterFunction}) => {


    return (
        <form className="findCandy">
            <h2>What are you looking for?</h2>
            <input type="text" placeholder="ex. 'Taffy'"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                } />
        </form>
    )
}