import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2>Contas</h2>
      </main>
    </>

  )
}
