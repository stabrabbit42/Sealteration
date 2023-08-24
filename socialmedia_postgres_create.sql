-- -- Drop the imagepost table and any constraints if they exist
-- DROP TABLE IF EXISTS public.imagepost;

-- -- Drop the textpost table and any constraints if they exist
-- DROP TABLE IF EXISTS public.textpost;

-- -- Drop the users table and any constraints if they exist
-- DROP TABLE IF EXISTS public.users;

CREATE TABLE public.users (
  "user_id" serial NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "hash_id" varchar,
  "display_name" varchar,
  "interests" varchar,
  "age" integer,
  "location" varchar,
  "education" varchar,
  "job" varchar,
  CONSTRAINT "user_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.textPost (
  "post_id" serial NOT NULL,
  "user_id" serial NOT NULL REFERENCES public.users(user_id),
  "content" varchar NOT NULL,
  CONSTRAINT "textPost_pk" PRIMARY KEY ("post_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.imagePost (
  "post_id" serial NOT NULL,
  "user_id" serial NOT NULL REFERENCES public.users(user_id),
  "image_data" bytea NOT NULL,
  "caption" varchar,
  CONSTRAINT "imagePost_pk" PRIMARY KEY ("post_id")
) WITH (
    OIDS=FALSE
);

ALTER TABLE public.textPost ADD CONSTRAINT "users_fk0" FOREIGN KEY ("user_id") REFERENCES  public.users("user_id");
ALTER TABLE public.imagePost ADD CONSTRAINT "users_fk1" FOREIGN KEY ("user_id") REFERENCES  public.users("user_id");
ALTER TABLE public.textPost ADD likes INT;

-- psql -d postgres://dulmbgqe:L0ZqiYkMx2H9ApdNWK-exIK8uPr-fGfu@batyr.db.elephantsql.com/dulmbgqe  -f socialmedia_postgres_create.sql