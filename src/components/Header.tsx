import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Gestor de Tarefas
      </Link>
      <nav>
        <Link href="/tarefas" className="mr-4">
          Ver Tarefas
        </Link>
        <Link href="/tarefas/nova" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Nova Tarefa
        </Link>
      </nav>
    </header>
  );
}