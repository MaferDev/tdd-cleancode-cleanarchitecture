import { UrlLogin } from "../protocols/protocols-http"

describe("Protocol Http and Query", () => {
    it("url login", () => {
        const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login')

        expect(parseUrl.href).toBe('http://localhost:3000/login')
        expect(parseUrl.port).toBe("3000")
    })
    it("response query", () => {
        const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
        const expectAuth = {
            user: "user",
            password: "password"
        }
        expect(parseUrl.query).toEqual(expectAuth)
    })
    it("url user", () => {
        const parseUrl = UrlLogin.parseUrl('http://localhost:3000/user')

        expect(parseUrl.href).toBe('http://localhost:3000/user')
        expect(parseUrl.port).toBe("3000")
    })
    it("user: response query", () => {
        const parseUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
        const expectAuth = {
            user: "user",
            password: "password",
            name: "name",
            lastname: "lastname"
        }
        expect(parseUrl.query).toEqual(expectAuth)
    })
})