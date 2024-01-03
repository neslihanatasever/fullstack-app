const IdPage = ({
    params,
}: {
    params: {
        id: string
    }
}) => {
  return (
    <div>
        Id: {params.id}
    </div>
  )
}
//27.00
export default IdPage