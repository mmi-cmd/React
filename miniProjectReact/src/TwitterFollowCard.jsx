export function TwitterFollowCard({ userName, name, isFollowing }) { //se añade export para poder importar el componente en otro archivo
    console.log(isFollowing)
    
    return(

        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={'https://unavatar.io/${userName}'} //se añade el nombre de usuario a la ruta de la imagen, se evalua entre llaves para que se ejecute el código javascript
                alt="avatar" />
            
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-userName">@{userName}</span>
            </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    seguir
                </button>
            </aside>

        </article>
    )
}