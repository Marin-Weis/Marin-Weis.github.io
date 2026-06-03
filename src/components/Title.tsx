interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-center space-y-3 mb-4 md:mb-6">
      <h2 className="font-display uppercase font-bold text-2xl md:text-3xl tracking-wide">
        {title}
      </h2>
      <div className="divider-gradient mx-auto w-16"></div>
    </div>
  );
};

export default Title;
