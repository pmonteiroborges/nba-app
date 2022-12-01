import { useState } from "react"
export default function PositionSelector({
    position,
    setFilterByPosition,
}) {
    const [checked, setChecked] = useState(false)
    const setFilterToPosition = () => {
        // old value of checked, so use opposite value
        if (!checked) {
            setFilterByPosition(oldPositions => [...oldPositions, position])
        } else {
            setFilterByPosition(oldPositions => oldPositions.filter(pos => pos !== position))
        }

        setChecked(!checked)
    }

    return (
        <div className="team">
            <input onClick={setFilterToPosition} type="checkbox" id={position} name={"position"}></input>
            <label className="position-label" for={position}>{position}</label><br></br>
        </div>
    )
}