'use client'
import { useCounter } from "@/store/use-counter"
import { Button } from "../ui/button"

const Counter = () => {
    const { count, decrease, increase } = useCounter()
    return (
        <div className="flex  justify-center flex-col items-center">
            <h1 className='text-7xl font-bold mb-4 '>{count}</h1>
            <div className="flex items-center justify-center space-x-2 ">
                <Button className='btn btn-primary' onClick={increase}>
                    decrease
                </Button>
                <Button className='btn btn-primary' onClick={decrease}>
                    increase
                </Button>
            </div>
        </div>
    )
}

export default Counter
