import { Link } from "react-router-dom";

export const Employee = ({id, name, email}) => {
    return <section className="employee">
        <div>
            <Link to={`/employees/${id}`}>{name}</Link>
        </div>
        <div>Email: {email}</div>
    </section>
}