import React, { FC } from "react";
interface Props {
  width: string;
  height: string;
  backgroudnColor?: string;
  title: string;
  content: string;
}
const ServiceCard: FC<Props> = ({
  width,
  height,
  backgroudnColor,
  title,
  content,
}) => {
  return (
    <div
      className={` ${width} ${height} bg-gradient-to-r ${backgroudnColor}
                 border-2 rounded-lg border-colorFive mb-10 md:mb-12 flex 
                 flex-col overflow-hidden shadow-lg  transition-transform 
                 duration-300 ease-in-out hover:scale-110`}
    >
      <div className="w-full h-[15%] flex  flex-col justify-center items-center font-bold text-2xl bg-colorTwo bg-opacity-70 font-permanentMarker">
        {title} csassas
      </div>
      <div className="w-full h-full py-[10px] flex flex-col bg-colorEight bg-opacity-50">
        {content}
      </div>
    </div>
  );
};

export default ServiceCard;
