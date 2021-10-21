import {render, cleanup} from '@testing-library/react'
import LoginForm from './LoginForm'
import '@testing-library/jest-dom'

//cleanup to prevent memory leaks
afterEach(cleanup)

// test case
it('should verify login button is displayed', () => {
    const { getByTestId } = render(<LoginForm />)

    //make sure Login button containd Login text(this means form is displayed)
    expect(getByTestId('login-button')).toHaveTextContent('Login')
})
