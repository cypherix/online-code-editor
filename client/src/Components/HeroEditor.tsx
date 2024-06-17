import { File } from "./File"
import {AiOutlineClose} from "react-icons/ai"
export const HeroEditor:React.FC = () => {
    return (
        <div className="flex ml-[0.5px] bg-blackGrey h-screen w-[1692px] max-w-[1692px] min-w-[846px] ">
            <div >
                <span className="flex flex-row items-center gap-1 p-2">
                    <File fileName="file1" fileType="dotenv"/>
                    <AiOutlineClose className="text-white" /></span>
            </div>
        </div>
    )
}