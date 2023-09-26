"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar({ active }) {
    const { user, logout } = useContext(AuthContext)
    const { push } = useRouter()

    function handleLogout() {
        logout()
        push("/login")
    }

    return (
        <nav className="bg-slate-900 p-6 flex justify-between items-center">
            <ul className="flex gap-12 items-end text-slate-400 text-sm">
                <li>
                    <a href="#">
                        <h1 className="text-2xl font-bold text-slate-100">PiggyBank</h1>
                    </a>
                </li>
                <li>
                    <Link className={active == "despesas" && "text-slate-300"} href="/despesas">
                        despesas
                    </Link>
                </li>
                <li>
                    <Link className={active == "contas" && "text-slate-300"} href="/contas">
                        contas
                    </Link>
                </li>
                <li>
                    <Link className={active == "categorias" && "text-slate-300"} href="/categorias">
                        categorias
                    </Link>
                </li>
            </ul>

            <div className="flex items-center gap-2">
                <span>{user?.nome}</span>
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>
                <Button element="button" onClick={handleLogout}>sair</Button>
            </div>
        </nav>
    )
}