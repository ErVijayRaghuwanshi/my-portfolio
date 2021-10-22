import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
    const ref = useRef(null)

    return (
        <div>
            <LoadingBar 
                progress='4' 
                ref={ref} 
                loaderSpeed='2000'
            />
            <button onDoubleClick={() => ref.current.continuousStart()}>Click Me!</button>
        </div>
    )
}

export default App