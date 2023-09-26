"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Image from "next/image";
import loginimage from "@/images/login.jpg"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const { register, handleSubmit } = useForm()
    const { login } = useContext(AuthContext)
    const { push } = useRouter()

    async function onSubmit(data){
        const resp = await login(data)
        if (resp?.error) {
            toast.error(resp?.error)
        }else{
            push("/")
        }

    }

    return(
        <div className="flex h-screen">
            <aside className="hidden lg:flex">
                <Image src={loginimage} className="h-full w-full object-cover"/>
            </aside>

            <main className="flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl font-bold">PiggyBank</h1>
                <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2 items-start mt-20">
                    <InputText register={register} name="email" label="email" />
                    <InputText register={register} name="senha" label="senha" type="password" />
                    <Button element="button">entrar</Button>
                </form>
            </main>
        </div>
    )
}