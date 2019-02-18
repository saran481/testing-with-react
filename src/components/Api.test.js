import mockaxios from 'axios'
import { shallow } from 'enzyme'
import Basic from './Api'

 it('calling fake axios and return some response', async () => {
    //  const spyget=jest.spyOn(axios,'get')
    //  const component= shallow(<Basic />)
    mockaxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data:
         { 
             result: ["sample example"]
            }
         })
          );

    const results = await Basic("sample")
    expect(results).toEqual(['sample example'])      
    expect(mockaxios.get).toHaveBeenCalledTimes(1)

    console.log(results)
      })

