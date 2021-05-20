import { useState } from 'react';
import { GenreResponseProps } from '../App'
import { Button } from '../components/Button'

interface Config {
  genres: GenreResponseProps[],
  handleClickButton(id: number): void,
}

export function SideBar({genres, handleClickButton}:Config) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}