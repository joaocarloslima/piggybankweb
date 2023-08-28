import Link from "next/link"

export default function Button({ children, icon, element = "link", variant = "primary", ...props }) {
    const styles = {
        primary: "bg-rose-600 hover:bg-rose-800",
        secundary: "border-2 border-slate-400 hover:bg-slate-800"
    }

    const classVariant = `flex items-center gap-1 py-1 px-4 rounded ${styles[variant]}`

    return (
        <>
            {element == 'link' ?
                <Link href="#" {...props} className={classVariant}>
                    {icon}
                    {children}
                </Link>
                :
                <div className={classVariant} >
                    {icon}
                    <input value={children} type="submit" {...props} />
                </div>
            }
        </>

    )
}