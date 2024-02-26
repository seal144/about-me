export default function Layout({
  children,
  skillsSection,
  experienceSection,
}: {
  children: React.ReactNode;
  skillsSection: React.ReactNode;
  experienceSection: React.ReactNode;
}) {
  return (
    <>
      {children}
      {skillsSection}
      {experienceSection}
    </>
  );
}
