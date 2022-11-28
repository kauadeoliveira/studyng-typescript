type GreetProps = {
    name: string,
    list: []
}

export const Greet = (props: GreetProps) => {
    return(
        <div>
            <h2>Welcome {props.name}!</h2>
            {props.list.map(letter => {
                return(
                    <li>{letter}</li>
                )
            })}
        </div>
    )
}