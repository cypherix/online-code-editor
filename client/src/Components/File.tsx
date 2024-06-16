import React from "react";
import { ReactSVG } from "react-svg";

type FileProps = {
    fileName: string;
    fileType: string;
};

export const File: React.FC<FileProps> = ({ fileName, fileType }) => {
    return (
        <span className="flex flex-row gap-2 p-2 items-center">
            <ReactSVG src={`/${fileType}.svg`} className="w-10 h-10 text-blackDim" />
            <p className="text-white">{`${fileName}.${fileType}`}</p>
        </span>
    );
};
