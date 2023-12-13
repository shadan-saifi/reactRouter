import { useLoaderData } from "react-router-dom"


export default function Github() {
    const data = useLoaderData()


    return (
        <div className="flex justify-around items-center my-6">

            <img src={data.avatar_url} alt="image" className="max-w-[250px] max-h-[250px]" />

            <div className="leading-loose text-lg font-semibold ">
                <h1 className="text-xl font-bold">{data.name}</h1>
                <br />
                <div>Email: {data.email}</div>
                <div>Twitter: {data.twitter_username}</div>
                <div>Bio: {data.bio}</div>
                <div>Followers: {data.followers}</div>
            </div>
        </div>
    )
}

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/shadan-saifi')
    return response.json()
}