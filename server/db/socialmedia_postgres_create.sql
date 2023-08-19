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




ALTER TABLE public.textPost ADD CONSTRAINT "users_fk0" FOREIGN KEY ("species_id") REFERENCES  public.species("_id");
ALTER TABLE public.people ADD CONSTRAINT "people_fk1" FOREIGN KEY ("homeworld_id") REFERENCES  public.planets("_id");
