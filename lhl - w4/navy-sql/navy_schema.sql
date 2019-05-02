
\c navy;

DROP TABLE IF EXISTS dutie;
DROP TABLE IF EXISTS ship;
DROP TABLE IF EXISTS fleet;
DROP TABLE IF EXISTS sailor;
DROP TABLE IF EXISTS rank;


CREATE TABLE fleet (
  flee_id INTEGER PRIMARY KEY,
  flee_name VARCHAR(50)
);

CREATE TABLE sailor (
  sailo_id INTEGER PRIMARY KEY,
  dob DATE,
  sailo_name VARCHAR(50)
);

CREATE TABLE rank (
  ran_id INTEGER PRIMARY KEY,
  rank_type VARCHAR(50)
);

CREATE TABLE ship (
  shi_id INTEGER PRIMARY KEY,
  date_built DATE,
  shi_name VARCHAR(50),
  flee_id INTEGER REFERENCES fleet (flee_id) NOT NULL
);

CREATE TABLE dutie (
  dutie_id INTEGER PRIMARY KEY,
  start_d DATE,
  end_d DATE,
  ship_id INTEGER REFERENCES ship (shi_id) NOT NULL,
  sailor_id INTEGER REFERENCES sailor (sailo_id) NOT NULL,
  rank_id INTEGER REFERENCES rank (ran_id) NOT NULL
);





























