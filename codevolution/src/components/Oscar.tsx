type ChildrenProps = {
    children: React.ReactNode
}

export const Oscar = (props:ChildrenProps) => {
    return <div>{props.children}</div>
}