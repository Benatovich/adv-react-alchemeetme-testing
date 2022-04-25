import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import App from './App';

// tests for Header
// test for header image, profile name, and background color (stretch)


const user = {
    id: 1,
    created_at: '2021-12-13T00:17:29+00:00',
    name: 'Vonta',
    avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
    header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
    likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
    motto: 'Res Non Verba',
    color: 'crimson',
  }

describe('First test', () => {
    it('Should render the header', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const img = screen.getByAltText('Alchemy Logo');

        expect(img.src).toEqual('http://localhost/meet.png');
    });

});
