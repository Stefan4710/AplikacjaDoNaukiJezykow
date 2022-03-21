class StandardMembership {
    constructor (name) {
        this.name = name
        this.cost = 0
    }
}

class PremiumMembership {
    constructor (name) {
        this.name = name
        this.cost = 20
    }
}

class MemberFactory {
    static list = {
        standard: StandardMembership,
        premium: PremiumMembership
    }


    create(name, type = 'standard') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.standard
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}


const factory = new MemberFactory()

const members = [
    factory.create('Stepan', 'premium'),
    factory.create('Vlad', 'premium'),
    factory.create('Viktoria', 'standard'),
    factory.create('Peter')
]

members.forEach(m => {
    m.define()
})


