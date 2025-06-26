import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <header>
        <h1 className="text-4xl font-bold my-4">Infoweb - Atividade 1 do 2o bimestre</h1>
      </header>
      <main>
        <h2 className="text-2xl mb-4">Atividade 1 do 2o bimestre com hook reducer e shadcnui</h2>
        <p className="mb-8">
          Este é um aplicativo simples de lista de tarefas criado para praticar o uso do hook `useReducer` do React.
        </p>
        <Link href="/tarefas" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Ir para a Lista de Tarefas
        </Link>
      </main>
      <footer className="mt-10 text-sm text-gray-500">
        <p>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</p>
        <p><a href="https://fsf.org/" className="underline">Copyright (C) 2007 Free Software Foundation, Inc.</a></p>
      </footer>
    </div>
  );
}