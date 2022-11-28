type PropsChildren = {
    children: string
}

export const Heading = (props:PropsChildren) => {
    return <h2>{props.children}</h2>
}