import { Nabvar } from "@/components";

export default function GeneraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nabvar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo</span>
        {children}
      </main>
    </>
  );
}
