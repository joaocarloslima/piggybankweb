import DropMenu from "@/components/DropMenu";
import { CreditCardIcon } from "@heroicons/react/24/outline";

export default function DataRow({conta}) {
    const {nome, saldo} = conta
    return (
        <div id="data-row" className="group/row flex items-center justify-between hover:bg-slate-800 p-2 rounded cursor-pointer">
            <div className="flex gap-1">
                <CreditCardIcon className="h-6 w-6" />
                <span>{nome}</span>
            </div>
            <div className="flex items-center">
                <span>R$ {saldo.toFixed(2)}</span>
                <span className="invisible group-hover/row:visible" >
                    <DropMenu conta={conta}/>    
                </span>
            </div>
        </div>
    )
}