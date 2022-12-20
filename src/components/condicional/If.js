export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]
    const ifChildrem = props.children.filter(child =>{
        return child !== elseChild;
    })
    console.log(elseChild)

    if(props.test){
        return ifChildrem;
    }else if(elseChild){
        return elseChild;
    }else{
        return false;
    }
}

export  const Else = props => props.children