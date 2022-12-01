const example = (anyType: any, unknowType: unknown) => {
    anyType()

    if(typeof unknowType === 'function'){
        unknowType()
    }
}