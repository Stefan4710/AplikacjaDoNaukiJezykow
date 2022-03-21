class Language1 {
    constructor(data) {
        if(Language1.exists) {
            return Language1.instance
        }
        Language1.instance = this
        Language1.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const english = new Language1('Database with English lessons')
console.log(english.getData())




