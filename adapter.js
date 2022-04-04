class OldDictionarys {

    translate(language) {
        switch(language) {
            case 'eng': return 'English Dictionary'
            case 'fr': return 'French Dictionary'
            case 'pl': return 'Polish Dictionary'
            default: return "we don't have such a dictionary yet"
        }
    }
}

class NewDictionarys {
    pl() {
        return 'Polish Dictionary'
    }
    eng() {
        return 'English Dictionary'
    }
    fr() {
        return 'French Dictionary'
    }
}


class LangAdapter {
    constructor() {     
        this.lang = new NewDictionarys()
    }

    translate(language) {
        switch(language) {
            case 'eng': return this.lang.eng()
            case 'fr': return this.lang.fr()
            case 'pl': return this.lang.pl()
            default: return undefined
        }
    }
}

const oldCalc = new OldDictionarys()
console.log(oldCalc.translate('eng'))

const newCalc = new NewDictionarys()
console.log(newCalc.fr())

const adapter = new LangAdapter()
console.log(adapter.translate('eng'))