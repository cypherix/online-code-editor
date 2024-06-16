import { ReactSVG } from "react-svg"
import { File } from "./File"


const files=[
    {
        fileName:"file2",
        fileType:"dotenv"
    },
    {
        fileName:"file3",
        fileType:"dotenv"
    },
    {
        fileName:"file4",
        fileType:"dotenv"
    }
]
export const SideBar:React.FC = () => {
    return (
        <div className="bg-blackDim max-w-[300px] min-w-250 h-screen">
            <ReactSVG src="/folder-solid.svg" className="w-10 h-10 text-blackDim"/>
            <button className="border-2 border-customBlue min-w-[240px] p-2 rounded-md text-white max-w-[250px] ">New File</button>
            <div className="flex flex-row gap-2 p-2 items-center">
                <ReactSVG src="/folder-solid.svg" className="w-10 h-10 text-blackDim"/>
                <p className="text-white font-bold">Files</p>
            </div>
            <div>
                {
                    files.map((file)=>{
                        return (
                           <File  fileName={file.fileName} fileType={file.fileType} />
                        )
                    })
                }
            </div>
        </div>
    )
}