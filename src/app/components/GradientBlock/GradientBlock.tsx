const GradientBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative before:absolute before:bottom-[-100px] before:right-0 before:-z-10 before:block before:h-full before:max-h-[550px] before:w-full before:max-w-[550px] before:rounded-full before:bg-gg before:blur-[175px] ">
      {children}
    </div>
  );
};

export default GradientBlock;
