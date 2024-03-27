type Props = {
  children: React.ReactNode;
};

export const FeedWorper = ({ children }: Props) => {
  return <div className="flex-1 flex-relative top-0 pb-10">{children}</div>;
};
