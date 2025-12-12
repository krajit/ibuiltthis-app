export default async function User({params}: { params: Promise<{ user: string }>}) {
    const { user } = await params;
    return (
        <div>
            <h1>
                User {user}
            </h1>
        </div>

    );
}