import React, {useState} from 'react'
import "./Alert.css"
const Alert = () => {
    const [alert, setAlert] = useState(true)

    const hiddeAlert = () =>{
        setAlert(false)
    }
    return (
        <div>
            <div className={alert ? "alert" : "alert hidden" }>
                <div className="alert-msg">
                     ⚠ This is a demo version! 
                </div>
                <div className="alert-button">
                        <span onClick={hiddeAlert}>X</span>
                </div>
            </div>
        </div>
    )
}
export default Alert