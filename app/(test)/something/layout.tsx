const TextLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return(
        <div className="bg-rose-500">
            {children}
        </div>
    )
}

export default TextLayout