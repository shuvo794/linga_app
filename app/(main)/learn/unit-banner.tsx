type Props = {
  title: string;
  discreption: string;
};

export const UnitBanner = ({ title, discreption }: Props) => {
  return (
    <div className="w-full rounded-md p-5 text-white items-center justify-between bg-green-500 mb-10 ">
      <div className="space-y-2.5">
        <h1 className="font-bold text-lg">{title}</h1>
        <p>{discreption}</p>
      </div>
    </div>
  );
};
