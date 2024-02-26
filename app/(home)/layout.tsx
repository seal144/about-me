export default function Layout({
  children,
  experienceSection,
}: {
  children: React.ReactNode;
  experienceSection: React.ReactNode;
}) {
  return (
    <>
      {children}
      {experienceSection}
    </>
  );
}
