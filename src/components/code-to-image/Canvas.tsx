export default function Canvas({
  background,
  children,
  exportRef,
  padding,
}: {
  padding: any;
  background: string;
  children: React.ReactNode;
  exportRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={exportRef}
      className="transition-all duration-300 w-full md:min-w-135 md:max-w-150"
      style={{
        background,
        padding: padding,
      }}
    >
      {children}
    </div>
  );
}
