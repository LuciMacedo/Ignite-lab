import { Player, Youtube, DefaultUi } from '@vime/react'
import { ArrowDown, DiscordLogo, Lightning, CaretRight } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBSlugLQuery } from '../graphql/generated';



interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {

    const { data } = useGetLessonBSlugLQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return <div className='flex-1'>Loading...</div>
    }

    return (
        <div className='flex-1'>

            <div className='bg-black justify-center'>
                <div className='h-full w-full max-w[1100px] max-h-[60vh] aspect-video'>
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>


            <div className='p-8 max-w[1100px] mx-auto'>
                <div className='flex items-start gap-16'>
                    <div className='flex-1'>
                        <h1 className='text-2xl font-bold'>
                            {data.lesson.title}
                        </h1>
                        <p className='mt-4 text-gray-200 leading-relaxed'>
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (

                            <div className='flex items-center gap-4 mt-6 '>
                                <img className='h-16 w-16 rounded-full border-2 border-blue-500' src={data.lesson.teacher.avatarURL}
                                    alt=''>
                                </img>
                                <div className='leading-relaxed'>
                                    <strong className='font-bold text-2xl block'>
                                        {data.lesson.teacher.name}
                                    </strong>
                                    <span className='text-gray-200 text-sm block'>
                                        {data.lesson.teacher.bio}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col gap-4'>
                        <a href='' className='p-4 text-sm bg-green-500 flex items-center roanded font-bold uppercase gap-2 justify-center hover:bg-green-700' transition-color>
                            <DiscordLogo size={24} />
                            Discord Community
                        </a>

                        <a href='' className='p-4 text-sm flex items-center roanded font-bold border
                        border-blue-500 text-blue-500 uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors'>
                            <Lightning size={24} />
                            Challenge
                        </a>

                    </div>
                </div>

                <div className='grid grid-cols-2 mt-20 gap-8'>
                    <a href='' className=' bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-color'>
                        <div className='bg-green-700 h-full p-6 flex items-center'>
                            <ArrowDown size={40} />
                        </div>
                        <div className='py-6 leading-relaxed '>
                            <strong className='text-2xl'>
                                Extra Content
                            </strong>
                            <p className='text-sm text-gray-200mt-2'>Access the classes content to accelerate your development</p>
                        </div>
                        <div className='h-full p-6 flex items-center'>
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href='' className=' bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-color'>
                        <div className='bg-green-700 h-full p-6 flex items-center'>
                            <ArrowDown size={40} />
                        </div>
                        <div className='py-6 leading-relaxed '>
                            <strong className='text-2xl'>
                                ExclusiveWallpa pers
                            </strong>
                            <p className='text-sm text-gray-200mt-2'>Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
                        </div>
                        <div className='h-full p-6 flex items-center'>
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>


            </div>
        </div>
    )
}