import Link from "next/link"



const Admin = () => {


    return (
        <div className="admin-page">
            <div className="admin-basic">
                <div className="basic-cta">
                    <Link href="/MyAnalytics"><button>See Analytics</button></Link>
                </div>
            </div>
        </div>
    )
};


export default Admin;