const gmailChecker = (gmail) => {
    if(!gmail || gmail == null || gmail == undefined || gmail == " " || gmail == "") return 400;
    if(!gmail.includes("@") || !gmail.includes("mail.")) {
        if(!gmail.includes("@")) return 400;
        if(gmail.includes("@g.")) return 200;
    }
    return 200;
}

export { gmailChecker };