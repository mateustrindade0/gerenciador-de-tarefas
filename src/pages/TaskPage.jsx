import { ChevronLeftIcon } from "lucide-react"
import { use } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Title from "../components/Title"

function TaskPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')

    return (
    <div className="w-screen h-screen bg-blue-950 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative">
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0">
                    <ChevronLeftIcon className="text-slate-300" />
                </button>
                <Title>Detalhes da Tarefa</Title>
            </div>
            
            <div className="bg-slate-200 p-4 rounded-md shadow">
                <h2 className="text-xl font-bold text-slate-800">{title}</h2>
                <p className="text-slate-700">{description}</p>
            </div>
        </div>
    </div>
)}

export default TaskPage