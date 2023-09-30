const Txt = ({ className, text }: { className?: string; text: string[] }) => {
  return (
    <div className={`${className} text text-lg font-light text-black `}>
      {[...text]}
    </div>
  );
};

export default Txt;
