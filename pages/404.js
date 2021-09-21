import Layout from "../components/Layout";
import Link from 'next/link'
const custom404 = () => (
    <Layout>
     <div className="text-center">
     <h1>404</h1>
        <p>este lugar no esta Disponibles</p>
        <Link href="/">
            <a>inicio</a>
        </Link>
     </div>
    </Layout>
)

export default custom404