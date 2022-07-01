import { Lesson } from "./Lesson";
import { useGeLessonsQuery } from "../graphql/generated";


export function Sidebar() {

    const { data } = useGeLessonsQuery()

    return (
        <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 '>
            <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 black'  >Class Schedule</span>

            <div className='flex flex-col gap-8 mt-12 '>
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)} type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>


    )
}