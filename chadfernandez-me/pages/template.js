import LayoutGlobal from "../components/LayoutGlobal";

function Index(){
  return(
    <>

    </>
  )
}

Index.getLayout = function getLayout(page){
  return(
    <LayoutGlobal>
      {page}
    </LayoutGlobal>
  )
}

export default Index 