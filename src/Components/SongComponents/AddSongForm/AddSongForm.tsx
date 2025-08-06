import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Song } from "../../../mocked_information/Song/song.type";
import { musicService } from "../../../mocked_information/Song/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getNextId } from "../../../mocked_information/Song/db";
import styles from './AddSongForm.module.css';

function AddSongForm() {
    const [mensajeExito, setMensajeExito] = useState('')

  const [formData, setFormData] = useState<Song>({
    id: 0,
    title: '',
    artist: '',
    album: '',
    year: new Date().getFullYear(),
    genre: [],
    duration: 0,
    rating: 0,
    description: '',
    cover: '',
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
        mutationFn: (song:Song) => {
          return musicService.createSong(song)
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] });
          setMensajeExito('Se creo cancion!');
          setFormData({
            id: 0,
            title: '',
            artist: '',
            album: '',
            year: new Date().getFullYear(),
            genre: [],
            duration: 0,
            rating: 0,
            description: '',
            cover: '',
        });
        },
        onError: (error) => {
         
          console.error("Fallo:", error);
        },
      });

  const [genreInput, setGenreInput] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'year' || name === 'duration' || name === 'rating' ? Number(value) : value,
    }));
  }

  function handleGenreAdd() {
    const trimmed = genreInput.trim();
    if (trimmed && !formData.genre.includes(trimmed)) {
      setFormData((prev) => ({
        ...prev,
        genre: [...prev.genre, trimmed],
      }));
      setGenreInput('');
    }
  }

  function handleGenreRemove(genreToRemove: string) {
    setFormData((prev) => ({
      ...prev,
      genre: prev.genre.filter((g) => g !== genreToRemove),
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const id = getNextId();
    const cover = 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
    const newSong: Song = {
    ...formData, id, cover,
    };
    mutation.mutate(newSong)
    console.log(newSong)
    
  }

  return (
        <>
        <form onSubmit={handleSubmit} className={styles.card}>
    <div className={styles.formGroup}>
        <label className={styles.label}>Titulo:</label>
        <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        className={styles.input}
        />
    </div>

    <div className={styles.formGroup}>
        <label className={styles.label}>Artista:</label>
        <input
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        required
        className={styles.input}
        />
    </div>

    <div className={styles.formGroup}>
        <label className={styles.label}>Album:</label>
        <input
        name="album"
        value={formData.album}
        onChange={handleChange}
        required
        className={styles.input}
        />
    </div>

    <div className={styles.formGroup}>
        <label className={styles.label}>Año:</label>
        <input
        name="year"
        type="number"
        value={formData.year}
        onChange={handleChange}
        required
        className={styles.input}
        />
    </div>

    <div className={styles.formGroup}>
        <label className={styles.label}>Duración (segundos):</label>
        <input
        name="duration"
        type="number"
        value={formData.duration}
        onChange={handleChange}
        required
        className={styles.input}
        />
    </div>

    <div className={styles.formGroup}>
        <label className={styles.label}>Rating (0–10):</label>
        <input
        name="rating"
        type="number"
        min="0"
        max="10"
        step="0.1"
        value={formData.rating}
        onChange={handleChange}
        required
        className={styles.input}
        />
    </div>

    <div className={styles.formGroup}>
        <label className={styles.label}>Descripción:</label>
        <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        className={styles.textarea}
        />
    </div>

    <div className={styles.formGroup}>
        <label className={styles.label}>Agregar Genero:</label>
        <div className={styles.addGenreGroup}>
        <input
            type="text"
            value={genreInput}
            onChange={(e) => setGenreInput(e.target.value)}
            className={styles.input}
        />
        <button type="button" onClick={handleGenreAdd} className={styles.button}>
            Agregar
        </button>
        </div>
    </div>

    <ul className={styles.genreList}>
        {formData.genre.map((g) => (
        <li key={g} className={styles.genreItem}>
            {g}{' '}
            <button type="button" onClick={() => handleGenreRemove(g)}>
            x
            </button>
        </li>
        ))}
    </ul>

    <button type="submit" className={styles.button}>Submit</button>
    </form>

    {mensajeExito && (
    <div className={styles.successMessage}>{mensajeExito}</div>
    )}
    </>

  );
}

export default AddSongForm;