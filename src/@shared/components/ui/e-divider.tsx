
export const EDivider = ({ label }: { label: string }) => {
  return (
    <div className="my-5 md:my-6 flex items-center gap-3 text-xs md:text-sm text-gray-500">
      <span className="h-px flex-1 bg-gray-200" />
      <span>{label}</span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

