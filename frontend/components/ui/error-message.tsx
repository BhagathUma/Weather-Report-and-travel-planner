interface Props {
  message?: string;
}

export default function ErrorMessage({ message }: Props) {
  if (!message) return null;

  return (
    <p className="mt-2 text-sm text-red-400">
      {message}
    </p>
  );
}