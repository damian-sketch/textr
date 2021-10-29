import {render, cleanup, screen, waitFor} from '@testing-library/react'
import LoginForm from '../login/LoginForm'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import LogoutForm from './LogoutForm';

//cleanup to prevent memory leaks
afterEach(cleanup)

// verify a logged in user can be logged out
it('should verify that a logged in user can be logged out', async () => {

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

    // logout the user
    userEvent.click(getByTestId('logout-btn'))
    await waitFor (() => expect(getByTitle('login-button')).toBeInTheDocument()) // verify login button is displayed
    

})