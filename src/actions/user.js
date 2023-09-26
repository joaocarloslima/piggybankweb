"use server"

import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_BASE_URL + "/login"

export async function apiLogin(credenciais){

    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const resp = await fetch(url, options)
    console.log(resp)

    if (resp.status !== 200) return {error: "credenciais inválidas"}

    const json = await resp.json()
    const token = json.token

    cookies().set('piggybank_token', token, {
        maxAge: 60 * 60 * 24 * 2 // 2 dias
    })
}

export async function apiLogout(){
    cookies().delete('piggybank_token')
}