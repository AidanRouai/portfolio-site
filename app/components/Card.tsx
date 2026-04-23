export default function Card( {title, description}: {title: string, description: string}) {
    return (
        <div className="card">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>

)
}