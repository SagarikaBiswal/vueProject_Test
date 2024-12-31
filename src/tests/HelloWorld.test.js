import { mount } from "@vue/test-utils"
import HelloWorld from "../components/HelloWorld.vue"

test("mount Component ", () => {
    expect(HelloWorld).toBeTruthy();
    const wrapper = mount(HelloWorld, {
        props: {
            msg : "Hello from Vitest"
        }
    })
     expect(wrapper.text()).toContain("Vitest")
}) 

// test("Button Click", () => {
//     expect(HelloWorld).toBeTruthy();
//     const wrapper = mount(HelloWorld, {
//         props: {
//             msg : "Hello World from Vitest!"
//         }
//     })
//      wrapper.get("button").trigger("click")
//      expect(wrapper.text().toContain("count is: 1"))
// }) 