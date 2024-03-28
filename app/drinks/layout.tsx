import React from "react"

const DrinksLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='max-w-xl'>
            <div className='mockup-code mb-8  flex justify-center items-center w-full'>
                <pre data-prefix='$'>
                    <code className="
                    text-center py-4">NextJs</code>
                </pre>
            </div>
            {children}
        </div>
    )
}

export default DrinksLayout
