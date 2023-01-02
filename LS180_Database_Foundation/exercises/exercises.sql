createdb animals

CREATE DATABASE animals;

INSERT INTO birds (name, age, species)
             VALUES ('Charlie', 3, 'Finch'),
	            ('Allie', 5, 'Owl'),
		    ('Jennifer', 3, 'Magpie'),
		    ('Jamie', 4, 'Owl'),
		    ('Roy', 8, 'Crow');

SELECT * FROM birds WHERE age < 5;

UPDATE birds SET species = 'Raven' WHERE species='Crow';

DROP TABLE birds;
DROP TABLE IF EXISTS birds; 

CREATE TABLE stars (
	id serial PRIMARY KEY,
	name varchar(25) UNIQUE NON NULL,
	distance integer NON NULL CHECK (distance > 0),
	spectral_type char(1),
	companions integer NON NULL CHECK (companions >= 0)
);

CREATE TABLE planets (
	id serial PRIMARY KEY,
	designation char(1) UNIQUE,
	mass integer
);

ALTER TABLE planets
ADD COLUMN star_id integer NOT NULL REFERENCES stars (id);

ALTER TABLE stars
ALTER COLUMN name TYPE varchar(50);

ALTER TABLE stars
ALTER distance TYPE numeric;

ALTER TABLE stars
ADD CONSTRAINT specific_letters CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
ALTER COLUMN spectral_type SET NOT NULL;

CREATE TYPE spectral_type_enum AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');

ALTER TABLE stars
ALTER COLUMN spectral_type TYPE spectral_type_enum
                           USING spectral_type::spectral_type_enum;

ALTER TABLE planets
ALTER mass TYPE numeric, 
ALTER mass SET NOT NULL,
ADD CHECK (mass > 0);

ALTER TABLE planets
ADD COLUMN semi_major_axis numeric NOT NULL;

CREATE TABLE moons (
	id serial PRIMARY KEY,
	designation integer NOT NULL CHECK (designation > 0),
	semi_major_axis numeric CHECK (semi_major_axis > 0.0),
	mass numeric CHECK (mass > 0.0),
	planet_id integer NOT NULL REFERENCES planets (id)
);

CREATE TABLE parts (
	id serial PRIMARY KEY,
	part_number integer UNIQUE NOT NULL,
	device_id integer REFERENCES devices(id)
);

SELECT devices.name, parts.part_number 
FROM devices JOIN parts
ON devices.id = parts.device_id;

SELECT * FROM parts WHERE part_number::text LIKE '3%';

SELECT devices.name, COUNT(parts.device_id) FROM devices
LEFT JOIN parts ON devices.id = parts.device_id GROUP BY devices.name;

