type Props = {
  children: React.ReactNode;
};

export const FeedWorper = ({ children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
