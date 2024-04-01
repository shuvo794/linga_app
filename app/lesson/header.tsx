type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubcription: boolean;
};

export const Header = ({ hearts, percentage, hasActiveSubcription }: Props) => {
  return (
    <header className="lg:pt-[50px] pt-20 px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      Header
    </header>
  );
};
