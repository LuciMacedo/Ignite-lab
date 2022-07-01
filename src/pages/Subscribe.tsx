import { gql, useMutation } from "@apollo/client"
import { useState, FormEvent } from "react"
import { useNavigate } from "react-router"
import { Logo } from "../components/Logo"
import { useCreateSubscriberMutation } from "../graphql/generated"



export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })
        navigate('/event')
    }

    return (
        <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
            <div className='w-full max-w-[1100px] flex items-center gap-20 mt-10'>

                <div className='max-w-[640px]'>
                    <Logo />
                    <h1 className='text-[2.5rem] mt-8 leading-tight'>Build an <strong className='text-blue-500'>Application,</strong> from scratch with <strong className='text-blue-500'>React!</strong></h1>

                    <p className='mt-4 text-gray-200 leading-relaxed'>In just one week you will master in practice one of the most used technologies and with high demand to access the best opportunities on the market.</p>
                </div>


                <div className='w-[440px] p-8 bg-gray-700 border border-gray-500 rounded'>

                    <strong className='text-2xl mb-6 block'>Sign up</strong>

                    <form onSubmit={handleSubscribe} className='flex flex-col w-full gap-2'>
                        <input
                            className='bg-gray-900 rounded px-5 h-14 '
                            type='text'
                            placeholder='Name' onChange={e => setName(e.target.value)}
                        />
                        <input
                            className='bg-gray-900 rounded px-5 h-14'
                            type='email'
                            placeholder='email' onChange={e => setEmail(e.target.value)}
                        />

                        <button type='submit'
                            disabled={ loading }
                            className='bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-900 transition-colors disabled:opacity-50'>
                            Sign up
                        </button>

                    </form>


                </div>


            </div>
            <img src='/src/assets/code-mockup.png' className='mt-18' alt='' />


        </div>
    )
}