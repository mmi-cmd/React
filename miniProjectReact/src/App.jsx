import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() { 
    return(
        <div className="App">
            <TwitterFollowCard isFollowing userName="maripe" name= "María Perez" /> 
            <TwitterFollowCard isFollowing={false} userName="midudev" name= "Miguel Ángel Durán" />
            <TwitterFollowCard isFollowing userName="midudev" name= "Miguel Ángel Durán" />
            <TwitterFollowCard isFollowing userName="midudev" name= "Miguel Ángel Durán" />
        </div>
    )
}