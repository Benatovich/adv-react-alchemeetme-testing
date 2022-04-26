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

it('Should render the user profile', () => {
  render(
    <MemoryRouter>
      <Home user={user} />
    </MemoryRouter>
  );

  const name = screen.getByText('Vonta');
  const motto = screen.getByLabelText('motto');
  const interestsHeading = screen.getByText(/interests/i);
  const avatar = screen.getByAltText(/avatar/i);
  const headerImg = screen.getByAltText(/header/i);
  // const likeList = screen.getByText(/tower/i);
  // console.log('likeList?!', likeList, likeList.textContent);
  screen.getByText(/tower/i);

  expect(name.textContent).toBe('Vonta');
  expect(motto.textContent).toBe('Res Non Verba');
  expect(interestsHeading.textContent).toBe('Interests');
  expect(avatar.alt).toBe('avatar');
  expect(headerImg.alt).toBe('header');
  // expect(likeList).toBe('tower defense');
})
