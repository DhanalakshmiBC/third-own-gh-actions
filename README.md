# **React Unit Testing with Jest and React testing Library**


- **jest.mock() -** Jest.Mock works best when wanting to mock entire files: which contain named or default exports or specific named or default exports of a file for the entire duration of the test.

    Use jest.mock before render.

- **jest.spyOn -** Jest.SpyOn works best when you want to conditionally mock an exported method or named function within your test suite.

    ``` jest.spyOn(moduleName, “methodName”); ```

    Mock can be restored to original fn using .mockRestore which is only available with spyOn

 -  **jest.fn() -** simple way to mock a function

 -  **.mockImplementation() -** It is used to mock function to implement the custom functionality

    ```
    const addMock = jest.spyOn(math, "add");

    // override the implementation
    addMock.mockImplementation(() => "mock");  
    ```  

- **waitFor -** waitFor is an API provided by React testing library to wait for the wrapped assertions to pass within a certain timeout window.
    ``` 
    await waitFor(() => {
    expect(getByText("David")).toBeInTheDocument();
    });
    ```

- **act -** When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction with a user interface. react-dom/test-utils provides a helper called act() that makes sure all updates related to these “units” have been processed and applied to the DOM before you make any assertions.

    ```
        act(() => {
        // render components
            });
        // make assertions
    ```

- **@testing-library/jest-dom -** 
The @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

- **How to query input fields and buttons ?** 

    ```
     <input placeholder='Enter name'/>
     <button> Submit </button> 
    ```

   To query these elements we can use:
    ```
    const inputElement = screen.getByRole('textbox')
    ```
    **getByRole** finds an element by the given role. 
    
    You can see a list of roles for different elements [here](https://www.w3.org/TR/html-aria/#docconformance).


    For multiple element of same role we can use *getByPlaceholderText*:
    ```
    const nameInput = screen.getByPlaceholderText(/enter name/i);
    ```
    We can also use *getByLabelText()* if your input has a label.
    ```
    <label htmlFor='password'> Enter password</label>
    <input type='password' id='password'/>
    ```
    ```
    const passwordInput = screen.getByLabelText(/enter password/i);
    ````

    For multiple buttons we can use *getByRole* with name or other attribute otherwise it will throw error.

    ```
    <button> Submit </button>
    <button> Apply</button>
    ```

    ```
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    const applyButton = screen.getByRole('button', { name: /apply/i });
    ```




