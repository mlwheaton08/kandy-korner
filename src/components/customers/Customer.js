import { Link } from "react-router-dom";

export const Customer = ({id, name, email}) => {
    return <section className="customer">
        <div>
            <Link to={`/customers/${id}`}>{name}</Link>
        </div>
        <div>Email: {email}</div>
    </section>
}