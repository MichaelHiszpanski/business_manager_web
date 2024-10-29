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
      className={` ${width} ${height} bg-gradient-to-r ${backgroudnColor} border-2 rounded-lg border-colorFive m-2 md:m-12`}
    >
      <div className="w-full h-[15%] flex  flex-col justify-center items-center font-bold text-2xl">
        {title}
      </div>
      <div className="w-full h-full py-[10px]">{content}</div>
    </div>
  );
};

export default ServiceCard;
