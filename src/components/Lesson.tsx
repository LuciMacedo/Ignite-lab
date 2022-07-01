import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'

interface lessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}
export function Lesson(props:lessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isClassAvailable = isPast(props.availableAt);

    const availableDateFormatted = format(props.availableAt, "EEE' • 'd' d' MMM ' • ' k'h'mm")

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className='text-gray-300'>
                {availableDateFormatted}
            </span>

            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:bg-green-500', {
                'bg-green-500' : isActiveLesson,
            })}
                >
                <header className='flex items-center justify-between' >
                    {isClassAvailable ? <span className=' text-sm text-blue-500 font-medium flex items-center gap-2' >
                        <CheckCircle size={20}/>
                        Content Release
                    </span> :
                    <span className={classNames('text-sm text-orange-500 font-medium flex items-center gap-2', {
                        'text-white': isActiveLesson,
                        'text-blue-500': !isActiveLesson
                    })} >
                    <Lock size={20}/>
                    Soon
                </span>}
                    <span className='text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold'>
                        {props.type === 'live'? 'Live' : 'Class'}
                    </span>
                </header>

                <strong className={classNames('text-gray-200 mt-5 block', {
                    'text-color-white': isActiveLesson,
                    'text-gray-500': !isActiveLesson
                })}
                >
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}