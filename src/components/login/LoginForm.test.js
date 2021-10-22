import {render, cleanup} from '@testing-library/react'
import LoginForm from './LoginForm'
import '@testing-library/jest-dom'

//cleanup to prevent memory leaks
afterEach(cleanup)

// test case
it('should verify login button is displayed', () => {
    const { getByTitle } = render(<LoginForm />)

    //make sure Login button contains Login text(this means form is displayed)
    expect(getByTitle('login-button')).toHaveTextContent('Login')
})
