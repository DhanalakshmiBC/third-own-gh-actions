# **React Unit Testing with Jest and React Testing Library**

## **What is Jest ?**
Jest is a JavaScript testing framework that is used for unit testing, snapshot testing, and coverage reporting. Jest can be used to test React components, and it is also often used with React Native.

## **What is React Testing Library ?**
React Testing Library is a JavaScript testing utility built specifically to test React components. It simulates user interactions on isolated components and asserts their outputs to ensure the UI is behaving correctly.

React Testing Library provides virtual DOMs for testing React components.

Any time we run tests without a web browser, we must have a virtual DOM to render the app, interact with the elements, and observe if the virtual DOM behaves like it should (like changing the width of a div on a button click).


## **How Is a Test Structured?**
Testing involves checking if your code is functioning as it's supposed to by comparing the expected output with the actual output.

## **What to Test?**

- If a component renders with or without props
- How a component renders with state changes
- How a component reacts to user interactions

## **What Not to Test**
Testing most of your code is important, but here are some things you do not need to test:

- **Actual Implementation:** You do not need to test the actual implementation of a functionality. Just test if the component is behaving correctly.

- **Third Party libraries:** If you are using any third party libraries like Material UI, no need to test those – they should already be tried and tested.

**Here are some methods and important points regarding unit testing:**

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

- React Testing Library (RTL) gives developers methods to find elements on the component it rendered for testing, these methods are called queries. There are 3 main types of RTL query types namely get, find and query.

    - **get:**
       - **getBy:** returns the matching node, however will throw an error if multiple matches or no matches are found.
       - **getAllBy:** returns an array of matching nodes if at least one match is found and throws an error if no match is found.
       
      *Tip :* Use these methods if you expect the element / elements to be present upon query.   

    - **query:**
       - **queryBy:** returns the matching node if one match is found and null if no match is found, however will throw an error if multiple matches are found.
       - **queryAllBy:** returns an array of matching nodes if at least one match is found and an empty array if no match is found.
       
      *Tip :* Use these methods if you are looking to confirm presence of an element / elements. Use this to test if element is not there.

    - **find:**
      - **find:** returns a promise that returns the matching node, however will throw an error if multiple matches or no matches are found.
       - **findAllBy:** returns a promise that returns an array of matching nodes if at least one match is found and throws an error if no match is found.
       
      *Tip :* Use these methods if the element / elements being queried might display asynchronously (for example, if your element is expected to only display after an event is fired consider using find as it retries the query after some time).

- **fireEvent.change()** triggers only a change event whereas **userEvent.type** triggers a change event, but also keyDown, keyPress, and keyUp events.           





