class ExtraData {

    constructor() {}

    set(key, value) {
        this[key] = value
    }

    get(key) {
        // console.log("ExtraData get key is:" + key, this)
        return this[key]
    }

    setAll(data) {
        Object.assign(this, data)
    }

    include(key) {
        return this[key] !== undefined
    }
}

const extraData = new ExtraData()
export default extraData