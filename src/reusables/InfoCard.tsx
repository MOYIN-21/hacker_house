import {JSX} from "react";

interface InfoCard {
    icon: JSX.Element;
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCard> = ({icon, title, description}) => {
    return (
        <div className="flex items-center gap-3">
            <span className="h-10 w-10 flex items-center justify-center text-blue-600">{icon}</span>
            <div className="flex flex-col">
                <h1 className="text-gray-500 text-sm">{title}</h1>
                <h1 className="font-bold text-black font-sans">{description}</h1>
            </div>
        </div>
    );
};

export default InfoCard;
