"use server"

import { revalidatePath } from "next/cache"
import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_BASE_URL + "/contas"


export async function create(formData) {
    const token = cookies().get("piggybank_token")
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.value}`
        }
    }
    
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const erros = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {message: "Erro ao cadastrar" + erros}
    }
    revalidatePath("/contas")
    return {ok: "success"}
    
}

export async function getContas(){
    const token = cookies().get("piggybank_token")
    const options = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    }
    const resp = await fetch(url, options)
    if (!resp.ok) throw new Error("Não pode carregar os dados")
    return resp.json()
}

export async function destroy(id){  
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if (resp.status !== 204) return {error: "Erro ao apagar conta. " + resp.status}

    revalidatePath("/contas")

}

export async function update(conta){
    const updateURL = url + "/" + conta.id

    const options = {
        method: "PUT",
        body: JSON.stringify(conta),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateURL, options)

    if (resp.status !== 200) return {error: "Erro ao atualizar conta. " + resp.status}

    revalidatePath("/")
}

export async function getConta(id){
    const getUrl = url + "/" + id
    const resp = await fetch(getUrl)
    if (resp.status !== 200) return {error: "Erro ao buscar dados da conta. " + resp.status}
    const json = await resp.json()
    return json
}

