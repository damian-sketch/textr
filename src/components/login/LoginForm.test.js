import {render, cleanup, screen, waitFor} from '@testing-library/react'
import LoginForm from './LoginForm'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import LogoutForm from '../logout/LogoutForm';

//cleanup to prevent memory leaks
afterEach(cleanup)

// verify login page is rendered
it('should verify login button is displayed', () => {
    const { getByTitle } = render(<LoginForm />)

    //make sure Login button contains Login text(this means form is displayed)
    expect(getByTitle('login-button')).toHaveTextContent('Login')
})


// verify user can successfully login
it('should verify that existing user can login successfully', async () => {

        const { getByTitle } = render(<LoginForm />)
        const { getByTestId } = render(<LogoutForm />)
        const inputuser = screen.getByTestId('username');
        const inputpass = screen.getByTestId('password');
        const username = 'aangjul';
        const password = '12341234';

        // login existing user
        userEvent.type(inputuser, username);
        userEvent.type(inputpass, password);
        userEvent.click(getByTitle('login-button'));
        await waitFor (() => expect(getByTestId('logout-btn')).toBeInTheDocument()) // verify logout button is displayed
        
    
})

// verify user cannot login with invalid credentials
it('should verify that a user cannot login with non-existent credentials', async () => {
        const { getByTitle, getByTestId } = render(<LoginForm />)
        const inputuser = screen.getByTestId('username');
        const inputpass = screen.getByTestId('password');
        const username = 'testuser'; // use any invalid username
        const password = 'polo'; // use any invalid password

        // login existing user
        userEvent.type(inputuser, username);
        userEvent.type(inputpass, password);
        userEvent.click(getByTitle('login-button'));
        await waitFor (() => expect(getByTestId('error')).toBeInTheDocument())

})