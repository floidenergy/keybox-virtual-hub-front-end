import { Link } from "react-router-dom";

const NewsCard = ({style, img, title, content, url}) => {
    return ( 
        <div className=" bg-mainBlue rounded-md shadow-md px-6 pt-24 pb-6 text-gray-50 relative  flex flex-col justify-between " style={style}>
            <img className=" absolute top-0 right-[0px] translate-y-[-50%]" src={img} alt="" />
            <h1 className=" font-DelaGothic font-bold capitalize text-[1.5rem]  mb-2">{title}.</h1>
            <p className="text-[0.8rem]">{content}</p>
            <Link to={url} className=" block text-sm underline self-end ">Learn more</Link>
        </div>
     );
}
 
export default NewsCard;