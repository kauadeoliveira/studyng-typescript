type GreetProps = {
    name: string,
    list: []
}

export const Greet = (props: GreetProps) => {
    const { name = 'Kauã' } = props
    return(
        <div>
            <h2>Welcome {name}!</h2>
            {props.list.map(letter => {
                return(
                    <li>{letter}</li>
                )
            })}
        </div>
    )
}