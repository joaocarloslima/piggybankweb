"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { update } from "@/actions/contas";

export default function FormEdit({conta}){
    const [message, setMessage] = useState("")
    const [contaEdit, setContaEdit] = useState(conta)
    
    async function handleSubmit(){
        const resp = await update(contaEdit)
        if(resp?.error){
            setMessage(resp.error)
            return
        }
        redirect("/contas")
    }

    function handleFieldChange(field, value){
        //console.log(field, value)
        setContaEdit({
            ...contaEdit,
            [field]: value
        })
    }

    return(
        <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
        <h2 className="text-2xl font-bold">Editar Conta</h2>
        <form action={handleSubmit}>
            <InputText 
                name="nome" 
                id="nome" 
                label="nome" 
                value={contaEdit.nome} 
                onChange={e => handleFieldChange("nome", e.target.value)}
            />
            <InputText 
                name="icone" 
                id="icone" 
                label="ícone" 
                value={contaEdit.icone} 
                onChange={e => handleFieldChange("icone", e.target.value)}
            />

            <div className="flex justify-around mt-4">
                <Button href="/contas" variant="secundary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
                    cancelar
                </Button>
                <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>
                    salvar
                </Button>
            </div>
        </form>
        <p>{message}</p>
    </main>
    )
}