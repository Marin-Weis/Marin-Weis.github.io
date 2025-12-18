interface TitleProps {
    title : string 
}
const Title = ({title} : TitleProps) => {
    return (
        <div className="text-center space-y-2 mb-4 md:mb-6">
            <h1 className="uppercase font-bold text-2xl md:text-3xl tracking-wide">
                {title}
            </h1>
            <div className="mx-auto h-[3px] w-16 rounded-full bg-gradient-to-r from-accent via-primary to-secondary"></div>
        </div>
    );
}

export default Title;