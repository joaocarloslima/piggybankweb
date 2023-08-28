export default function InputText({label, id, ...props}){
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-slate-300">{label}</label>
            <input type="text" id={id} {...props} className="bg-slate-800 rounded p-2 outline-none focus:ring-1 focus:ring-pink-600" />
        </div>
    )
}