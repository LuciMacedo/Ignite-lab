import { ArrowRight } from 'phosphor-react'


export function Initial() {
    return (
        <div className='h-full w-full max-w[1100px] max-h-[60vh] flex justify-center align-items-center '>
            <h1 className='text-[2.5rem] mt-60 leading-tight align-items-center'>Build an <strong className='text-blue-500'>application</strong> from zero! 
            <br></br>
            With <strong className='text-blue-500'>React<ArrowRight size='60' className='m-auto'/></strong>
            </h1>
        </div>
        
    )
}