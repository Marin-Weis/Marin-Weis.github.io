interface TitleProps {
    title : String 
}
const Title = ({title} : TitleProps) => {
    return (
        <h1 className="uppercase font-bold mb-5 text-3xl text-center">
            {title}
        </h1>
    );
}

export default Title;