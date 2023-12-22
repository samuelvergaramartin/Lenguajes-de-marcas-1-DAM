const dniChecker = (DNI) => {
    if(!DNI || DNI == null || DNI == undefined || DNI == " " || DNI == "") return 400;
    if(!DNI.startsWith("1") && !DNI.startsWith("2") && !DNI.startsWith("3") && !DNI.startsWith("4")
     && !DNI.startsWith("5") && !DNI.startsWith("6") && !DNI.startsWith("7") && !DNI.startsWith("8") && 
    !DNI.startsWith("9") && !DNI.startsWith("0")) return 400;
    if(DNI.length != 8) return 400;
    if(DNI.endsWith("1") || DNI.endsWith("2") || DNI.endsWith("3") || DNI.endsWith("4")
     || DNI.endsWith("5") || DNI.endsWith("6") || DNI.endsWith("7") || DNI.endsWith("8") || 
    DNI.endsWith("9") || DNI.endsWith("0")) return 400;
    return 200;
}

export { dniChecker };