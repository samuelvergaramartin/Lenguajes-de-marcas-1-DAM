const nameChecker = (value) => {
    if(!value || value == null || value == undefined || value == " " || value == "") return 400;
    const apellido_1 = value.split(" ")[1];
    if(!apellido_1) return 400;
    return 200;
}

export { nameChecker };