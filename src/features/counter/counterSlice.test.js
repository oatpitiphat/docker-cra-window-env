const counterSlice = require("./counterSlice")
// @ponicode
describe("counterSlice.incrementAsync", () => {
    test("0", () => {
        let callFunction = () => {
            counterSlice.incrementAsync(170.04)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            counterSlice.incrementAsync(354.91)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            counterSlice.incrementAsync(800.39)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            counterSlice.incrementAsync(467.94)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            counterSlice.incrementAsync(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            counterSlice.incrementAsync(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
