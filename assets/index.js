class Mesaj {
    constructor(author,text){
    this.author = author
    this.text = text
    }
    date = new Date()
     toString(){
        return `${this.date.getHours()}:${this.date.getMinutes()} ${this.author} ${this.text}` 
    }
}
    
class Sohbet {
    constructor(){
        this.allmessages = []
    }
    
    send(author, text) {
        const mesaj = new Mesaj(author,text)
        this.allmessages.push(mesaj.toString())
    }
    show_history(){
        this.allmessages.forEach((item)=>{
            console.log(item)
        })
    }
   

}

let sohbet = new Sohbet()
sohbet.send('Amid', 'ilk mesaj')
sohbet.send('Sevinc', 'İkinci mesaj')
sohbet.show_history()