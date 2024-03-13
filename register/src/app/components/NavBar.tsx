import Link from "next/link"

export function NavBar () {
    return(
        <nav className=" flex space-x-10 " >
            <h2>NextRegister</h2>
            <ul>
                <li><Link href="/auth/login" >LogIn</Link></li>
                <li><Link href="/auth/register">Register</Link></li>
                <li></li>
            </ul>
        </nav>
    )
}