CREATE TABLE countries (
    id serial,
    name varchar(50) UNIQUE NOT NULL,
    capital varchar(50) NOT NULL,
    population integer
);

CREATE TABLE famous_people (
    id serial,
    name varchar(100) NOT NULL,
    occupation varchar(150),
    date_of_birth varchar(50),
    deceased boolean DEFAULT false
);

CREATE TABLE animals (
    id serial,
    name varchar(100) NOT NULL,
    binomial_name varchar(100) NOT NULL,
    max_weight_kg decimal(8, 3),
    max_age_years integer,
    conservation_status char(2)
);

ALTER TABLE users RENAME TO all_users;

ALTER TABLE all_users RENAME COLUMN username TO full_name;

ALTER TABLE all_users ALTER COLUMN full_name TYPE varchar(25);

ALTER TABLE all_users ALTER COLUMN full_name SET NOT NULL;

ALTER TABLE table_name DROP CONSTRAINT constraint_name;

ALTER TABLE all_users ALTER COLUMN id DROP DEFAULT;

ALTER TABLE all_users
     ADD COLUMN last_login timestamp
                NOT NULL
                DEFAULT NOW();

ALTER TABLE all_users DROP COLUMN enabled;

ALTER TABLE celebrities
     ALTER COLUMN date_of_birth TYPE date
         USING date_of_birth::date,
     ALTER COLUMN date_of_birth SET NOT NULL;

ALTER TABLE animals
   ADD CONSTRAINT unique_binomial_name UNIQUE (binomial_name);

ALTER TABLE users ADD CHECK (full_name <> '');

SELECT * FROM users;

INSERT INTO users (full_name, enabled)
  VALUES ('John Smith', false);

INSERT INTO users (full_name)
  VALUES ('Jane Smith'), ('Harry Potter');

INSERT INTO countries (name, capital, population)
             VALUES ('USA', 'Washington D.C.', 325365189),
                    ('Germany', 'Berlin', 82349400),
                    ('Japan', 'Tokyo', 126672000);

INSERT INTO celebrities (first_name, last_name, occupation, date_of_birth, deceased)
                 VALUES ('Madonna', NULL, 'Singer, Actress', '1958-08-16', false),
                        ('Prince', NULL, 'Singer, Songwriter, Musician', '1958-06-07', true);

ALTER TABLE animals
  DROP CONSTRAINT unique_binomial_name;

SELECT column_name,...
  FROM table_name
  WHERE condition;

SELECT first_name, occupation FROM celebrities
ORDER BY first_name DESC, occupation DESC;

SELECT * FROM celebrities
  WHERE first_name = 'Elvis'
     OR occupation = 'Actor';

SELECT * FROM celebrities WHERE occupation LIKE '%Singer%';

SELECT population FROM countries WHERE name = 'USA';

SELECT name FROM countries
encyclopedia-# WHERE population > 70000000;

SELECT name FROM countries
WHERE population > 70000000
encyclopedia-# AND population < 200000000;

SELECT first_name, last_name
FROM celebrities
WHERE (occupation LIKE '%Actor%' OR occupation LIKE '%Actress%')
AND occupation LIKE '%Singer%';

SELECT * FROM orders LIMIT 2;

SELECT * FROM orders LIMIT 2 OFFSET 1;

SELECT DISTINCT full_name FROM users;

SELECT count(full_name) FROM users;
SELECT count(DISTINCT full_name) FROM users;
SELECT avg(id) FROM users;
SELECT full_name, date_part('year', last_login) FROM users;

SELECT count(id) FROM users WHERE enabled = true;
SELECT enabled, count(id) FROM users GROUP BY enabled;

/* Display the country with max population */
SELECT name from countries
ORDER BY population DESC
LIMIT 1;

/* Country with second largest population */
SELECT name from countries
ORDER BY population DESC
LIMIT 1 OFFSET 1;

SELECT DISTINCT binomial_name FROM animals;
SELECT distinct(binomial_name) FROM animals;

SELECT binomial_name FROM animals
encyclopedia-# ORDER by length(binomial_name) DESC LIMIT 1;

SELECT first_name FROM celebrities
encyclopedia-# WHERE date_part('year', date_of_birth) = 1958;


SELECT DISTINCT conservation_status FROM animals;

SELECT conservation_status, count(conservation_status) FROM animals GROUP BY conservation_status;

/* Change all values from the 'anbled' column to false */
UPDATE users SET enabled = false;

UPDATE animals
SET phylum = 'Chordata', kingdom = 'Animalia';

UPDATE users SET enabled = true
 WHERE full_name = 'Harry Potter'
    OR full_name = 'Jane Smith';

UPDATE users SET full_name='Alice Walker' WHERE id=2;

DELETE FROM users WHERE full_name='Harry Potter' AND id > 3;

/* Delete all rows */
DELETE FROM users;

SELECT * FROM singers
WHERE occupation
NOT LIKE '%Singer%';

DELETE FROM singers
WHERE occupation
NOT LIKE '%Singer%';

ALTER TABLE users ADD PRIMARY KEY (id);

/* one-to-one: User has one address */

CREATE TABLE addresses (
	user_id int, -- Both primary and foreign key
	street varchar(30) NOT NULL,
	city varchar(30) NOT NULL,
	state varchar(30) NOT NULL,
	PRIMARY KEY (user_id),
	FOREIGN KEY (user_id)
	    REFERENCES users (id)
	    ON DELETE CASCADE
);

INSERT INTO addresses (user_id, street, city, state)
               VALUES (1, '1 Market Street', 'San Francisco', 'CA'),
	              (2, '2 Elm Street', 'San Francisco', 'CA'),
		      (3, '3 Main Street', 'Boston', 'MA');

CREATE TABLE books (
	id serial,
	title varchar(100) NOT NULL,
	author varchar(100) NOT NULL,
	published_date timestamp NOT NULL,
	isbn char(12),
	UNIQUE (isbn)
);

/* one-to-many: Book has many reviews */

CREATE TABLE reviews (
	id serial,
	book_id integer NOT NULL,
	reviewer_name varchar(255),
	content varchar(255),
	rating integer,
	published_date timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id),
	FOREIGN KEY (book_id)
	    REFERENCES books(id)
	    ON DELETE CASCADE
);

/* Many-to-many relationships */
CREATE TABLE checkouts (
	id serial,
	user_id int NOT NULL,
	book_id int NOT NULL,
	checkout_date timestamp,
	return_date timestamp,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id)
			      ON DELETE CASCADE,
	FOREIGN KEY (book_id) REFERENCES books(id)
			      ON DELETE CASCADE
);

INSERT INTO checkouts
  (id, user_id, book_id, checkout_date, return_date)
  VALUES
    (1, 1, 1, '2017-10-15 14:43:18.095143-07',
              NULL),
    (2, 1, 2, '2017-10-05 16:22:44.593188-07',
              '2017-10-13 13:0:12.673382-05'),
    (3, 2, 2, '2017-10-15 11:11:24.994973-07',
              '2017-10-22 17:47:10.407569-07'),
    (4, 5, 3, '2017-10-15 09:27:07.215217-07',
              NULL);


CREATE TABLE continents (
	id serial PRIMARY KEY,
	continent_name varchar(50)
);

CREATE TABLE albums (
	id serial PRIMARY KEY,
	album_name varchar(100),
	release date,
	genre varchar(100),
	label varchar(100),
	singer_id int,
	FOREIGN KEY (singer_id) REFERENCES singers(id)
);

CREATE TABLE email_addresses (
	customer_id integer PRIMARY KEY,
	customer_email varchar(50),
	FOREIGN KEY (customer_id)
	REFERENCES customers (id)
	ON DELETE CASCADE
);

CREATE TABLE products (
	id serial PRIMARY KEY,
	product_name varchar(50),
	product_cost numeric(4,2) DEFAULT 0,
	product_type varchar(20),
	product_loyalty_points integer
);

CREATE TABLE orders(
	id serial PRIMARY KEY,
	customer_id integer,
	order_status varchar(20),
	FOREIGN KEY (customer_id)
	REFERENCES customers (id)
	ON DELETE CASCADE
);

CREATE TABLE order_items (
	id serial PRIMARY KEY,
	order_id integer NOT NULL,
	product_id integer NOT NULL,
	FOREIGN KEY (order_id)
	REFERENCES orders (id)
	ON DELETE CASCADE,
	FOREIGN KEY (product_id)
	REFERENCES products(id)
	ON DELETE CASCADE
);

ALTER TABLE birds ADD CONSTRAINT check_age CHECK (age > 0);
ALTER TABLE birds ADD CHECK (age > 0);


DROP TABLE birds;
DROP TABLE IF EXISTS birds;

DROP TABLE birds, reptiles;

SELECT colors.color, shapes.shape
	FROM colors
	JOIN shapes
		ON colors.id = shapes.color_id;

SELECT countries.name, continents.continent_name
FROM countries JOIN continents
ON countries.continent_id = continents.id;

SELECT countries.name, countries.capital
FROM countries JOIN continents
ON countries.continent_id = continents.id
WHERE continents.continent_name = 'Europe';

SELECT singers.first_name, singers.last_name, albums.album_name, albums.released
FROM singers JOIN albums
ON singers.id = albums.singer_id
WHERE singers.deceased = false
AND albums.released >= '1980-01-01'
AND albums.released < '1990-01-01'
ORDER BY singers.date_of_birth DESC;

SELECT singers.first_name, singers.last_name
FROM singers LEFT JOIN albums
ON singers.id = albums.singer_id
WHERE albums.id IS NULL;

/* Same with subquery */
SELECT singers.first_name, singers.last_name FROM singers
	WHERE singers.id NOT IN (
		SELECT albums.singer_id FROM albums
	);

SELECT orders.*, products.* FROM orders
JOIN order_items
ON orders.id = order_items.order_id
JOIN products
ON order_items.product_id = products.id;

SELECT DISTINCT o.id FROM orders AS o
JOIN order_items AS oi
ON o.id = oi.order_id
JOIN products AS p
ON oi.product_id = p.id
WHERE p.product_name = 'Fries';

SELECT DISTINCT c.customer_name AS "Customers who like Fries." FROM orders AS o
JOIN order_items AS oi
ON o.id = oi.order_id
JOIN products AS p
ON oi.product_id = p.id
JOIN customers AS c
ON o.customer_id = c.id
WHERE p.product_name = 'Fries';

SELECT DISTINCT p.product_name, COUNT(oi.id)
FROM products AS p JOIN order_items AS oi
ON p.id = oi.product_id
GROUP BY p.product_name
ORDER BY p.product_name ASC;

SELECT round(avg(wingspan), 1), min(wingspan), max(wingspan) FROM birds;

SELECT item, (menu_price - ingredient_cost) AS profit FROM menu_items
ORDER BY profit DESC LIMIT 1;

SELECT title, EXTRACT(YEAR FROM CURRENT_DATE) - year AS age FROM films
ORDER BY age ASC;

SELECT title, duration FROM films
WHERE duration > 120
ORDER BY duration DESC;

SELECT title, duration FROM films
ORDER BY duration DESC LIMIT 1;

SELECT state, count(state) AS state_count FROM people
GROUP BY state
ORDER BY state_count DESC
LIMIT 10;

SELECT substr(email, strpos(email, '@') + 1) AS domain, count(email) AS email_count
FROM people
GROUP BY domain
ORDER BY email_count DESC;

DELETE FROM people
WHERE id = 3399;

DELETE FROM people
WHERE state = 'CA';

UPDATE people SET given_name = UPPER(given_name)
WHERE SUBSTR(email, STRPOS(email, '@') + 1) = 'teleworm.us';

UPDATE people SET given_name = UPPER(given_name) WHERE email LIKE '%teleworm.us';

ALTER TABLE temperatures ALTER COLUMN rainfall SET DEFAULT 0;

UPDATE temperatures
   SET rainfall = (low + high)/2 - 35
 WHERE (low + high) / 2 > 35;

ALTER TABLE temperatures ALTER COLUMN rainfall TYPE numeric(6, 3);
UPDATE temperatures SET rainfall = rainfall * 0.039;

ALTER TABLE temperatures RENAME TO weather;

psql -d films < films2.sql

ALTER TABLE films ADD CONSTRAINT unique_title UNIQUE (title);

ALTER TABLE films DROP CONSTRAINT unique_title;
ALTER TABLE films ADD CONSTRAINT one_char_or_more CHECK (length(title) >= 1);
ALTER TABLE films ADD CONSTRAINT correct_date CHECK (year BETWEEN 1900 AND 2100);

ALTER TABLE films ADD CONSTRAINT length_director
CHECK (length(director) >= 3 AND strpos(director, ' ') > 0);

UPDATE colors SET id = nextval('colors_id_seq') WHERE name = 'orange';

CREATE SEQUENCE counter;
SELECT nextval('counter');
DROP SEQUENCE counter;

CREATE SEQUENCE even_counter INCREMENT BY 2 MINVALUE 2;

ALTER TABLE films ADD COLUMN id serial PRIMARY KEY;
ALTER TABLE films DROP CONSTRAINT films_pkey;

SELECT genre FROM films GROUP BY genre;
SELECT DISTINCT genre FROM films;

SELECT round(avg(duration), 0) FROM films;

SELECT genre, round(avg(duration), 0) FROM films
GROUP BY genre;

SELECT year / 10 * 10 AS decade, round(avg(duration),0) AS average_duration
FROM films GROUP BY decade ORDER BY decade;

SELECT title FROM films WHERE director LIKE 'John%';

SELECT genre, count(id) AS id_count FROM films GROUP BY genre ORDER BY id_count DESC;

SELECT year / 10 * 10 AS DECADE, genre, string_agg(title, ', ') AS films FROM films GROUP BY decade, genre ORDER BY decade, genre;

SELECT genre, sum(duration) AS total_duration FROM films GROUP BY genre ORDER BY total_duration, genre ASC;

SELECT ROUND(COUNT(DISTINCT tickets.customer_id) / COUNT(DISTINCT customers.id)::decimal * 100, 2) AS percent
  FROM customers
  LEFT OUTER JOIN tickets
    ON tickets.customer_id = customers.id;

SELECT DISTINCT events.name, COUNT(tickets.id) AS popularity
  FROM events
  LEFT OUTER JOIN tickets
    ON tickets.event_id = events.id 
 GROUP BY events.name
 ORDER BY popularity DESC;

SELECT customers.id, customers.email, COUNT(DISTINCT tickets.event_id)
FROM customers
INNER JOIN tickets ON tickets.customer_id = customers.id
GROUP BY customers.id
HAVING COUNT(DISTINCT tickets.event_id) = 3;

SELECT events.name AS event, events.starts_at, sections.name, seats.row, seats.number AS seat
FROM tickets
INNER JOIN events ON tickets.event_id = events.id
INNER JOIN customers ON tickets.customer_id = customers.id
INNER JOIN seats ON tickets.seat_id = seats.id
INNER JOIN sections ON seats.section_id = sections.id
WHERE customers.id = 'gennaro.rath@mcdermott.co';

ALTER TABLE orders ADD CONSTRAINT orders_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);

INSERT INTO calls ("when", duration, contact_id) VALUES ('2016-01-18 14:47:00', 632, 6);

SELECT calls.when, calls.duration, contacts.first_name
FROM calls INNER JOIN contacts ON calls.contact_id = contacts.id
WHERE (contacts.first_name || ' ' || contacts.last_name) != 'William Swift';

ALTER TABLE contacts ADD CONSTRAINT unique_number UNIQUE (number);

ALTER TABLE directors ADD CONSTRAINT valid_name
CHECK (length(name) >= 1 AND position(' ' in name) > 0);
ALTER TABLE

ALTER TABLE books_categories
  ALTER COLUMN book_id SET NOT NULL;

ALTER TABLE books_categories
  ALTER COLUMN category_id SET NOT NULL;

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_book_id_fkey",
  ADD CONSTRAINT "books_categories_book_id_fkey"
  FOREIGN KEY ("book_id")
  REFERENCES books(id)
  ON DELETE CASCADE;

ALTER TABLE books_categories
  DROP CONSTRAINT "books_categories_category_id_fkey",
  ADD CONSTRAINT "books_categories_category_id_fkey"
  FOREIGN KEY ("category_id")
  REFERENCES categories(id)
  ON DELETE CASCADE;

SELECT books.id, books.author, string_agg(categories.name, ', ') AS categories
FROM books
  INNER JOIN books_categories ON books.id = books_categories.book_id
  INNER JOIN categories ON categories.id = books_categories.category_id
GROUP BY books.id ORDER BY books.id;

ALTER TABLE books_categories ADD UNIQUE (book_id, category_id);

CREATE TABLE directors_films (
	id serial PRIMARY KEY,
	director_id integer REFERENCES directors (id),
	film_id integer REFERENCES films (id)
);

INSERT INTO films_directors (film_id, director_id) VALUES (1, 1);
INSERT INTO films_directors (film_id, director_id) VALUES (2, 2);
INSERT INTO films_directors (film_id, director_id) VALUES (3, 3);
INSERT INTO films_directors (film_id, director_id) VALUES (4, 4);
INSERT INTO films_directors (film_id, director_id) VALUES (5, 5);
INSERT INTO films_directors (film_id, director_id) VALUES (6, 6);
INSERT INTO films_directors (film_id, director_id) VALUES (7, 3);
INSERT INTO films_directors (film_id, director_id) VALUES (8, 7);
INSERT INTO films_directors (film_id, director_id) VALUES (9, 8);
INSERT INTO films_directors (film_id, director_id) VALUES (10, 4);

CREATE TABLE customers (
	id serial PRIMARY KEY,
	name text NOT NULL,
	payment_token char(8) NOT NULL UNIQUE CHECK (payment_token ~ '^[A-Z]{8}$')
);

CREATE TABLE services (
	id serial PRIMARY KEY,
	description text NOT NULL,
	price numeric(10, 2) NOT NULL CHECK (price >= 0.00)
);

INSERT INTO customers (name, payment_token)
     VALUES ('Pat Johnson', 'XHGOAHEQ'),
            ('Nancy Monreal', 'JKWQPJKL'),
	    ('Lynn Blake', 'KLZXWEEE'),
	    ('Chen Ke-Hua', 'KWETYCVX'),
	    ('Scott Lakso', 'UUEAPQPS'),
	    ('Jim Pornot', 'XKJEYAZA');

INSERT INTO services (description, price)
VALUES
  ('Unix Hosting', 5.95),
  ('DNS', 4.95),
  ('Whois Registration', 1.95),
  ('High Bandwidth', 15.00),
  ('Business Support', 250.00),
  ('Dedicated Hosting', 50.00),
  ('Bulk Email', 250.00),
  ('One-to-one Training', 999.00);

CREATE TABLE customers_services (
	id serial PRIMARY KEY,
	customer_id integer REFERENCES customers (id) ON DELETE CASCADE NOT NULL,
	service_id integer REFERENCES services (id) NOT NULL,
	UNIQUE(customer_id, service_id)
);

// Write a query to retrieve the customer data for every customer who currently subscribes to at least one service
SELECT DISTINCT customers.* FROM customers
INNER JOIN customers_services ON customers.id = customers_services.customer_id;

// Write a query to retrieve the customer data for every customer who does not currently subscribe to any services
SELECT customers.* FROM customers
LEFT OUTER JOIN customers_services On customers.id = customers_services.customer_id
WHERE service_id IS NULL;

// Can you write a query that displays all customers with no services and services that currently don t have any customers?

SELECT customers.*, services.* FROM customers
FULL OUTER JOIN customers_services On customers.id = customers_services.customer_id
FULL OUTER JOIN services ON customers_services.service_id = services.id
WHERE service_id IS NULL OR customer_id IS NULL;


ALTER TABLE stars ALTER spectral_type
ADD CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M'));

ALTER TABLE stars DROP CONSTRAINT stars_spectral_type_check;
CREATE TYPE spectral_type_enum AS ENUM ('O', 'B', 'A', 'F', 'G', 'K', 'M');
ALTER TABLE stars ALTER COLUMN spectral_type TYPE spectral_type_enum USING spectral_type::spectral_type_enum;

ALTER TABLE planets
-- mass to allow fractional masses, required and positive
ALTER mass TYPE numeric, 
ALTER mass SET NOT NULL, 
ADD CHECK (mass > 0.0),

-- designation required
ALTER designation SET NOT NULL;

ALTER TABLE planets ADD COLUMN semi_major_axis NUMERIC NOT NULL;

CREATE TABLE moons (
	id serial PRIMARY KEY,
	designation integer NOT NULL,
	semi_major_axis numeric CHECK (semi_major_axis > 0),
	mass numeric CHECK (mass > 0),
	planet_id integer NOT NULL REFERENCES planets (id)
);

SELECT parts.part_number FROM parts WHERE part_number::text LIKE '1%';

SELECT * FROM devices ORDER BY created_at LIMIT 1;

UPDATE parts
   SET device_id = 2 
 WHERE part_number = 
       (SELECT min(part_number) 
          FROM parts);

CREATE TABLE customers_services (
  id serial PRIMARY KEY,
  customer_id integer
    REFERENCES customers (id)
    ON DELETE CASCADE
    NOT NULL,
  service_id integer
    REFERENCES services (id)
    NOT NULL,
  UNIQUE(customer_id, service_id)
);

SELECT
    CASE
        WHEN (lag(c.name) OVER (ORDER BY c.name)) = c.name THEN ''
        ELSE c.name
    END AS name, s.description
FROM customers AS c
LEFT OUTER JOIN customers_services
             ON customer_id = c.id
LEFT OUTER JOIN services AS s
             ON s.id = service_id;


-- Copy data for bidders from the csv file to the bidders table
\copy bidders FROM 'bidders.csv' WITH HEADER CSV

SELECT items.name FROM items WHERE id IN (SELECT item_id FROM bids);
~
