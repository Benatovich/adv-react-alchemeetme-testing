import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// tests for Profile
// test for name, motto, interests heading, avatar, header image, list of user likes
// STRETCH: write tests to check that 'user' object has id, name, avatar, header, likes, motto, color

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

it('Should render the user profile, checking the user name', () => {
  render(
    <MemoryRouter>
      <Home user={user} />
    </MemoryRouter>
  );

  const name = screen.getByText('Vonta');

  expect(name.textContent).toBe('Vonta');
})
