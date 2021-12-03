const sayHelloWorld = require('./sayHelloWorld')

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello()
        expect(response).toBe('Hello World')
    })
    it('Should say Hello Fernando',() => {
        const response = sayHelloWorld.sayHello('Fernando')
        expect(response).toBe('Hello Fernando')
    })
})