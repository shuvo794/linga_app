type Props = {
  children: React.ReactNode;
};

const lessonLayout = ({ children }: Props) => {
  return <div className=" flex flex-col h-full">{children}</div>;
};
