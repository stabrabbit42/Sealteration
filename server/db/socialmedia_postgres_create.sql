-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off; explain these lines from this sql file that creates the tables for an sql server



CREATE TABLE public.users (
	"user_id" serial NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"display name" varchar,
	"hair_color" varchar,
	"interests" varchar,
	"age" varchar,
	"location" varchar,
	"education" varchar,
	"job" varchar,
	CONSTRAINT "user_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE  public.textPost (
	"post_id" serial NOT NULL,
	"user_id" varchar NOT NULL REFERENCES public.users(user_id),
	"content" varchar NOT NULL,
	CONSTRAINT "textPost_pk" PRIMARY KEY ("post_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.imagePost (
    post_id serial NOT NULL,
    user_id integer NOT NULL REFERENCES public.users(user_id),
    image_data bytea NOT NULL,
    caption varchar,
    CONSTRAINT imagePost_pk PRIMARY KEY (post_id)
) WITH (
    OIDS=FALSE
);




ALTER TABLE public.users ADD CONSTRAINT "users_fk0" FOREIGN KEY ("species_id") REFERENCES  public.species("_id");
ALTER TABLE public.people ADD CONSTRAINT "people_fk1" FOREIGN KEY ("homeworld_id") REFERENCES  public.planets("_id");

