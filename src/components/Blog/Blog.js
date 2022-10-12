import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto m-10 p-10">
                <h2 className='text-2xl'>What is purpose of react router?</h2>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    To implement Routing in React project. We need to install react router in the project directory. Then we need to import browser router . next set the path and element  to navigate one page to another . using router we can make single page site.
                </p>
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto m-10 p-10">
                <h2 className='text-2xl'>How does context API work?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    But how does context API work? React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl mx-auto m-10 p-10">
                <h2 className='text-2xl'>What is the useEffect hook? Describe it.</h2>
                <p>UseEffect is one of the important hook in react js. Hooks are special functions that enable the use of state and several other features in functional components available in class-based components.
                    The useEffect hook can be used to perform operations (or side effects) on the following occasions in functional components:- when a component is rendered , when a component changes, before a component is unmounted/removed
                    The operations performed through the useEffect hook can include requesting data from the server, changing the DOM, etc. We can also use multiple useEffect hooks to divide the logic of the code. </p>
            </div>
        </div>
    );
};

export default Blog;