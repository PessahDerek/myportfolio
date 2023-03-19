
import { useEffect, useState } from 'react'

const useIsPc = () => {
    const [isPc, setIsPc] = useState(true)
    
    window.addEventListener('resize', ()=> setIsPc(window.innerWidth > 599))
    
    useEffect(()=>{
        setIsPc(window.innerWidth > 599)
    }, [isPc])

    return isPc
}

export default useIsPc