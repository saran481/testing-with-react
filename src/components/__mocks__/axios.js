// module.export = {
//     get: jest.fn(() => {
//         Promise.resolve({ data: { result : [ "sample example"]} })
//       })
// }
export default {
    get: jest.fn(() => Promise.resolve({ data: {} }))
  };