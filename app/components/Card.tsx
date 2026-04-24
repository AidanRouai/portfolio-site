import Link from "next/link";

export default function Card( {title, description, link}: {title: string, description: string, link: string}) {
    return (
        <Link href={link} >
            <div className="card">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-mainPrimary">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </Link>
    );
}