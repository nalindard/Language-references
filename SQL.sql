USE record_company;

SELECT name FROM songs;

SELECT bands.name AS 'Band Name' FROM bands;

SELECT * FROM albums
WHERE release_year IS NOT NULL
ORDER BY release_year
LIMIT 1;

SELECT albums.name AS 'Album Name' FROM albums
JOIN bands ON albums.band_id = bands.id;

SELECT bands.name AS 'Band Name' FROM bands
JOIN albums ON bands.id = albums.band_id;

SELECT DISTINCT bands.name AS 'Band Name' FROM bands
JOIN albums ON bands.id = albums.band_id;

SELECT bands.name AS 'Band Name'
FROM bands
LEFT JOIN albums ON bands.id = albums.band_id
GROUP BY albums.band_id
HAVING COUNT(albums.id) = 0;

SELECT bands.name AS 'Band Name'
FROM bands
LEFT JOIN albums ON bands.id = albums.band_id
GROUP BY bands.name
HAVING COUNT(albums.id) = 0;

SELECT albums.name AS 'Album Name', albums.release_year AS 'Release Year', COUNT(songs.length) AS 'Duration'
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id
GROUP BY songs.album_id
ORDER BY Duration DESC
LIMIT 1;


SELECT albums.id, albums.name AS 'Album Name', release_year AS 'Release Year'
FROM albums
WHERE release_year IS NULL;

UPDATE albums
SET release_year = 1986
WHERE release_year IS NULL AND albums.id = 4;

SELECT * FROM albums;


INSERT INTO bands (name)
VALUES('Edge Runners');

SELECT id FROM bands
ORDER BY id DESC LIMIT 1;

INSERT INTO albums (name, release_year, band_id)
VALUES('Beyond The Horizon', 2077, 8);

SELECT name, release_year, id FROM albums
WHERE band_id = 8;

DELETE FROM albums
WHERE id = 19;

SELECT * FROM albums;

DELETE FROM bands
WHERE id = 8;

SELECT * FROM bands;

SELECT AVG(songs.length)  AS 'Avarage Song Duration' FROM songs;

SELECT albums.name AS 'Album', albums.release_year AS 'Release Year', MAX(songs.length) AS 'Duration' FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.name;

SELECT albums.name AS 'Album', albums.release_year AS 'Release Year', MAX(songs.length) AS 'Duration' FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.name
ORDER BY MAX(songs.length) DESC;

SELECT
  albums.name AS 'Album',
  albums.release_year AS 'Release Year',
  MAX(songs.length) AS 'Duration'
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY songs.album_id;


SELECT bands.name AS 'Band', COUNT(albums.id) AS 'Number of albums' FROM bands
LEFT JOIN albums ON bands.id = albums.band_id
GROUP BY albums.band_id;

SELECT bands.name AS 'Band', COUNT(songs.id) AS 'Number of songs'
	FROM bands
JOIN albums ON bands.id = albums.band_id
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.band_id;

SELECT bands.name AS 'Band', COUNT(songs.id) AS 'Number of songs'
	FROM bands
JOIN albums ON bands.id = albums.band_id
JOIN songs ON albums.id = songs.album_id
GROUP BY albums.band_id
ORDER BY COUNT(songs.id);