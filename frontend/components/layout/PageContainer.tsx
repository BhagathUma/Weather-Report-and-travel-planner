interface Props {
  children: React.ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <div
      className="
      mx-auto
      max-w-7xl
      px-6
      py-8
    "
    >
      {children}
    </div>
  );
}